import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Calendar, ArrowLeft, ArrowRight, Quote, 
  Globe, Lightbulb, Image as ImageIcon, MessageSquare, 
  ChevronDown, List, Target, Users, ChevronRight, PenTool, Eye, Landmark, Compass, UserCheck
} from 'lucide-react';
import SEO from '../components/SEO.jsx';

// Composant pour l'accordéon interactif (utilisable si besoin)
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

export default function StageDecouvertePage() {
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
        title="Stage de Découverte Architecture | Devenir Architecte"
        description="Une première approche globale de l’architecture pour affiner votre projet, découvrir les métiers et apprendre les bases."
        path="/services/stage-decouverte"
      />

      {/* HERO SECTION avec l'image CIUP et l'overlay */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-0">
          <img 
            src="https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-1-PARIS-ZIZGAG.jpg" 
            alt="Stage découverte architecture - Cité Universitaire" 
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
            Le stage de découverte :
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-6 text-2xl text-[color:var(--color-accent,orange)] font-bold tracking-wide"
          >
            pour affiner votre projet de devenir architecte
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
                        Objectifs
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#programme" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Programme
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#pour-qui" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Ce stage est fait pour vous si...
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
                <div className="w-full md:w-1/2">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">L'environnement idéal pour une première approche</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     Ce stage de découverte bénéficie d'un emplacement privilégié dans le 14e arrondissement, à proximité immédiate de la <strong>Cité Internationale Universitaire de Paris</strong>. 
                   </p>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Ses dizaines de pavillons aux styles architecturaux du monde entier (Fondation Suisse, Collège Néerlandais...) offrent un terrain d'observation exceptionnel pour éveiller votre regard, comprendre les volumes et réaliser vos premiers croquis.
                   </p>
                </div>
                <div className="w-full md:w-1/2 relative h-64 rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src="https://media.timeout.com/images/106009567/1024/576/image.webp" 
                    alt="S'éveiller à l'architecture - Cité U" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-2 py-1 bg-black/40 backdrop-blur-md rounded-md">
                     S'éveiller à l'architecture
                  </span>
                </div>
              </div>

              {/* OBJECTIFS */}
              <div id="objectifs" className="scroll-mt-24 space-y-8">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Target size={20} /></span>
                  Objectifs
                </h2>
                
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm">
                  <p className="text-slate-900 font-bold text-lg mb-6 leading-relaxed">
                    Nous vous donnons une première approche globale de l’architecture ! Notre stage remplit plusieurs objectifs :
                  </p>
                  <ul className="space-y-4 text-slate-800 font-medium">
                    <li className="flex items-start gap-3"><Check size={20} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous aider à savoir si les études d’architecture sont faites pour vous</span></li>
                    <li className="flex items-start gap-3"><Check size={20} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous donner une vision à 360° des métiers liés à l’architecture</span></li>
                    <li className="flex items-start gap-3"><Check size={20} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Faire naître ou grandir votre passion pour l’architecture</span></li>
                    <li className="flex items-start gap-3"><Check size={20} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Ouvrir votre regard et aiguiser votre sens de l’observation</span></li>
                    <li className="flex items-start gap-3"><Check size={20} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous apprendre les notions et outils de base de l’architecture</span></li>
                  </ul>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* PROGRAMME */}
              <div id="programme" className="scroll-mt-24 space-y-10">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><List size={20} /></span>
                  Programme
                </h2>

                <div className="space-y-10 text-slate-700 leading-relaxed">
                  
                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Users size={24} className="text-slate-400" /> Notre stage est conçu et délivré par des architectes passionnés par leur métier</h3>
                    <p className="mb-4">Au cours de ces cinq jours de stage, c’est une découverte complète de l’architecture qui vous attend ! Notre programme mêle savamment théorie et pratique pour vous permettre d’acquérir des connaissances concrètes du métier et de mieux appréhender les études d’architecture.</p>
                    <p className="mb-4">Nos enseignants sont tous architectes et diplômés des meilleures écoles d’architecture françaises et étrangères.</p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
                      <p className="font-bold text-slate-900 mb-3">Au programme :</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent,orange)]" /> Présentation des métiers liés à l’architecture</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent,orange)]" /> Sensibilisation à la ville pour ouvrir votre regard sur le paysage urbain</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent,orange)]" /> Initiation aux volumes et à la maquette</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent,orange)]" /> Histoire de l’architecture</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent,orange)]" /> Dessin et croquis d’observation</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent,orange)]" /> Visite architecturale (généralement à la Cité de l’Architecture)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Compass size={24} className="text-slate-400" /> Nous vous guidons dans vos choix d’orientation</h3>
                    <p className="mb-3">Au sein de l’architecture, il existe de nombreux métiers et de multiples spécialisations. Découvrez leurs spécificités, les avantages et inconvénients de chacun, et ce qui les différencie :</p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                      <li>urbaniste</li>
                      <li>paysagiste</li>
                      <li>designer</li>
                      <li>architecte d’intérieur</li>
                    </ul>
                    <p>Nous vous aidons à y voir plus clair ! Grâce à un petit test de personnalité, nous pourrons voir quel métier vous correspond le mieux pour vous guider dans vos futurs choix d’orientation.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><PenTool size={24} className="text-slate-400" /> Nous vous exerçons à la pratique du dessin et de la maquette</h3>
                    <p className="mb-3">Le dessin prend une place importante dans les études d’architecture. Un architecte doit être capable de dessiner sur papier ou tablette pour projeter un objet ou un espace. Il ne faut donc pas négliger la technique !</p>
                    <p className="mb-3">Nos professeurs vous accompagnent pour vous enseigner au cours d’une journée les bases du dessin ou vous permettre de vous perfectionner. Vous découvrirez les bases dont a besoin un architecte de renom pour exercer !</p>
                    <p>Nous vous proposons également une première approche de l’espace par la maquette. Expérimentez la matière, optimisez la surface et découvrez les propriétés des matériaux en élaborant votre propre maquette en trois dimensions !</p>
                    
                    {/* Légende de l'image intégrée au texte */}
                    <div className="mt-4 flex items-center gap-2 text-sm italic text-slate-500 bg-slate-50 py-2 px-4 rounded-lg w-fit">
                      <ImageIcon size={16} className="text-slate-400" />
                      Les maquettes fabriquées par les élèves
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Eye size={24} className="text-slate-400" /> Nous aiguisons votre sens de l’observation</h3>
                    <p className="mb-3">Notre stage vous permet d’ouvrir votre regard sur votre environnement pour développer votre sens de l’observation, des proportions et de l’espace.</p>
                    <p className="mb-3">Avec la fabrication de maquettes, familiarisez-vous avec les volumes et le respect de l’échelle.</p>
                    <p>Grâce au cours de croquis d’observation, apprenez à dessiner en respectant les proportions et à bien cadrer vos dessins. Le cours peut s’effectuer à l’extérieur si le temps le permet. À vos crayons !</p>

                    {/* Légende de l'image intégrée au texte */}
                    <div className="mt-4 flex items-center gap-2 text-sm italic text-slate-500 bg-slate-50 py-2 px-4 rounded-lg w-fit">
                      <ImageIcon size={16} className="text-slate-400" />
                      Élèves en pleine création
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Landmark size={24} className="text-slate-400" /> Nous développons votre culture architecturale</h3>
                    <p className="mb-3">Enfin, découvrez la Cité de l’Architecture le temps d’une après-midi ! Cette excursion pratique est l’occasion de compléter de visu les cours théoriques qui ont lieu pendant les cinq jours.</p>
                    <p>Entre le cours d’histoire qui couvre l’Antiquité à nos jours et le cours “Habiter” qui vous explique l’évolution du bâti selon les cultures et les croyances, vous ne serez pas en reste ! Nous vous donnons une conscience du contexte social et technologique duquel dépendent les bâtiments que nous construisons depuis des milliers d’années.</p>
                  </div>

                </div>
              </div>

              <hr className="border-slate-200" />

              {/* POUR QUI ? */}
              <div id="pour-qui" className="scroll-mt-24 space-y-6">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Lightbulb size={20} /></span>
                  Ce stage est fait pour vous si...
                </h2>
                
                <div className="bg-[color:var(--color-accent,orange)]/10 p-8 rounded-3xl border border-[color:var(--color-accent,orange)]/20 mt-6 shadow-sm">
                  <ul className="space-y-4 text-slate-800 font-medium">
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous vous intéressez à l’architecture mais ne savez pas si vous avez les qualités requises pour intégrer une école d’architecture et réussir les études pour faire carrière dans l’architecture</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous vous demandez si les études d’architecture peuvent vous plaire</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous ne savez pas vraiment en quoi consistent concrètement les études d’architecture et voulez vous plonger dans le quotidien d’un étudiant</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous voulez déterminer ou renforcer vos choix d’orientation parmi tous les métiers liés à l’architecture possibles</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous voulez apprendre à construire intégralement une maquette et choisir les matériaux adéquats</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous avez du mal à comprendre les différences qui existent entre les métiers et spécialisations liés à l’architecture</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous voulez rencontrer de vrais architectes diplômés qui pourront vous parler de manière concrète de leur quotidien</span></li>
                    <li className="flex items-start gap-3"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-0.5" /> <span>Vous voulez apprendre les bases du dessin</span></li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-[color:var(--color-accent,orange)]/20">
                    <p className="text-slate-900 font-bold leading-relaxed text-lg">
                      Vous repartirez de ces cinq jours de stage découverte avec une vision globale du métier d’architecte et de ce qui vous attend si vous décidez de poursuivre des études d’architecture.
                    </p>
                  </div>
                  
                  {/* Légende de l'image intégrée au texte */}
                  <div className="mt-6 flex items-center gap-2 text-sm italic text-[color:var(--color-accent,orange)] bg-white/60 py-2 px-4 rounded-lg w-fit font-semibold">
                    <ImageIcon size={16} />
                    Réalisation d'élèves
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* ADMISSIONS */}
              <div id="admissions" className="scroll-mt-24 space-y-6">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><UserCheck size={20} /></span>
                  Admissions
                </h2>
                
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-4 shadow-sm inline-block">
                  <p className="text-slate-900 font-bold text-lg">
                    Le stage de découverte est ouvert à tous.
                  </p>
                </div>
              </div>

            </div>

            {/* COLONNE DROITE (Infos pratiques + CTA) */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              
              {/* Lieu & Dates */}
              <div id="dates" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
                <h3 className="text-2xl font-black text-slate-900 mb-6">
                  Lieu & Dates
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Lieu</p>
                      <p className="text-slate-900 font-medium leading-relaxed">
                        Notre école se situe au cœur du Marais parisien, au 11 rue du Perche 75003 Paris.
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
                        Chacun des stages s’étale sur 5 journées.<br/>
                        Les horaires du stage sont : 9h30-12h30 puis 13h30-16h30
                      </p>
                    </div>
                  </div>
                  
                  {/* Calendrier complet */}
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-4">Les prochains stages découverte organisés par Architektôn :</p>
                    
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Noël – Vacances Zones A-B-C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage de Noël n°1 : du mardi 26 au samedi 30 décembre 2023 (à Paris)</li>
                          <li>• Stage de Noël n°2 : du mardi 2 au samedi 6 janvier 2024 (à Paris)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Hiver – Vacances Zone C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage d’hiver n°1 : du 12 au 16 février 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Hiver – Vacances Zones A & C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage d’hiver n°2 : du 19 au 23 février 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Hiver – Vacances Zones A & B</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage d’hiver n°3 : du 26 février au 1er mars 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Hiver – Vacances Zone B</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage d’hiver n°4 : du 4 au 8 mars 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Pâques – Vacances Zone C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage de Pâques n°1 : du 8 au 12 avril 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Pâques – Vacances Zones A & C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage de Pâques n°2 : du 15 au 19 avril 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Pâques – Vacances Zones A & B</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage de Pâques n°3 : du 22 au 26 avril 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Pâques – Vacances Zone B</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage de Pâques n°4 : du 29 avril au 3 mai 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Été – Vacances Zones A-B-C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage d’été n°1 : du 8 au 12 juillet 2024 (à Paris)</li>
                          <li>• Stage d’été n°2 : du 15 au 19 juillet 2024 (à Paris)</li>
                          <li>• Stage d’été n°3 : du 19 au 23 août 2024 (à Paris)</li>
                          <li>• Stage d’été n°4 : du 26 au 30 août 2024 (à Paris)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[color:var(--color-accent,orange)] uppercase tracking-wider mb-1">Toussaint – Vacances Zones A-B-C</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Stage de Toussaint n°1 : du 21 au 25 octobre 2024 (à Paris)</li>
                          <li>• Stage de Toussaint n°2 : du 28 octobre au 1er novembre 2024 (à Paris)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarif + CTA */}
              <div className="rounded-3xl bg-slate-900 text-white p-8 relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color:var(--color-accent,orange)]/30 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white/80 mb-2 uppercase tracking-wider text-sm">
                    Tarifs
                  </h3>
                  
                  <div className="mt-1 text-5xl font-black text-white tracking-tight">790 €</div>
                  <p className="text-white/70 text-sm mt-2">matériel inclus.</p>

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