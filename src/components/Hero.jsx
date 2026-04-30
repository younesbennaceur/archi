import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero.jpg"
          alt="Vue sur Paris"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold text-[color:var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            INSCRIPTIONS 2026/2027 OUVERTES
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-[color:var(--color-ink)] leading-[1.05]">
            Votre avenir en
            <br />
            École
            <span className="text-[color:var(--color-blue)]"> d'Architecture</span>
          </h1>

          <p className="mt-6 max-w-2xl font-semibold text-lg text-slate-900">
            Préparez les concours d'entrée aux ENSA avec des architectes passionnés.
            La référence pour construire un dossier solide et convaincre le jury.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
            >
              Découvrir nos modules
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 backdrop-blur px-6 py-3 text-[color:var(--color-ink)] font-semibold hover:border-slate-400 transition"
            >
              <Calendar size={18} />
              Prendre rendez-vous
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
