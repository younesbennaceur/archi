import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import Pedagogy from '../components/Pedagogy.jsx';
import Team from '../components/Team.jsx';
import Avis from '../components/Avis.jsx';

export default function AboutPage() {
  return (
    <div className="scroll-smooth">
      <SEO
        title="La méthode Prépa MonArchi — Pédagogie architecture"
        description="Méthodologie éprouvée, équipe d'architectes praticiens, culture de la charrette : découvrez la pédagogie qui prépare réellement aux exigences des ENSA."
        path="/about"
        keywords={["méthode prépa architecture", "pédagogie ENSA", "équipe architectes"]}
      />

      {/* HERO SECTION SIMPLE & ÉLÉGANT */}
      <section className="bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wider text-slate-700 uppercase shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent,orange)]" />
              La Méthode MonArchi
            </span>
            
            <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
              Une pédagogie <span className="italic text-[color:var(--color-blue,#2563eb)]">à la hauteur</span> de vos ambitions
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez les coulisses de notre réussite : une méthodologie éprouvée, une équipe d'architectes passionnés et des résultats concrets.
            </p>

            {/* Menu de navigation interne - Minimaliste */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
              <a 
                href="#pedagogie" 
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-[color:var(--color-accent,orange)] hover:text-[color:var(--color-accent,orange)] transition-colors shadow-sm"
              >
                Notre Pédagogie
              </a>
              <a 
                href="#equipe" 
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-[color:var(--color-accent,orange)] hover:text-[color:var(--color-accent,orange)] transition-colors shadow-sm"
              >
                L'Équipe Pédagogique
              </a>
              <a 
                href="#avis" 
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-[color:var(--color-accent,orange)] hover:text-[color:var(--color-accent,orange)] transition-colors shadow-sm"
              >
                Avis & Témoignages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS AVEC ID POUR LE SCROLL */}
      <div id="pedagogie">
        <Pedagogy />
      </div>
      
      <div id="equipe">
        <Team />
      </div>
      
      <div id="avis">
        <Avis />
      </div>
      
    </div>
  );
}