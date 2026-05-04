import { motion } from 'framer-motion'

const team = [
  { 
    name: 'Solveig Alegre', 
    role: "Architecte diplômée de l'ENSA Belleville",
    desc: 'Préparation du book et épreuves d’arts plastiques',
    link: 'http://solveig.alegre.art',
    linkText: 'Voir le portfolio',
    img: '/Solveig Alegre.png' 
  },
  { 
    name: 'Marie-Pierre Bague De Bary', 
    role: "Architecte diplômée de l'ENSA Paris Val De Seine",
    desc: "Projet architectural, Urbanisme et Préparation aux entretiens d'admission",
    link: 'https://www.instagram.com/bague_de_bary_architecte',
    linkText: 'Voir sur Instagram',
    img: 'marie-pierre-bague-de-bary-192x192-1.jpg' 
  },
  { 
    name: 'Béatrice Seilliez', 
    role: "Architecte diplômée de l'ENSA Lille",
    desc: "Culture architecturale et histoire de l'architecture",
    img: '/IMG_4731.jpeg' 
  },
  { 
    name: 'Quentin Dejonghe', 
    role: "Architecte diplômé de l'ESA Paris",
    desc: 'Projet architectural, Méthodologie rédactionnelle et informatique',
    link: 'https://editionspolygone.com/',
    linkText: 'Éditions Polygone',
    img: '/Quentin DEJONGHE.jpg' 
  },
  { 
    name: 'Delphine Zucarelli', 
    role: "Architecte diplômée de Paris VILLEMIN",
    desc: "Anglais appliqué à l'architecture",
    img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Nicolas Corre', 
    role: "Architecte diplômé de l'ENSA Grenoble",
    desc: "Coaching organisation des études d'architecture, Préparation aux entretiens",
    img: '/Nicolas Corre.jpeg' 
  },
]

export default function Team() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-[color:var(--color-accent,orange)] font-semibold text-sm">
          <span className="h-px w-8 bg-[color:var(--color-accent,orange)]" />
          EXPERTISE &amp; EXCELLENCE
        </div>
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-2xl text-slate-900">
            L'équipe pédagogique<br />
            <span className="italic text-[color:var(--color-blue,#2563eb)]">pour vous encadrer</span>
          </h2>
          <p className="max-w-md text-slate-600">
            Une synergie de compétences pointues : architectes praticiens, urbanistes, plasticiens et linguistes, tous unis par la même passion de la transmission.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-[3/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={m.img} 
                alt={m.name} 
                className="h-full w-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
              
              <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-white font-bold leading-tight">{m.name}</h3>
                <p className="text-[color:var(--color-accent,orange)] text-[10px] font-black mt-1 uppercase tracking-wider">
                  {m.role}
                </p>
                
                {/* Conteneur animé pour la description et le bouton */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                      {m.desc}
                    </p>
                    
                    {/* Bouton conditionnel (s'affiche uniquement si un lien existe) */}
                    {m.link && (
                      <a 
                        href={m.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-4 py-1.5 bg-white/20 hover:bg-[color:var(--color-accent,orange)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()} // Évite les conflits si la carte entière devient cliquable plus tard
                      >
                        {m.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}