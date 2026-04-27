import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
  return (
    <section className="py-20 bg-[color:var(--color-ink)] relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--color-blue)]/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Prêt à dessiner votre avenir ?
        </h2>
        <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
          Obtenez un devis personnalisé en quelques clics. Notre équipe vous répond sous 24h avec un plan d'accompagnement adapté à votre profil.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-8 py-4 text-white font-semibold hover:bg-orange-600 transition"
        >
          Demander un devis
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
