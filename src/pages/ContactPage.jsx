import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Estimation from '../components/Estimation.jsx';

export default function ContactPage() {
  return (
    <div className="scroll-smooth">
      <SEO
        title="Contact & Devis — Prépa MonArchi"
        description="Demandez votre devis personnalisé pour intégrer une ENSA. Réponse sous 24h par un conseiller pédagogique."
        path="/contact"
        keywords={["devis prépa architecture", "contact prépa ENSA"]}
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
              <MessageCircle size={14} className="text-[color:var(--color-accent,orange)]" />
              CONTACT
            </span>
            
            <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
              Parlons de votre <span className="italic text-[color:var(--color-blue,#2563eb)]">projet</span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Un conseiller pédagogique vous recontacte sous 24h pour vous proposer un accompagnement sur-mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <div className="">
        <Estimation />
      </div>
      
    </div>
  )
}