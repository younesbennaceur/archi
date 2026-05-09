import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Calendar, ArrowLeft, ArrowRight, Quote, 
  BookOpen, Globe, Lightbulb, PenTool, Image as ImageIcon, MessageSquare, 
  ChevronDown, List, Target, Users, ChevronRight, Camera, Info, Building, Compass, FileText, Eye, Landmark, Mic, UserPlus
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

export default function StageBootCampPage() {
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
        title="Stage Prépa Boot Camp Architecture | Devenir Architecte"
        description="Une préparation intégrale aux admissions en école d’architecture : 33 heures de cours intensifs en petit groupe."
        path="/services/stage-boot-camp"
      />

      {/* HERO SECTION avec l'image CIUP, overlay et Copyright obligatoire */}
      <section className="relative overflow-hidden bg-slate-900 text-white pb-12">
        <div className="absolute inset-0 -z-0">
          <img 
            src="https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-6-PARIS-ZIGZAG.jpg" 
            alt="Architecture Cité Universitaire - Stage intensif" 
            className="h-full w-full object-cover opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Toutes les formations
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-5xl"
          >
            Stage Prépa Boot Camp
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-6 text-xl text-white/90 max-w-2xl font-medium"
          >
            Le contenu pédagogique couvre une préparation intégrale aux admissions en école d’architecture.
          </motion.p>
        </div>

        {/* COPYRIGHT OBLIGATOIRE */}
        <div className="absolute bottom-4 right-4 z-20 hidden sm:block">
          <div className="group relative flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-xs text-white/70 transition-all hover:bg-black/80 hover:text-white">
            <Camera size={12} className="text-[color:var(--color-accent,orange)]" />
            <span>© Antoine Meyssonnier</span>
            <Info size={12} className="opacity-40 group-hover:opacity-100 transition-opacity ml-1" />
            
            {/* Infobulle (Tooltip) au survol */}
            <div className="absolute bottom-full right-0 mb-2 hidden w-72 rounded-xl bg-slate-950 p-3 text-[11px] leading-relaxed text-slate-300 shadow-xl border border-slate-800 group-hover:block pointer-events-none">
              <p className="font-bold text-white mb-0.5">Fondation Avicenne</p>
              Joyau architectural du XXe siècle niché au sein de la Cité internationale universitaire de Paris.
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="bg-white pb-24 pt-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* COLONNE GAUCHE (Sommaire + Texte détaillé) */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* SOMMAIRE UX */}
              <nav className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <List size={18} /> Au sommaire de cette page
                </h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#objectifs" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Objectifs du stage
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#programme" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Programme pédagogique
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#semaine-type" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Déroulement de la semaine type
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#admissions" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Admissions
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                </ul>
              </nav>

              {/* BLOC : L'inspiration architecturale CIUP */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full ">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Un cadre immersif pour votre stage intensif</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     Le Boot Camp se déroule au cœur du 14e arrondissement, à quelques pas de la <strong>Cité Internationale Universitaire de Paris</strong>. 
                   </p>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Ce véritable musée d'architecture à ciel ouvert est le terrain de jeu idéal pour vos exercices de croquis en extérieur et pour forger vos références architecturales lors de cette semaine décisive.
                   </p>
                </div>
                
              </div>

              {/* OBJECTIFS */}
              <div id="objectifs" className="scroll-mt-10 space-y-8">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Target size={20} /></span>
                  Objectifs
                </h2>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  Notre stage Boot Camp (<span className="font-bold">33 heures de cours en petit groupe de neuf participants</span>) poursuit deux grands objectifs :
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex flex-col gap-4">
                    <div className="bg-[color:var(--color-accent,orange)] w-10 h-10 rounded-full flex items-center justify-center text-white">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-900 font-medium leading-relaxed">
                      Vous préparer aux attendus pour intégrer une École Nationale Supérieure d’Architecture (ENSA) : projet motivé, portfolio et entretiens de motivation.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex flex-col gap-4">
                    <div className="bg-[color:var(--color-accent,orange)] w-10 h-10 rounded-full flex items-center justify-center text-white">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-900 font-medium leading-relaxed">
                      Mettre en place une stratégie d’orientation efficace et diversifiée, tout en développant votre éveil culturel et architectural, afin de confirmer votre désir d’entreprendre des études d’architecture.
                    </p>
                  </div>
                </div>

                <div className="inline-block mt-4 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl text-sm">
                  Le contenu pédagogique couvre une préparation intégrale aux admissions en école d’architecture.
                </div>
              </div>

              {/* BREAK VISUEL 1 : Bannière immersive de conception */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-3xl overflow-hidden shadow-md my-8"
              >
                <img src="/img2.jpeg" alt="Conception en atelier" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent flex items-center px-8 sm:px-12">
                   <p className="text-white font-black tracking-tight text-xl sm:text-2xl max-w-md leading-snug">
                      Une semaine intensive pour transformer votre créativité en atout décisif.
                   </p>
                </div>
              </motion.div>

              <hr className="border-slate-200" />

              {/* PROGRAMME */}
              <div id="programme" className="scroll-mt-10 space-y-10">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><BookOpen size={20} /></span>
                  Programme
                </h2>

                <div className="space-y-10 text-slate-700 leading-relaxed">
                  
                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Users size={24} className="text-slate-400" /> Bénéficiez de l’enseignement de professeurs architectes et scénographes expérimentés</h3>
                    <p>Durant cette semaine intensive, vous êtes encadré par des enseignants diplômés de grandes écoles d’architecture. Le stage est conçu pour constituer un dossier d’admission solide, depuis la lettre de motivation jusqu’à l’entretien oral, en passant par la constitution du book et l’enrichissement de votre culture architecturale.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Compass size={24} className="text-slate-400" /> Suivez nos conseils d’orientation</h3>
                    <p className="mb-3">Dès la première séance, nous vous proposons une présentation approfondie du métier d’architecte, des différentes écoles et de leurs spécificités. Vous disposez ainsi de toutes les clés pour orienter vos choix en fonction de vos aspirations professionnelles. Un questionnaire d’orientation complété, ainsi que vos travaux personnels, vos notes et vos crayons, vous seront utiles tout au long du stage ; pensez également à apporter votre ordinateur portable.</p>
                    <p>Nous insistons pour que vous nous montriez l’ensemble de vos productions sans les trier à l’avance : il est fréquent que des travaux « porteurs » pour un jury soient écartés par les élèves. Nous effectuons avec vous la sélection et les retouches nécessaires.</p>
                  </div>

                  {/* BREAK VISUEL 2 : Grille de 2 images (Dessin et Échanges) */}
                  <div className="grid sm:grid-cols-2 gap-6 my-10">
                    <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-slate-100">
                      <img src="/img3.jpeg" alt="Dessin sur table" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-slate-100">
                      <img src="/img4.jpeg" alt="Correction de travaux" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><FileText size={24} className="text-slate-400" /> Rédigez une lettre de motivation percutante</h3>
                    <p>La lettre de motivation (ou projet motivé) constitue la pièce centrale de votre dossier de candidature aux ENSA. Durant le stage, nous vous guidons dans sa rédaction en vous apportant une structure claire, des conseils sur la forme à adopter et les arguments à mettre en avant pour convaincre le jury. Nos professeurs corrigent et enrichissent votre lettre tout au long de la semaine.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><PenTool size={24} className="text-slate-400" /> Pratiquez le dessin et familiarisez-vous avec la technique du book</h3>
                    <p>Une matinée entière est consacrée à l’initiation au dessin et au croquis d’architecture, outil d’observation, d’analyse et de conception du projet architectural. Vous apprenez également la méthodologie du book (portfolio) : comment sélectionner, organiser et présenter vos travaux personnels pour constituer un recueil percutant. À l’issue du stage, vous aurez les moyens de faire évoluer votre book en toute autonomie.</p>
                  </div>

                  {/* BREAK VISUEL 3 : Carte image avec légende en surimpression */}
                  <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-200 my-10">
                     <img src="/img5.jpg" alt="Sortie croquis d'architecture" className="w-full h-72 object-cover" />
                     <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md p-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                           <p className="font-bold text-slate-900 text-sm">Aiguisez votre regard in situ</p>
                           <p className="text-xs text-slate-600">Des sorties d'observation et de croquis sur le vif pour stimuler votre perception de l'espace.</p>
                        </div>
                        <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg w-fit">Sorties guidées</span>
                     </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Eye size={24} className="text-slate-400" /> Développez votre sens de l’observation</h3>
                    <p>Une visite architecturale en extérieur, avec croquis sur le vif, vous aide à ouvrir votre regard sur l’environnement bâti et à aiguiser votre sensibilité urbaine.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Landmark size={24} className="text-slate-400" /> Renforcez votre culture architecturale</h3>
                    <p>Un cours d’histoire de l’architecture – de l’Antiquité à nos jours – vous offre un panorama complet pour enrichir rapidement votre bagage culturel. Nos professeurs partagent en outre leurs recommandations de lectures et de revues spécialisées pour poursuivre cet enrichissement sur le long terme.</p>
                  </div>

                  {/* BREAK VISUEL 4 : Bannière minimaliste de mise en situation */}
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col sm:flex-row gap-6 items-center my-8">
                     <img src="/img6.JPG" alt="Simulation d'oral face au jury" className="w-full sm:w-1/3 h-40 object-cover rounded-2xl shadow-sm" />
                     <div className="space-y-2">
                        <p className="text-slate-900 font-bold text-lg">Préparez l'épreuve décisive de l'oral</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           Simulez les conditions réelles des jurys d'admission pour apprendre à argumenter vos choix et structurer votre prise de parole.
                        </p>
                     </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Mic size={24} className="text-slate-400" /> Entraînez-vous aux oraux</h3>
                    <p>La préparation à l’entretien oral occupe une place importante dans le programme. Vous apprenez à commenter une œuvre, structurer votre discours, mobiliser votre culture architecturale et répondre aux questions les plus délicates. Des exercices et des simulations avec deux professeurs vous permettent de vous entraîner et d’être corrigé directement.</p>
                  </div>

                  {/* BREAK VISUEL 5 : Double image (Book et Correction) */}
                  <div className="grid sm:grid-cols-2 gap-6 my-8">
                     <img src="/img7.jpg" alt="Élaboration graphique" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                     <img src="/img8.jpg" alt="Retours sur dossier" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                  </div>

                  <div className="relative pl-6 border-l-4 border-[color:var(--color-accent,orange)] bg-orange-50/50 p-6 rounded-r-2xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><UserPlus size={24} className="text-[color:var(--color-accent,orange)]" /> Bénéficiez d’un accompagnement continu après le stage</h3>
                    <p>L’accompagnement ne s’arrête pas à la fin de la semaine : nos professeurs restent disponibles pour vous conseiller, vous aider à finaliser vos dossiers et affiner votre orientation. Une séance libre est organisée le samedi matin sur le coaching d’orientation et l’initiation aux logiciels d’architecture, pour ceux qui souhaitent parfaire leur préparation.</p>
                  </div>

                  {/* BREAK VISUEL 6 : Dernière image pour illustrer l'esprit de promotion */}
                  <div className="rounded-3xl overflow-hidden shadow-sm my-8 border border-slate-100">
                     <img src="/img9.JPG" alt="Ambiance en stage intensif" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                  </div>

                </div>
              </div>

              <hr className="border-slate-200" />

              {/* SEMAINE TYPE INTERACTIVE */}
              <div id="semaine-type" className="scroll-mt-10 space-y-8">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Calendar size={20} /></span>
                  Déroulement de la semaine type
                </h2>

                <div className="mt-8">
                  <AccordionItem 
                    title="Lundi"
                    content="Matin : séance d’ouverture – présentation du parcours du professeur-architecte, du métier, des écoles, des modalités de concours et des quatre piliers de la candidature (CV, projet motivé, book, oral)."
                  />
                  <AccordionItem 
                    title="Mardi"
                    content={`• Matin : histoire de l’architecture.\n• Après-midi : culture architecturale, projet motivé, suivi d’orientation.`}
                  />
                  <AccordionItem 
                    title="Mercredi"
                    content={`• Matin : culture architecturale, projet motivé, suivi d’orientation.\n• Après-midi : visite architecturale et croquis.`}
                  />
                  <AccordionItem 
                    title="Jeudi"
                    content={`• Matin : cours et exercices de préparation aux entretiens.\n• Après-midi : culture architecturale, projet motivé, suivi d’orientation.`}
                  />
                  <AccordionItem 
                    title="Vendredi"
                    content={`• Matin : dessin/croquis d’architecture et étude du portfolio.\n• Après-midi : simulations d’entretiens (jury de deux professeurs) et présentations de portfolios.`}
                  />
                  <AccordionItem 
                    title="Samedi"
                    content="Matin (facultatif) : coaching d’orientation et initiation aux logiciels d’architecture."
                  />
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* ADMISSIONS */}
              <div id="admissions" className="scroll-mt-10 space-y-6">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Check size={20} /></span>
                  Admissions
                </h2>
                
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-4 shadow-sm inline-block">
                  <p className="text-slate-900 font-bold text-lg">
                    Ces stages sont ouverts à tous.
                  </p>
                </div>
              </div>

            </div>

            {/* COLONNE DROITE (Infos pratiques + CTA) */}
            <aside id="infos" className="space-y-6 lg:sticky lg:top-24 self-start">
              
              {/* Dates & Lieu */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
                <h3 className="text-2xl font-black text-slate-900 mb-6">
                  Lieux & Dates
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Lieu</p>
                      <p className="text-slate-900 font-medium leading-relaxed">
                        Les stages se déroulent à Paris, au sein de notre école ou en distanciel selon la session choisie.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Toussaint 2026 */}
                    <div>
                      <p className="text-sm font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-2">Toussaint 2026</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>19 au 23 octobre 2026 (Présentiel & Distanciel - Zones A, B, C)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Noël 2026 */}
                    <div className="pt-2">
                      <p className="text-sm font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-2">Noël 2026</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>28 déc. 2026 au 2 janv. 2027 (Distanciel - Zones A, B, C | Pas de cours le 1er janv.)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Hiver 2027 Présentiel */}
                    <div className="pt-2">
                      <p className="text-sm font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-2">Hiver 2027 (Présentiel)</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>8 au 12 février 2027 (Zone C)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>15 au 19 février 2027 (Zones A, C)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>22 au 26 février 2027 (Zones A, B)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Hiver 2027 Distanciel */}
                    <div className="pt-2">
                      <p className="text-sm font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-2">Hiver 2027 (Distanciel)</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>15 au 19 février 2027 (Zones A, C)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>22 au 26 février 2027 (Zones A, B)</span>
                        </li>
                      </ul>
                    </div>
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
                  
                  <div className="mt-1 text-5xl font-black text-white tracking-tight">850 €</div>

                  <div className="mt-10">
                    <a
                      href="#" 
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[color:var(--color-accent,orange)] px-6 py-4 font-bold text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Réserver son stage
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