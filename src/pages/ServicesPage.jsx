import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Services from '../components/Services.jsx';
import Cta from '../components/Cta.jsx';

export default function ServicesPage() {
  return (
    <div className="scroll-smooth">
      <SEO
        title="Nos prépas architecture — Formules ENSA | Prépa MonArchi"
        description="4 formules de préparation aux concours ENSA : prépa annuelle temps plein, e-learning, boot camp intensif, stage entretien. Choisissez la formule adaptée à votre profil."
        path="/services"
        keywords={["prépa ENSA", "stage architecture", "boot camp architecture", "e-learning architecture"]}
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
              <BookOpen size={14} className="text-[color:var(--color-accent,orange)]" />
              NOS PRÉPAS
            </span>
            
            <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
              Choisissez la <span className="italic text-[color:var(--color-blue,#2563eb)]">formule</span> adaptée à votre profil
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              De la préparation annuelle en immersion totale aux stages intensifs à la carte, découvrez nos différents modules conçus pour réussir les concours ENSA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPOSANTS */}
      <Services />
      <Cta />
    </div>
  );
}