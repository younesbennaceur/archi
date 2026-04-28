import { motion } from 'framer-motion'

const team = [
  { 
    name: 'Solveig Alegre', 
    role: 'Arts plastiques',
    desc: 'Préparation du book et épreuves d’arts plastiques',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Marie-Pierre Bague', 
    role: 'Urbanisme & Entretiens',
    desc: "Projet architectural, Urbanisme et Préparation aux entretiens d'admission",
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Béatrice Seilliez', 
    role: 'Histoire & Culture',
    desc: "Culture architecturale et histoire de l'architecture",
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Quentin Dejonghe', 
    role: 'Projet & Outils',
    desc: 'Projet architectural, Méthodologie rédactionnelle et informatique',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Michelle Seawell', 
    role: 'Anglais',
    desc: 'Anglais appliqué à l\'architecture',
    img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=500&q=80' 
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
              
              {/* Gradient plus sombre pour garantir la lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black" />
              
              {/* Contenu textuel qui remonte au survol */}
              <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-white font-bold leading-tight">{m.name}</h3>
                <p className="text-[color:var(--color-accent,orange)] text-[10px] font-black mt-1 uppercase tracking-wider">
                  {m.role}
                </p>
                
                {/* Description cachée par défaut, révélée au survol */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <p className="text-slate-300 text-xs overflow-hidden mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}