import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { modules } from '../content/modules.js'

export default function Services() {
  // On cible spécifiquement la "Prépa Annuelle Temps Plein" pour la mettre en haut
  const mainModule = modules.find(m => m.slug === 'prepa-annuelle-temps-plein')
  
  // On récupère toutes les autres formations pour la grille en dessous
  const otherModules = modules.filter(m => m.slug !== 'prepa-annuelle-temps-plein')

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            PROGRAMMES
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
           Les différentes préparations à l'admission en école d'Architecture
          </h2>
          <p className="mt-4 text-slate-600">
            Des programmes millimétrés conçus avec les architectes pour répondre aux exigences spécifiques des concours ENSA, adaptés à tous les profils.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          
          {/* CARTE MISE EN AVANT (1 TOUT SEUL EN HAUT - PRÉPA ANNUELLE TEMPS PLEIN) */}
          {mainModule && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/services/${mainModule.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex flex-col md:flex-row rounded-3xl bg-white border border-slate-200/70 overflow-hidden hover:shadow-2xl transition"
              >
                {/* Image plus grande pour le module mis en avant */}
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={mainModule.cover} 
                    alt={mainModule.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  {mainModule.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-[color:var(--color-accent)] px-3 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-md">
                      {mainModule.tag}
                    </span>
                  )}
                </div>
                
                {/* Contenu textuel */}
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg w-fit mb-4">
                    PROGRAMME PRINCIPAL
                  </span>
                  <h3 className="font-black text-2xl md:text-3xl leading-snug uppercase text-slate-900">
                    {mainModule.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed flex-1">
                    {mainModule.subtitle}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="rounded-lg bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)] px-4 py-2 text-sm font-bold">
                      {mainModule.price}
                    </span>
                    <span className="h-10 w-10 rounded-full bg-[color:var(--color-ink)] text-white flex items-center justify-center group-hover:bg-[color:var(--color-accent)] transition shadow-md">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* GRILLE POUR LES AUTRES CARTES */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherModules.map((m, i) => (
              <motion.div
                key={m.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${m.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group flex flex-col h-full rounded-3xl bg-white border border-slate-200/70 overflow-hidden hover:shadow-xl transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={m.cover} 
                      alt={m.title} 
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    {m.tag && (
                      <span className="absolute top-3 left-3 rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-[10px] font-bold text-white shadow-sm">
                        {m.tag}
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-extrabold text-sm leading-snug uppercase text-slate-900">{m.title}</h3>
                    <p className="mt-3 text-xs text-slate-500 leading-relaxed flex-1">{m.short}</p>
                    
                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="rounded-md bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)] px-2 py-1 text-xs font-bold">
                        {m.price}
                      </span>
                      <span className="h-8 w-8 rounded-full bg-[color:var(--color-ink)] text-white flex items-center justify-center group-hover:bg-[color:var(--color-accent)] transition">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}