import { motion } from 'framer-motion'
import { GraduationCap, Plus, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    icon: GraduationCap,
    title: (
      <>
        Intégrez l'une des{' '}
        <span className="text-[color:var(--color-blue)]">meilleures écoles d'architecture</span> du monde
      </>
    ),
    body: "Un taux de réussite exceptionnel aux concours des ENSA, avec un accompagnement sur-mesure pour construire un portfolio percutant et préparer vos entretiens.",
    cta: 'Découvrir le programme',
    accent: 'blue',
    // Redirige EXACTEMENT vers la section des écoles à l'étranger
    link: '/services/prepa-annuelle-temps-plein#ecoles-etranger',
  },
  {
    icon: Plus,
    title: (
      <>
        <span className="text-[color:var(--color-blue)]">Excellez lors de votre cursus</span>{' '}
        en école d'architecture
      </>
    ),
    body: "Ne vous contentez pas d'entrer : apprenez à maîtriser les outils techniques, la culture et les codes de l'architecture pour briller dès votre première année.",
    cta: 'Notre pédagogie',
    accent: 'blue',
    // Redirige vers la section sur les bases techniques et logicielles
    link: '/services/prepa-annuelle-temps-plein#bases-techniques',
  },
  {
    icon: Rocket,
    title: (
      <>
        Prenez le{' '}
        <span className="text-[color:var(--color-blue)]">meilleur départ</span> dans votre carrière
      </>
    ),
    body: 'Construisez votre réseau professionnel, participez à des masterclasses exclusives avec des architectes renommés et préparez votre insertion future.',
    cta: 'Voir les débouchés',
    accent: 'blue',
    // Redirige vers la section sur l'orientation et le stage
    link: '/services/prepa-annuelle-temps-plein#orientation-pro',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            L'EXCELLENCE ARCHITECTURALE
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-[color:var(--color-ink)] leading-[1.1]">
            La meilleure prépa 100%
            <br />
            architecture de <span className="text-[color:var(--color-blue)]">France</span>
          </h2>
          <p className="mt-5 text-slate-600">
            Une méthodologie éprouvée, née en 2013, pour transformer votre passion en admission dans les écoles d'architecture les plus prestigieuses.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/70 p-8 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-blue)] text-white">
                <c.icon size={26} />
              </div>
              <h3 className="text-xl font-bold leading-snug">{c.title}</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">{c.body}</p>
              
              {/* Utilisation de <a> pour garantir le scroll croisé entre pages */}
              <Link
                to={c.link}
                className="mt-6 inline-flex items-center gap-1 font-semibold text-[color:var(--color-accent)] hover:gap-2 transition-all"
              >
                {c.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}