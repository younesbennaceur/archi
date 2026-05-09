import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Calendar, ArrowLeft, ArrowRight, Quote,
  List, ChevronRight, ChevronDown, Layers, Users, Accessibility, Info, Camera, PenTool, Building, Globe, BookOpen, Lightbulb, Clock, MessageSquare, Image as ImageIcon
} from 'lucide-react';
import SEO from '../components/SEO.jsx';

// Composant pour l'accordéon interactif du programme
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasContent = !!content;

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-3 bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => hasContent && setIsOpen(!isOpen)}
        className={`w-full text-left px-6 py-4 flex items-center justify-between ${hasContent ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
        {hasContent && (
          <ChevronDown 
            className={`shrink-0 text-[color:var(--color-accent,orange)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            size={20} 
          />
        )}
      </button>
      <AnimatePresence>
        {isOpen && hasContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-100 whitespace-pre-line">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Rhino3DPage() {
  const location = useLocation();

  // Défilement fluide vers les sections cibles au chargement ou lors d'un clic
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="scroll-smooth">
      <SEO
        title="Formation logiciel 3D Rhino | Devenir Architecte"
        description="Maîtriser la conception architecturale avec Rhinocéros 3D : modélisation, rendu professionnel et export de projects."
        path="/services/formation-rhino-3d"
      />

      {/* HERO SECTION avec l'image CIUP, overlay et Copyright */}
      <section className="relative overflow-hidden bg-slate-900 text-white pb-12">
        <div className="absolute inset-0 -z-0">
          <img 
            src="https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-3-PARIS-ZIZGAG.jpg" 
            alt="Architecture et Modélisation 3D Rhino - Cité Universitaire" 
            className="h-full w-full object-cover opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Toutes les formations
          </Link>

          <div className="mt-8 flex flex-wrap gap-3 mb-6">
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Présentiel
            </span>
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Alternance de théorie et pratique
            </span>
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Formation sur 4 jours (24h de cours)
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-5xl"
          >
            Formation logiciel 3D Rhino
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-6 text-2xl text-[color:var(--color-accent,orange)] font-bold tracking-wide"
          >
            Maîtriser la conception architecturale avec Rhinocéros 3D
          </motion.p>
        </div>

      
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="bg-white pb-24 pt-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* COLONNE GAUCHE (Sommaire + Texte détaillé) */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* OBJECTIF GLOBAL */}
              <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                <p className="text-slate-900 font-medium text-lg leading-relaxed flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full p-2 mt-1 shrink-0"><Check size={20} /></span>
                  A l’issue de la formation, le stagiaire sera capable de maîtriser Rhinocéros 3D de la modélisation au rendu professionnel pour concevoir, développer et exporter des projets architecturaux professionnels
                </p>
              </div>

              {/* SOMMAIRE UX */}
              <nav className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <List size={18} /> Au sommaire de cette page
                </h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#programme" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Programme de formation détaillé
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#suivi" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Adaptation et suivi de la formation
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#handicap" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Accessibilité et Handicap
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                </ul>
              </nav>

              {/* SECTION: CADRE D'ÉTUDE */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full ">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Un cadre d'étude exceptionnel au cœur du 14e arrondissement</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     Notre école est située à proximité immédiate de la <strong>Cité Internationale Universitaire de Paris (CIUP)</strong>. Cet environnement unique offre à nos étudiants un musée d'architecture à ciel ouvert, idéal pour nourrir leur culture architecturale et s'exercer au croquis sur le vif.
                   </p>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Du Pavillon Suisse de Le Corbusier à la Fondation Avicenne, la diversité des styles architecturaux de la CIUP constitue une source d'inspiration inépuisable tout au long de votre formation.
                   </p>
                </div>
                
              </div>

              <hr className="border-slate-200" />

              {/* BREAK VISUEL 1 : Bannière d'immersion dans la CAO */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-3xl overflow-hidden shadow-md my-8"
              >
                <img src="/img2.jpeg" alt="Conception CAO et Modélisation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent flex items-center px-8 sm:px-12">
                   <p className="text-white font-black tracking-tight text-xl sm:text-2xl max-w-md leading-snug">
                      Passez de l'idée à la géométrie complexe avec précision.
                   </p>
                </div>
              </motion.div>

              {/* PROGRAMME DÉTAILLÉ */}
              <div id="programme" className="scroll-mt-24 space-y-8">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Layers size={20} /></span>
                  Programme de formation détaillé
                </h2>

                <div className="mt-8">
                  <AccordionItem 
                    title="MODULE 1 : Prendre en main le logiciel et ses fonctionnalités (6 heures)"
                    content={`Objectif : A l'issue de ce module le stagiaire sera capable de maîtriser l'interface et les fonctions de base du logiciel pour concevoir une micro-architecture en 3D\n\nChapitre 1 : Maîtriser l'interface du logiciel\nChapitre 2 : Identifier et gérer les différents types de fichiers\nChapitre 3 : Créer et modifier une micro-architecture en 3D\nÉvaluation Module 1`}
                  />
                  <AccordionItem 
                    title="MODULE 2 : Concevoir le site et le project architectural (6 heures)"
                    content={`Objectif : A l'issue de ce module le stagiaire sera capable de maîtriser les outils de conception du site et les éléments fondamentaux de la structure d'un bâtiment\n\nChapitre 1 : Concevoir et modifier les surfaces topographiques\nChapitre 2 : Concevoir les éléments de base du bâtiment\nÉvaluation Module 2`}
                  />
                  <AccordionItem 
                    title="MODULE 3 : Développer le project architectural et les détails constructifs (6 heures)"
                    content={`Objectif : A l'issue de ce module le stagiaire sera capable de développer et détailler le project architectural pour en assurer la cohérence technique et esthétique\n\nChapitre 1 : Intégrer les typologies et les éléments détaillés\nÉvaluation Module 3`}
                  />
                  <AccordionItem 
                    title="MODULE 4 : Analyser les charges et calibrer le project pour l'exportation (6 heures)"
                    content={`Objectif : A l'issue de ce module le stagiaire sera capable de préparer un project en vue de son export vers des logiciels de CAO et de présentation\n\nChapitre 1 : Définir et ajuster les vues du bâtiment\nChapitre 2 : Exporter le project vers d'autres logiciels\nÉvaluation Module 4`}
                  />
                </div>
              </div>

              {/* BREAK VISUEL 2 : Grille de 2 images (Modélisation / Maquette numérique) */}
              <div className="grid sm:grid-cols-2 gap-6 my-10">
                <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-slate-100">
                  <img src="/img3.jpeg" alt="Interface de modélisation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-slate-100">
                  <img src="/img4.jpeg" alt="Rendu 3D de structures" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* SUIVI DE LA FORMATION */}
              <div id="suivi" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Users size={20} /></span>
                  Adaptation et suivi de la formation :
                </h2>
                <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                  <p className="text-slate-700 leading-relaxed">
                    Un suivi de la formation et de l' accompagnement seront réalisés tout au long de la formation. La formation pourra être adaptée pour pallier des difficultés majeures rencontrées par l’apprenant.
                  </p>
                </div>
              </div>

              {/* BREAK VISUEL 3 : Carte image avec légende superposée */}
              <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-200 my-10">
                 <img src="/img5.jpg" alt="Formateur guidant un élève" className="w-full h-72 object-cover" />
                 <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md p-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                       <p className="font-bold text-slate-900 text-sm">Un apprentissage encadré par des experts</p>
                       <p className="text-xs text-slate-600">Des formateurs certifiés pour vous transmettre les meilleures pratiques métiers.</p>
                    </div>
                    <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg w-fit">Support dédié</span>
                 </div>
              </div>

              <hr className="border-slate-200" />

              {/* BREAK VISUEL 4 : Bannière minimaliste */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col sm:flex-row gap-6 items-center my-8">
                 <img src="/img6.JPG" alt="Matériel informatique et CAO" className="w-full sm:w-1/3 h-40 object-cover rounded-2xl shadow-sm" />
                 <div className="space-y-2">
                    <p className="text-slate-900 font-bold text-lg">Des outils professionnels à disposition</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       Formez-vous sur des postes performants configurés pour le calcul de charges et la fluidité des rendus haute définition.
                    </p>
                 </div>
              </div>

              {/* HANDICAP */}
              <div id="handicap" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Accessibility size={20} /></span>
                  Handicap :
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Toutes les formations dispensées à MONEDUCATION sont accessibles aux personnes en situation de handicap. Lors de l’inscription à nos formations, nous étudions avec le candidat en situation de handicap et à travers un questionnaire les actions que nous pouvons mettre en place pour favoriser son apprentissage. Pour cela, nous pouvons également nous appuyer sur un réseau de partenaires nationaux préalablement identifiés.
                </p>

                {/* BREAK VISUEL 5 : Double image illustrant l'accessibilité et les espaces */}
                <div className="grid sm:grid-cols-2 gap-6 my-8">
                   <img src="/img7.jpg" alt="Espace de formation accessible" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                   <img src="/img8.jpg" alt="Accompagnement personnalisé" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                </div>

                <p className="font-bold text-slate-900 mb-4">Coordonnées des partenaires handicap :</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* AGEFIPH */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="font-black text-[color:var(--color-accent,orange)] mb-2">AGEFIPH</p>
                    <p className="text-sm text-slate-700 font-medium">Bastien GIESBERGER M'Ballo SECK</p>
                    <p className="text-sm text-slate-600 mt-2">Contact mail uniquement :<br/><a href="mailto:rhf-idf@agefiph.asso.fr" className="text-blue-600 hover:underline">rhf-idf@agefiph.asso.fr</a></p>
                  </div>

                  {/* MDPH */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="font-black text-[color:var(--color-accent,orange)] mb-2">MDPH</p>
                    <p className="text-sm text-slate-700 font-medium">MDPH 93</p>
                    <p className="text-sm text-slate-600">7-11 rue Erik Satie<br/>93000 Bobigny</p>
                    <p className="text-sm text-slate-600 mt-2">01 43 93 86 86<br/><a href="mailto:info@place-handicap.fr" className="text-blue-600 hover:underline">info@place-handicap.fr</a></p>
                  </div>

                  {/* CAP EMPLOI */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="font-black text-[color:var(--color-accent,orange)] mb-2">CAP EMPLOI</p>
                    <p className="text-sm text-slate-600">7 rue Gilbert Gatouillat<br/>93600 - Aulnay-sous-Bois</p>
                    <p className="text-sm text-slate-600 mt-2">Tel : 01 48 19 88 60</p>
                  </div>

                  {/* APAJH */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="font-black text-[color:var(--color-accent,orange)] mb-2 leading-tight">Association Pour Adultes et Jeunes Handicapés</p>
                    <p className="text-sm text-slate-700 font-medium">Association APAJH de Seine Saint Denis</p>
                    <p className="text-sm text-slate-600">15-17 Avenue de Verdun<br/>93140 Bondy</p>
                  </div>
                </div>

                {/* BREAK VISUEL 6 : Dernière image pour illustrer la synergie d'équipe */}
                <div className="rounded-3xl overflow-hidden shadow-sm my-8 border border-slate-100">
                   <img src="/img9.JPG" alt="Esprit d'école et suivi" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                </div>

              </div>

            </div>

            {/* COLONNE DROITE (Infos pratiques + CTA) */}
            <aside id="infos" className="space-y-6 lg:sticky lg:top-24 self-start scroll-mt-24">
              
              {/* Dates & Lieu */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
                <h3 className="text-2xl font-black text-slate-900 mb-6">
                  Dates et lieu
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Lieu</p>
                      <p className="text-slate-900 font-medium leading-relaxed">
                        15 rue Henri Regnault<br/>75014 Paris
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Format</p>
                      <p className="text-slate-900 font-medium leading-relaxed">
                        Sessions de 4 jours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-sm text-slate-700 font-medium">
                    <Info size={24} className="text-blue-500 shrink-0" />
                    <p>Un délai minimum et incompressible de 14 jours entre l’inscription et l’accès à la formation est appliqué.</p>
                  </div>
                </div>
              </div>

              {/* Tarif + CTA */}
              <div className="rounded-3xl bg-slate-900 text-white p-8 relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color:var(--color-accent,orange)]/30 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white/80 mb-2 uppercase tracking-wider text-sm">
                    Tarif
                  </h3>
                  
                  <div className="mt-1 text-5xl font-black text-white tracking-tight">1 188 €</div>

                  <div className="mt-10">
                    <a
                      href="#" 
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[color:var(--color-accent,orange)] px-6 py-4 font-bold text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      S'inscrire à la formation
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}