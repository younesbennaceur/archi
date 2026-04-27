import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Pedagogy() {
  // État pour savoir si la vidéo YouTube a été lancée
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* COLONNE GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-[color:var(--color-accent)] font-semibold text-sm">
            <span className="h-px w-8 bg-[color:var(--color-accent)]" />
            NOTRE PÉDAGOGIE
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Construisez les fondations de votre parcours.
          </h2>
          <p className="mt-6 text-slate-600 text-lg max-w-lg">
            La Prépa ArchiPrep vous aide à baliser votre parcours d'études « en fonction de votre profil » vers les voies, écoles, passerelles et concours pour devenir architecte avec
          </p>
          <span className="mt-4 inline-block rounded-md bg-[color:var(--color-accent-soft)] px-3 py-1 font-bold text-[color:var(--color-accent)]">
            100 % de réussite
          </span>

          <blockquote className="mt-8 border-l-2 border-[color:var(--color-accent)] pl-5 text-slate-500 italic max-w-md">
            La première année en école d'architecture demande une grande capacité d'adaptation due à la « culture de la Charrette ».
          </blockquote>
          <p className="mt-6 font-bold tracking-wide text-sm">
            ACQUÉREZ LES OUTILS &amp; LA MÉTHODOLOGIE.
          </p>
        </motion.div>

        {/* COLONNE DROITE (Podcast) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[color:var(--color-ink)] p-8 md:p-10 text-white overflow-hidden shadow-xl"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] animate-pulse" />
              RADIO COURTOISIE
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl font-black leading-tight">
              « Osmose picturale<br />et architecturale »
            </h3>
            <p className="mt-3 border-l-2 border-[color:var(--color-accent)] pl-3 text-slate-300">
              Libre journal des Beaux Arts (Sept. 2021)
            </p>

            {/* SYSTÈME CLICK-TO-LOAD YOUTUBE */}
            {isPlaying ? (
              // Le lecteur YouTube
              <div className="mt-8 w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hNDkdncXSCM?autoplay=1"
                  title="Podcast Radio Courtoisie"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // Votre fausse interface audio très esthétique
              <div className="mt-8 rounded-2xl bg-slate-900/60 p-6 flex flex-col sm:flex-row items-center gap-5">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="relative shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-accent)] shadow-lg shadow-orange-500/50 hover:scale-105 hover:bg-orange-500 transition-all cursor-pointer"
                >
                  <Play size={22} className="ml-0.5" fill="white" />
                </button>

                <div className="flex-1 w-full sm:w-auto">
                  <div className="flex items-end gap-1 h-10 overflow-hidden">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1 flex-1 rounded-full bg-[color:var(--color-accent)]/80"
                        style={{ height: `${20 + Math.abs(Math.sin(i)) * 80}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>00:00</span>
                    <span>-1:28:39</span>
                  </div>
                </div>

                <div className="text-center sm:text-right shrink-0 mt-4 sm:mt-0">
                  <div className="font-bold text-sm">FAIZ CHERAIET</div>
                  <div className="text-xs text-slate-400">DIRECTEUR PRÉPA</div>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}