import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronDown } from 'lucide-react'

// Vos avis avec une URL d'avatar génératif unique par nom
const allReviews = [
  {
    text: "J’ai passé une année (2023/2024) très enrichissante au sein de la prépa MonArchi. Les enseignants étaient tous plus passionnés les uns que les autres, motivants et à l’écoute. La diversité des cours m’a permis d’enrichir ma culture architecturale et de développer ma créativité. C’est une année qui m’a ouvert les portes de l’ENSA de Versailles !",
    name: 'Juliette Saint-Martin',
    role: "Prépa annuelle 2023/2024",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Juliette'
  },
  {
    text: "Une école préparatoire exceptionnelle, qui m’a accompagné personnellement jusqu’à la fin. Les professeurs m’ont énormément aidé et je leur suis profondément reconnaissante. Grâce à leur soutien, j’ai réussi à intégrer l’ENSA Paris-Val de Seine, mon premier choix. Je recommande vivement cette prépa.",
    name: 'Jade Scordel',
    role: "Prépa annuelle 2023/2024",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Jade'
  },
  {
    text: "Ayant été étudiant durant l’année 2021/2022, je peux dire que le niveau des enseignements est très bon. Grâce à cette bonne ambiance et l’encadrement continu des professionnels de l’école, j’ai pu décrocher une acceptation à l’ENSA de Nancy, c’était pour moi un rêve qui se concrétisait.",
    name: 'Réda D.',
    role: "Prépa annuelle 2021/2022",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Reda'
  },
  {
    text: "Ma fille Nisa a été admise à l'Ensa de Nancy grâce aux conseils, à l'accompagnement et au professionnalisme de Faiz Cheraiet. L’enseignement est pointu, d’excellente qualité. L’approche pédagogique est motivante. Je recommande vivement cette école qui est, à mon sens, la meilleure prépa en architecture à Paris.",
    name: 'Fadime K.',
    role: "Prépa annuelle samedi 2021/2022",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Fadime'
  },
  {
    text: "Une attention et un suivi personnalisé et bienveillant. Un Directeur fort d’une expérience de nombreuses années qui personnalise l’accompagnement par rapport aux affinités de chaque élève. Un programme structurant permettant de connaître bien plus que l’ensemble des fondamentaux.",
    name: 'Verena von L.',
    role: "Architecte-Ingénieure",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Verena'
  },
  {
    text: "Superbe prépa d’architecture ! Après avoir été refusé dans les ENSA en terminale, j’ai intégré cette prépa et je me suis vraiment épanoui. Les profs sont géniaux, et Mr Cheraiet aide chaque élève un par un. J’ai pu ainsi intégrer l’APA à l’ENSP Versailles. Merci à la prépa et aux professeurs !",
    name: 'Mélanie M.',
    role: "Prépa annuelle 2023/2024",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Melanie'
  },
  {
    text: "Je tenais à exprimer toute ma satisfaction. Les cours sont bien structurés et de grande qualité, offrant un excellent cadre pour l’apprentissage des élèves. Les professeurs sont très investis, à l’écoute et veillent au progrès de chacun avec beaucoup de professionnalisme.",
    name: 'Salomé K.',
    role: "Prépa annuelle 2023/2024",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Salome'
  },
  {
    text: "J’ai pu être encadré pendant un an par les meilleurs des meilleurs professeurs dont notre directeur qui était toujours de très bon conseil et à notre écoute. Je vous recommande vivement cette prépa si vous voulez booster vos chances d’aller dans une école d’architecture.",
    name: 'Noah D.',
    role: "Prépa annuelle samedi 2021/2022",
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Noah'
  }
];

export default function Avis() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
              RETOURS D'EXPÉRIENCE
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Ils ont dessiné<br />
              <span className="text-[color:var(--color-blue)]">leur avenir.</span>
            </h2>
          </div>
          <p className="text-slate-600 border-l-2 border-[color:var(--color-accent)] pl-4 max-w-md">
            Découvrez les parcours de nos anciens étudiants, aujourd'hui intégrés dans les meilleures Écoles Nationales Supérieures d'Architecture.
          </p>
        </div>

        <motion.div layout className="mt-14 grid md:grid-cols-3 gap-6 items-start">
          <AnimatePresence>
            {displayedReviews.map((r, i) => (
              <motion.div
                key={r.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-3xl bg-white border border-slate-200/70 p-8 shadow-sm hover:shadow-xl transition h-full flex flex-col"
              >
                <Quote size={64} className="absolute top-4 right-4 text-slate-100" fill="currentColor" />
                <div className="flex gap-1 text-[color:var(--color-accent)] mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed text-sm flex-1 relative z-10 italic">
                  « {r.text} »
                </p>
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  {/* Avatar génératif */}
                  <img 
                    src={r.avatar} 
                    alt={r.name} 
                    className="h-12 w-12 rounded-full bg-slate-100 p-1 border border-slate-200" 
                  />
                  <div>
                    <div className="font-bold text-slate-900">{r.name}</div>
                    <div className="text-xs font-semibold text-[color:var(--color-accent)] uppercase tracking-wider">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 rounded-full bg-white border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            {showAll ? "Masquer les avis" : "Lire plus de témoignages"}
            <ChevronDown size={18} className={`text-[color:var(--color-accent)] transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  )
}