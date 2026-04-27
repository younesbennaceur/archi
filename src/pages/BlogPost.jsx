import { useParams, Link, Navigate } from 'react-router-dom'
import { Clock, Calendar, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getArticle, getRelated } from '../content/articles.js'
import SEO from '../components/SEO.jsx'

const formatDate = iso =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogPost() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) return <Navigate to="/blog" replace />

  const related = getRelated(slug, 2)

  return (
    <>
      <SEO
        title={article.seo?.title || article.title}
        description={article.seo?.description || article.excerpt}
        path={`/blog/${article.slug}`}
        image={article.cover}
        keywords={article.seo?.keywords}
        type="article"
        article={article}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[color:var(--color-accent)]">
            <ArrowLeft size={16} /> Retour au journal
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="text-[color:var(--color-accent)]">{article.category}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><Calendar size={12} /> {formatDate(article.date)}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><Clock size={12} /> {article.readTime} min de lecture</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-slate-600">{article.excerpt}</p>

          <div className="mt-8 flex items-center gap-3 border-t border-b border-slate-100 py-4">
            <div className="h-10 w-10 rounded-full bg-[color:var(--color-ink)] text-white flex items-center justify-center font-bold text-sm">
              {article.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-sm">
              <div className="font-bold">{article.author.name}</div>
              <div className="text-slate-500">{article.author.role}</div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <img
            src={article.cover}
            alt={article.title}
            className="w-full rounded-3xl object-cover aspect-[16/9]"
            loading="eager"
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none">
            {article.content.map((block, i) => {
              if (block.type === 'h2')
                return <h2 key={i} className="mt-10 mb-4 text-2xl md:text-3xl font-black tracking-tight">{block.text}</h2>
              if (block.type === 'quote')
                return (
                  <blockquote key={i} className="my-8 border-l-4 border-[color:var(--color-accent)] pl-5 italic text-slate-600 text-lg">
                    {block.text}
                  </blockquote>
                )
              if (block.type === 'img')
                return <img key={i} src={block.src} alt={block.alt || ''} loading="lazy" className="my-6 w-full rounded-2xl" />
              return <p key={i} className="my-5 text-slate-700 leading-relaxed">{block.text}</p>
            })}
          </div>

          {article.tags?.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
              {article.tags.map(t => (
                <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              À lire aussi
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {related.map(a => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group rounded-3xl bg-white border border-slate-200/70 overflow-hidden hover:shadow-xl transition flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={a.cover} alt={a.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2 flex-1">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-accent)]">
                      Lire <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
