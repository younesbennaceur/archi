import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera } from 'lucide-react';

export default function CiteUniversitaireSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Arrière-plan animé : Taches de couleurs floues (Blobs) qui flottent */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <motion.div 
           animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[color:var(--color-accent,orange)]/5 rounded-full blur-3xl" 
         />
         <motion.div 
           animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" 
         />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Colonne Texte avec animation de révélation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-2 text-sm font-bold text-[color:var(--color-accent,orange)] shadow-sm">
              <MapPin size={16} /> Paris 14ème arrondissement
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              L'inspiration à <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent,orange)] to-orange-400">
                ciel ouvert.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Idéalement située à quelques pas de la célèbre <strong className="text-slate-900">Cité Internationale Universitaire de Paris</strong>, notre prépa vous plonge dans un environnement architectural exceptionnel. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Plus qu'un simple lieu d'étude, ses dizaines de pavillons aux styles du monde entier constituent un véritable terrain de jeu pour vos croquis en extérieur et la formation de votre œil d'architecte.
            </p>
          </motion.div>

          {/* Colonne Image avec effet 3D / Flottant */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Décoration autour de l'image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[color:var(--color-accent,orange)]/20 to-blue-500/20 rounded-[2.5rem] blur-lg transform -rotate-3 z-0" />
            
            {/* Conteneur principal de l'image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 group">
              
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-5-PARIS-ZIZGAG.jpg" 
                alt="Cité Universitaire de Paris" 
                className="w-full h-auto object-cover aspect-[4/3] transform origin-center"
              />
              
              {/* Badge Glassmorphism superposé sur l'image */}
              <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                 <motion.div 
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-2xl shadow-xl"
                 >
                    <div className="bg-[color:var(--color-accent,orange)] p-2 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/80 uppercase tracking-wider">Votre futur terrain d'étude</p>
                      <p className="text-sm font-bold">Fondation Deutsch de la Meurthe</p>
                    </div>
                 </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}