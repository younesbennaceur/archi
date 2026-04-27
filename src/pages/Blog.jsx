import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowUpRight } from 'lucide-react'
import { articles } from '../content/articles.js'
import SEO from '../components/SEO.jsx'

const formatDate = iso =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const categories = useMemo(() => {
    const cats = articles.map(a => a.category)
    return ['Tous', ...new Set(cats)]
  }, [])

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'Tous') return articles
    return articles.filter(a => a.category === activeCategory)
  }, [activeCategory])

  const featured = filteredArticles[0]
  const rest = filteredArticles.slice(1)

  return (
    <div className="scroll-smooth">
      <SEO
        title="Blog — Prépa MonArchi | Conseils ENSA, portfolio & méthode"
        description="Le blog de Prépa MonArchi : méthode concours ENSA, conseils portfolio, culture architecturale et retours d'expérience étudiants."
        path="/blog"
        keywords={['blog architecture', 'conseils ENSA', 'portfolio', 'prépa architecture']}
      />

      {/* HERO SECTION SIMPLE & ÉLÉGANT (Harmonisé avec About) */}
      <section className="bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wider text-slate-700 uppercase shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent,orange)]" />
              JOURNAL
            </span>
            
            <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
              Le <span className="italic text-[color:var(--color-blue,#2563eb)]">journal</span> de la Prépa
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Méthode, culture architecturale, conseils portfolio et retours d'expérience : nos ressources pour bien préparer les concours ENSA.
            </p>

            {/* FILTRES CATEGORIES - STYLE PILULES */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-[color:var(--color-accent,orange)] hover:text-[color:var(--color-accent,orange)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <Link to={`/blog/${a.slug}`} onClick={() => window.scrollTo(0, 0)} className="flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={a.cover} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <span className="text-[color:var(--color-accent,orange)]">{a.category}</span>
                      <span>•</span>
                      <span>{a.readTime} min</span>
                    </div>
                    <h3 className="mt-4 text-xl font-black leading-snug text-slate-900 group-hover:text-[color:var(--color-blue,#2563eb)] transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 flex-1">{a.excerpt}</p>
                    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                      <span>{formatDate(a.date)}</span>
                      <span className="inline-flex items-center gap-1 text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-transform">
                        Lire <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}