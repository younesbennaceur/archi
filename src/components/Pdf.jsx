import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function CertificationQualiopi() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm"
        >
          {/* Logo Qualiopi */}
          <div className="shrink-0 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
            <img
              src="https://www.digiforma.com/wp-content/uploads/2025/03/logo_qualiopi.png"
              alt="Logo Certification Qualiopi"
              className="w-48 md:w-56 object-contain"
            />
          </div>

          {/* Texte de certification */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Award className="text-[color:var(--color-accent,orange)]" size={20} />
              <h3 className="text-lg font-bold text-slate-900">
                Organisme de formation certifié
              </h3>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed text-justify md:text-left">
              <strong>MONEDUCATION</strong> est certifiée conformément aux exigences du Référentiel National de Certification Qualité des organismes mentionnés à l’article L.6351-1 du Code du travail. La certification qualité a été délivrée au titre de la ou des catégories d’actions suivantes : actions de formation (OF – L.6313-1, 1°) ; actions de formations par apprentissage (CFA – L.6313-1, 4°).
            </p>
            
            <div className="mt-5">
              {/* Le lien pointe maintenant vers votre fichier local /qualiopi.pdf */}
              <a
                href="/Qualiopi.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[color:var(--color-accent,orange)] font-bold text-sm hover:text-orange-600 transition-colors group"
              >
                (Voir le certificat) 
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}