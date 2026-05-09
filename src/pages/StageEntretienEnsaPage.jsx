import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Calendar, ArrowLeft, ArrowRight, Quote, 
  Globe, Lightbulb, Image as ImageIcon, MessageSquare, 
  ChevronDown, List, Target, Users, ChevronRight, Mic, Monitor, UserCheck
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

export default function StageEntretienEnsaPage() {
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
        title="Stage Entretien ENSA | Devenir Architecte"
        description="Anticipez. Préparez. Réussissez. Notre stage intensif en ligne vous donne toutes les clés pour convaincre le jury."
        path="/services/stage-entretien-ensa"
      />

      {/* HERO SECTION sans crédit photographe */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-0">
          <img 
            src="/images/cover-entretien-ensa.jpg" 
            alt="Stage Entretien ENSA" 
            className="h-full w-full object-cover opacity-30 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
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
            Stage entretien ENSA
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-6 text-2xl text-[color:var(--color-accent,orange)] font-bold tracking-wide"
          >
            Anticipez. Préparez. Réussissez.
          </motion.p>
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
                        Programme & Objectifs
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#programme" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Déroulement des journées
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#pour-qui" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Ce programme est-il pour vous ?
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#admissions" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Admissions & Prérequis techniques
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                </ul>
              </nav>

              {/* BLOC : L'inspiration architecturale CIUP */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full ">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">L'environnement idéal pour une première approche</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     Ce stage d'entretien bénéficie de l'ancrage de notre école dans le 14e arrondissement, à proximité immédiate de la <strong>Cité Internationale Universitaire de Paris</strong>. 
                   </p>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Ses dizaines de pavillons aux styles architecturaux du monde entier (Fondation Suisse, Collège Néerlandais...) offrent un socle de références incontournable pour enrichir vos réponses et votre culture lors des simulations face au jury.
                   </p>
                </div>
                
              </div>

              {/* PROGRAMME & OBJECTIFS */}
              <div id="objectifs" className="scroll-mt-24 space-y-10">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Target size={20} /></span>
                    Programme & Objectifs
                  </h2>
                  <p className="mt-6 text-slate-700 text-lg leading-relaxed font-medium">
                    L’admission en école d’architecture (ENSA ou internationale) se joue en quelques minutes d’oral – une vingtaine en général – après une première phase de sélection sur dossier. Réussir ce moment décisif peut faire basculer votre candidature et vous ouvrir les portes de l’école que vous visez. Il faut donc arriver préparé, avec les bons réflexes et une méthode solide.
                  </p>
                  <div className="mt-4 bg-slate-900 text-white p-6 rounded-2xl shadow-md">
                    <p className="font-medium text-lg leading-relaxed">
                      Notre stage intensif en ligne vous donne toutes les clés pour structurer votre discours, gagner en aisance et convaincre le jury, quel que soit votre profil.
                    </p>
                  </div>
                </div>

                {/* BREAK VISUEL 1 : Bannière pleine largeur pour illustrer l'oral */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative h-48 rounded-3xl overflow-hidden shadow-md my-8"
                >
                  <img src="/img2.jpeg" alt="Préparation de l'entretien d'admission" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent flex items-center px-8 sm:px-12">
                     <p className="text-white font-black tracking-tight text-xl sm:text-2xl max-w-md leading-snug">
                        20 minutes pour convaincre. Arrivez face au jury avec des arguments irréprochables.
                     </p>
                  </div>
                </motion.div>

                <div className="space-y-10 text-slate-700 leading-relaxed">
                  
                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><UserCheck size={24} className="text-slate-400" /> Montrez au jury que vous avez votre place en école d’architecture</h3>
                    <p className="mb-4">Pour vous imposer lors de l’entretien, vous devez mobiliser de nombreuses ressources :</p>
                    <ul className="space-y-3 text-sm bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre culture architecturale</span></li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre capacité à citer et à interpréter le travail d’autres architectes sans tomber dans les références les plus convenues</span></li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre connaissance du métier</span></li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre passion créative et votre regard sur l’avenir de la société</span></li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre aptitude à analyser un espace architectural à partir d’une simple photo</span></li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre aisance à l’oral et votre capacité à exprimer clairement votre pensée</span></li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>votre habileté à répondre aux questions professionnelles, même quand elles dépassent vos connaissances actuelles</span></li>
                      <li className="flex items-start gap-2 font-bold text-slate-900"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>et surtout, votre faculté à sortir du lot en racontant votre propre histoire.</span></li>
                    </ul>
                  </div>

                  {/* BREAK VISUEL 2 : Grille de 2 images (Communication et Coaching) */}
                  <div className="grid sm:grid-cols-2 gap-6 my-10">
                    <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-slate-100">
                      <img src="/img3.jpeg" alt="Coaching de communication" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-slate-100">
                      <img src="/img4.jpeg" alt="Simulations orales" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Users size={24} className="text-slate-400" /> Une formation conçue par des architectes et des experts en communication</h3>
                    <p>Notre programme mêle culture architecturale et techniques d’expression orale pour une préparation à 360° de l’entretien. Il se déroule sur deux jours, totalisant 13 heures de formation en ligne : 4 heures de vidéos et supports PDF, et 9 heures de cours en direct avec un coach architecte spécialisé.</p>
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* DÉROULEMENT (ACCORDÉON) */}
              <div id="programme" className="scroll-mt-24 space-y-8">
                <div className="mt-8">
                  <AccordionItem 
                    title="Jour 1 – Développer une culture architecturale solide"
                    content={`• Matin : posture de l’architecte, culture architecturale, cultiver sa passion, habitudes quotidiennes, maîtriser son sujet, gérer le stress.\n\n• Après-midi : analyse de project, commentaire d’image, repères historiques et théoriques, actualité du secteur pour montrer que vous suivez les tendances.`}
                  />
                  <AccordionItem 
                    title="Jour 2 – Gagner en aisance et en impact à l’oral"
                    content={`• Matin : répondre aux questions du jury avec impact, construire un storytelling personnel qui met en valeur votre parcours et votre singularité, techniques de communication et de gestion du stress.\n\n• Après-midi : oraux blancs – vous enchaînez 20 passages en conditions réelles, suivis d’un débriefing personnalisé pour corriger les points faibles et capitaliser sur vos points forts.`}
                  />
                </div>
              </div>

              {/* BREAK VISUEL 3 : Carte image avec légende superposée */}
              <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-200 my-10">
                 <img src="/img5.jpg" alt="Étudiant en simulation" className="w-full h-72 object-cover" />
                 <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md p-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                       <p className="font-bold text-slate-900 text-sm">Gérez le stress et imposez votre posture</p>
                       <p className="text-xs text-slate-600">Des entraînements répétés pour désamorcer les questions pièges.</p>
                    </div>
                    <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg w-fit">Simulations intensives</span>
                 </div>
              </div>

              <div className="space-y-10 text-slate-700 leading-relaxed">
                <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Globe size={24} className="text-slate-400" /> Pour toutes les écoles d’architecture, en France comme à l’étranger</h3>
                  <p>Nous vous préparons aux entretiens d’admission pour intégrer les Écoles Nationales Supérieures d’Architecture (ENSA), les écoles privées comme l’ESA Paris, l’INSA Strasbourg, ainsi que de très nombreuses écoles étrangères de qualité (Angleterre, Suisse, Allemagne, Canada, Japon…). Ces dernières, souvent en tête des classements mondiaux, offrent des opportunités professionnelles exceptionnelles grâce à la qualité de leur formation et à leur réseau d’anciens. Le contenu de notre formation est universel et s’applique à tous les entretiens d’admission en architecture à travers le monde. Une précision : le stage étant dispensé en français, une maîtrise de cette langue est nécessaire pour suivre l’intégralité des cours.</p>
                </div>

                {/* BREAK VISUEL 4 : Bannière minimaliste avec médaillon */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col sm:flex-row gap-6 items-center my-8">
                   <img src="/img6.JPG" alt="Analyse d'œuvres architecturales" className="w-full sm:w-1/3 h-40 object-cover rounded-2xl shadow-sm" />
                   <div className="space-y-2">
                      <p className="text-slate-900 font-bold text-lg">Maîtrisez le commentaire d'image</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                         Apprenez à décrypter instantanément la lumière, l'échelle et les intentions d'un bâtiment à partir d'une simple photographie.
                      </p>
                   </div>
                </div>

                <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><ImageIcon size={24} className="text-slate-400" /> Une méthode infaillible pour commenter n’importe quelle image</h3>
                  <p>Dans la plupart des entretiens, le jury vous demandera de commenter une œuvre – illustration, photographie, parfois deux à comparer – après seulement cinq minutes de préparation. Il faut donc être rapide et structuré. Nous vous transmettons une méthodologie complète pour analyser toute image, identifier ce qui doit être observé et dit, et organiser votre commentaire de manière fluide et cohérente.</p>
                </div>

                {/* BREAK VISUEL 5 : Double image encadrant l'expression orale */}
                <div className="grid sm:grid-cols-2 gap-6 my-8">
                   <img src="/img7.jpg" alt="Prise de parole et éloquence" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                   <img src="/img8.jpg" alt="Débriefing avec les coachs" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
                </div>

                <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Mic size={24} className="text-slate-400" /> Apprenez à bien parler de vous</h3>
                  <p>Parler de soi est un exercice redoutable. Le jury évalue avant tout votre motivation : votre parcours et votre histoire doivent transmettre votre enthousiasme pour les études d’architecture. Nos coachs vous apprennent à créer un storytelling personnel percutant, à sélectionner les bons éléments à délivrer le jour J et à valoriser votre goût pour l’architecture.</p>
                </div>

                {/* BREAK VISUEL 6 : Dernière image pour illustrer la réussite finale */}
                <div className="rounded-3xl overflow-hidden shadow-sm my-8 border border-slate-100">
                   <img src="/img9.JPG" alt="Candidat confiant après son oral" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* POUR QUI ? */}
              <div id="pour-qui" className="scroll-mt-24 space-y-6">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Lightbulb size={20} /></span>
                  Ce programme est-il pour vous ?
                </h2>
                
                <div className="bg-[color:var(--color-accent,orange)]/10 p-8 rounded-3xl border border-[color:var(--color-accent,orange)]/20 mt-6 shadow-sm">
                  <p className="text-slate-900 font-bold mb-4 text-lg">Si vous voulez :</p>
                  <ul className="space-y-3 text-slate-800 font-medium">
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>mieux cibler les attentes des écoles en matière d’entretien</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>gagner en aisance et en fluidité à l’oral</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>acquérir des méthodes pour répondre aux questions les plus difficiles</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>prendre confiance en vous et en vos connaissances</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>vous entraîner aux questions courantes et améliorer votre expression</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>enrichir votre culture architecturale et votre sens de l’observation</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>apprendre à commenter une œuvre et à structurer votre discours</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>utiliser le vocabulaire précis de l’architecture</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>bénéficier de l’avis de professionnels pour votre orientation</span></li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-[color:var(--color-accent,orange)]/20">
                    <p className="text-slate-900 font-bold leading-relaxed">
                      … alors ce stage est fait pour vous. En deux jours, vous obtiendrez toutes les réponses et une méthodologie complète pour faire face à toutes les éventualités le jour de l’oral.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* ADMISSIONS & PRÉREQUIS */}
              <div id="admissions" className="scroll-mt-24 space-y-10">
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">Admissions</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Ces stages sont ouverts à tous. N’attendez pas la publication des convocations aux entretiens pour vous inscrire : à ce moment-là, nos stages affichent déjà complet. Si, avant le début du stage, vous n’êtes convoqué à aucun entretien en école d’architecture et que vous décidez de ne pas participer, nous vous remboursons l’intégralité des frais d’inscription versés, sur simple demande transmise 48 h avant le début du stage via notre formulaire de contact.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4 flex items-center gap-2">
                    <Monitor size={24} className="text-[color:var(--color-accent,orange)]" /> Prérequis techniques
                  </h2>
                  <ul className="space-y-3 text-slate-700 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <li className="flex items-start gap-3"><Check size={20} className="text-slate-400 shrink-0" /> <span>Votre lettre de motivation rédigée</span></li>
                    <li className="flex items-start gap-3"><Check size={20} className="text-slate-400 shrink-0" /> <span>Un ordinateur avec webcam et micro fonctionnels, pour être vu ET entendu durant les cours et les simulations d’entretiens</span></li>
                    <li className="flex items-start gap-3"><Check size={20} className="text-slate-400 shrink-0" /> <span>De quoi prendre des notes</span></li>
                  </ul>
                </div>
              </div>

            </div>

            {/* COLONNE DROITE (Infos pratiques + CTA) */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              
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
                        Formation 100 % en ligne.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-2">Choisissez parmi les trois sessions suivantes :</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>Samedi 25 et dimanche 26 avril 2026</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>Samedi 2 et dimanche 3 mai 2026</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>Samedi 9 et dimanche 10 mai 2026</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <p className="text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-3 rounded-lg">
                        Horaires : le samedi de 9h30 à 12h30 puis de 13h30 à 16h30 ; le dimanche de 9h30 à 12h30 puis de 13h30 à 17h30.
                      </p>
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
                  
                  <div className="mt-1 text-5xl font-black text-white tracking-tight">390 €</div>
                  <p className="text-white/70 text-sm mt-2">le stage complet. Places limitées.</p>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-3">Inscription</h3>
                    <p className="text-sm text-white/90 mb-4 font-medium">
                      Inscrivez-vous dès maintenant pour garantir votre place.
                    </p>
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