import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Calendar, ArrowLeft, ArrowRight, Quote, 
  BookOpen, Globe, Lightbulb, PenTool, Image, MessageSquare, 
  ChevronDown, List, GraduationCap, Building, Laptop, ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO.jsx';

// Composant pour l'accordéon interactif du programme
const AccordionItem = ({ title, intro, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasContent = !!content;

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-3 bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => hasContent && setIsOpen(!isOpen)}
        className={`w-full text-left px-6 py-4 flex items-center justify-between ${hasContent ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div>
          <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
          {intro && <p className="text-slate-600 mt-1 text-sm">{intro}</p>}
        </div>
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

export default function PrepaDistancePage() {
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
        title="Prépa à distance ENSA | Devenir Architecte"
        description="Constituez une candidature aux ENSA de qualité, depuis chez vous."
        path="/services/prepa-distance"
      />

      {/* HERO SECTION avec la photo Cité U demandée */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-0">
          <img 
            src="https://media.timeout.com/images/106009567/1024/576/image.webp" 
            alt="Architecture Cité Universitaire" 
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
            Prépa à distance 
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="mt-6 text-2xl text-[color:var(--color-accent,orange)] font-bold tracking-wide"
          >
            constituez une candidature aux ENSA de qualité, depuis chez vous
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
                        Objectifs & Programme
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#programme" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Programme détaillé
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

              {/* NOUVEAU BLOC : L'inspiration architecturale même à distance */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">La culture architecturale, jusqu'à chez vous</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     Même à distance, nous avons à cœur de vous transmettre l'essence de l'architecture. Nos cours d'histoire et nos analyses prennent appui sur des exemples forts, comme l'incroyable diversité des pavillons de la <strong>Cité Internationale Universitaire de Paris</strong>.
                   </p>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     L'objectif est d'éduquer votre regard pour que vous puissiez analyser et dessiner l'architecture de votre propre région avec le même niveau d'exigence.
                   </p>
                </div>
                <div className="w-full md:w-1/2 relative h-64 rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src="https://media.timeout.com/images/106009567/1024/576/image.webp" 
                    alt="Fondation Deutsch de la Meurthe, Cité Universitaire" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-2 py-1 bg-black/40 backdrop-blur-md rounded-md">
                     S'inspirer des plus grands lieux d'architecture
                  </span>
                </div>
              </div>

              {/* OBJECTIFS & PROGRAMME */}
              <div id="objectifs" className="scroll-mt-10 space-y-10">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><GraduationCap size={20} /></span>
                    Objectifs & Programme
                  </h2>
                  
                  <div className="mt-8 relative pl-6 border-l-4 border-[color:var(--color-accent,orange)] bg-orange-50/50 p-6 rounded-r-2xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Objectifs</h3>
                    <p className="text-slate-700 mb-3 font-medium">
                      Construisez progressivement un dossier de candidature solide pour intégrer :
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> 
                        <span>Une École nationale supérieure d’architecture (ENSA) ou l’ESA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> 
                        <span>Une école d’architecture d’intérieur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> 
                        <span>Une École nationale supérieure d’architecture et de paysage</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-10 text-slate-700 leading-relaxed">
                  
                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Building size={24} className="text-slate-400" /> Intégrer l’une des meilleures écoles d’architecture du monde</h3>
                    <p className="mb-4">Nous vous préparons aux principales écoles d’architecture françaises, qu’elles soient généralistes ou tournées vers l’architecture d’intérieur, le design, la scénographie ou le paysage.</p>
                    <ul className="space-y-2 text-sm bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <li><strong>Écoles généralistes :</strong> les ENSA, l’ESA Paris et l’INSA Strasbourg.</li>
                      <li><strong>Filières architecture d’intérieur et design :</strong> les Écoles supérieures d’art et de design (ESAD), ainsi que Boulle, Olivier de Serres, Duperré et Estienne pour le DNMADE mentions espace, matériaux, patrimoine.</li>
                      <li><strong>Écoles d’architecture du paysage :</strong> les ENSA et de paysage de Bordeaux, Lille, Versailles-Marseille et Centre-Val de Loire.</li>
                    </ul>
                  </div>

                  <div id="ecoles-etranger" className="scroll-mt-24 relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Globe size={24} className="text-slate-400" /> Ouvrir les portes des meilleures écoles d’architecture à l’étranger
                    </h3>
                    <p>De très nombreuses écoles étrangères de haut niveau accueillent volontiers les étudiants français. Elles se situent notamment au Royaume-Uni, en Suisse, en Allemagne, au Canada, au Japon, en Russie et occupent les premières places des classements internationaux. Leur force réside dans la qualité de leur enseignement et la puissance de leur réseau d’anciens élèves, qui offrent des perspectives professionnelles remarquables. Nous vous communiquons toutes les informations utiles pour postuler – réputation, spécialités, débouchés, points forts et faiblesses de chaque établissement – y compris celles qui restent difficiles à trouver par soi-même. Le manque d’information est en effet le principal obstacle pour les candidats français.</p>
                  </div>

                  <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-5 flex items-center gap-2"><BookOpen size={24} className="text-[color:var(--color-accent,orange)]" /> Les épreuves préparées</h3>
                    <ul className="grid sm:grid-cols-1 gap-4 text-white/90">
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> L’entretien d’admission</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Le dossier artistique de travaux personnels (book), orienté selon l’école visée (par exemple en valorisant les compétences en design et en architecture d’intérieur si nécessaire)</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Le dossier de candidature (CV et lettres de motivation)</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Lightbulb size={24} className="text-slate-400" /> Définir une stratégie de candidature qui fasse la différence</h3>
                    <p className="mb-3">Imaginons que vous ayez choisi votre école : vous voulez devenir architecte du bâtiment, très intéressé par les enjeux environnementaux, et vous avez jeté votre dévolu sur l’ENSA Marne-la-Vallée, en pointe sur ces questions. Comment valoriser votre profil ? Quelles expériences, compétences et stages mettre en avant ? Comment démontrer l’adéquation entre votre parcours, vos objectifs et le projet pédagogique de l’école ?</p>
                    <p>Que l’école visée soit en France ou à l’étranger, nous construisons avec vous une stratégie personnalisée de préparation et de candidature, en tirant parti de l’expérience de nos professeurs et de notre directeur.</p>
                  </div>

                  <div id="orientation-pro" className="scroll-mt-24 relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Vous donner les clés pour choisir la bonne voie professionnelle</h3>
                    <p className="mb-4">L’année de prépa vous apporte une connaissance solide du métier d’architecte et de ses spécialités. Nos professeurs, pour la plupart architectes en exercice, vous font bénéficier de leurs conseils professionnels au quotidien. À la fin de l’année, vous aurez une vision nette des différents métiers de l’architecture : architecte du bâtiment, du patrimoine, paysagiste, ingénieur-architecte, naval, d’intérieur, designer, scénographe, urbaniste.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div>
                        <p className="font-bold text-slate-900 mb-2">Maîtriser ces distinctions vous offre plusieurs avantages :</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Affermir votre orientation et renforcer votre motivation.</li>
                          <li>Sélectionner l’école la mieux adaptée à votre projet professionnel.</li>
                          <li>Présenter une candidature mature et réfléchie, toujours appréciée des jurys.</li>
                          <li>Peut-être découvrir une vocation à laquelle vous n’aviez pas pensé.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-2">Ces métiers vous sont présentés à travers :</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Des cours spécifiques (architecture d’intérieur, design, scénographie, paysage…)</li>
                          <li>Des webinaires et vidéos thématiques</li>
                          <li>Des visites et expositions dans des lieux architecturaux emblématiques (Cité de l’architecture et du patrimoine, Pavillon de l’Arsenal…)</li>
                          <li>La diversité de l’équipe enseignante, qui couvre toutes ces spécialités et répond à vos questions en continu.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Anticiper des choix d’études gagnants pour votre carrière</h3>
                    <p className="mb-3">Le choix de l’école a un impact concret sur la carrière. Même si le diplôme d’architecte s’obtient dans toutes les ENSA, chaque école possède une spécialité (l’ENSA Malaquais est sensible aux questions artistiques, l’ENSA Versailles à la conservation du patrimoine, par exemple). Il est donc stratégique de l’aligner avec vos objectifs professionnels.</p>
                    <p className="mb-3">Souhaitez-vous exercer à l’international ou seulement en France ? Les écoles françaises peuvent y conduire, mais certaines écoles étrangères de renommée mondiale constituent des tremplins exceptionnels pour une carrière internationale.</p>
                    <p>Enfin, certains choix réalisés une fois en école – stages, options, échanges internationaux – marqueront votre parcours. Nous ébauchons avec vous une stratégie professionnelle cohérente avant même votre entrée en école d’architecture.</p>
                  </div>

                  <div id="bases-techniques" className="scroll-mt-24 relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><PenTool size={24} className="text-slate-400" /> Acquérir les bases techniques indispensables</h3>
                    <p className="mb-3">S’il est possible d’intégrer une école d’architecture sans bagage technique et d’y réussir, de solides fondations techniques restent un atout majeur pour exceller. En première année à l’ENSA Belleville, un niveau insuffisant en dessin pénalise de nombreux étudiants, notamment en projet architectural. Nous vous enseignons des méthodes de dessin et d’informatique qui vous rendent autonome pour élever votre niveau.</p>
                    <p className="mb-3">La maîtrise du dessin d’architecture se raréfie et devient très recherchée. Beaucoup de diplômés sortent d’école sans savoir dessiner à main levée, alors que cette capacité de projection sur papier ou tablette reste essentielle. Nous vous transmettons une méthode pour vous préparer efficacement, par vous-même, aux exigences des études d’architecture en dessin.</p>
                    <p>Les logiciels d’architecture sont aujourd’hui centraux dans la pratique du métier et discriminants à l’embauche. De jeunes diplômés pâtissent d’un niveau insuffisant sur certains outils. Pour faire de l’informatique un atout, nous vous donnons les clés pour vous former efficacement une fois en école ou en cabinet.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Image size={24} className="text-slate-400" /> Produire un book de qualité</h3>
                    <p className="mb-3">Nous vous enseignons une méthode pour réaliser, en autonomie, un book (portfolio) de travaux personnels de haut niveau. Un bon book est important car :</p>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                      <li>Il compte parmi les critères d’admission de certaines ENSA et de la quasi-totalité des écoles d’architecture d’intérieur et de design.</li>
                      <li>Il permet à l’architecte de se différencier tout au long de sa carrière.</li>
                      <li>C’est un vecteur de développement créatif et de maîtrise de techniques variées (dessin, photographie, peinture…).</li>
                    </ul>
                    <p className="font-medium">Après avoir acquis la méthode, vous produirez un book qui valorisera votre candidature auprès des jurys, un book que vous aurez été capable de concevoir par vous-même.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Se démarquer par la culture architecturale</h3>
                    <p className="mb-3">Une culture architecturale solide est le meilleur atout pour concevoir des projets personnels, innovants et de qualité. Une série de cours enrichit votre culture rapidement : histoire de l’architecture, analyse de la pensée des grands architectes, observation des bâtiments marquants. Mais le plus important reste la méthode d’acquisition que nous vous inculquons, car se forger une culture riche est un travail de long terme, dépendant de bonnes habitudes prises tôt. Lectures d’ouvrages et de revues spécialisées, visites de musées et d’expositions… Nous vous donnons tous les conseils pour enrichir votre culture tout au long de votre vie d’architecte.</p>
                    <p>Ce bagage culturel, visible dès l’entretien d’admission, démontre aux jurys la maturité de votre projet académique et professionnel.</p>
                  </div>

                </div>
              </div>

              <hr className="border-slate-200" />

              {/* PROGRAMME INTERACTIF */}
              <div id="programme" className="scroll-mt-10 space-y-8">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><List size={20} /></span>
                    Programme
                  </h2>
                  <p className="mt-6 text-slate-700 leading-relaxed">
                    Voici à quoi ressemble votre année de prépa à distance :
                  </p>
                </div>

                {/* Accordéon interactif pour le calendrier */}
                <div className="mt-8">
                  <AccordionItem 
                    title="Octobre 2026"
                    content={`• Rentrée : méthodologie et coaching « Réussir ses études »\n• Présentation des études d’architecture et des métiers de l’architecture : parcours du professeur-architecte, description du métier, panorama des écoles, modalités et critères de sélection aux concours\n• Projet motivé et suivi personnalisé d’orientation`}
                  />
                  <div className="bg-slate-100 py-3 px-6 rounded-xl font-bold text-slate-500 text-sm text-center mb-3">
                    Vacances de la Toussaint 2026
                  </div>
                  <AccordionItem 
                    title="Novembre – Décembre 2026"
                    content={`• Histoire de l’architecture\n• Construction\n• Intervention métiers de l’architecture\n• Dessin, croquis d’architecture, portfolio\n• Culture architecturale, projet motivé, suivi d’orientation`}
                  />
                  <div className="bg-slate-100 py-3 px-6 rounded-xl font-bold text-slate-500 text-sm text-center mb-3">
                    Vacances de Noël 2026
                  </div>
                  <AccordionItem 
                    title="Janvier – Février 2027"
                    content={`• Culture architecturale, projet motivé, suivi d’orientation\n• Préparation aux entretiens d’admission ENSA\n• Histoire de l’architecture\n• Dessin, croquis d’architecture, portfolio\n• Constitution du dossier Parcoursup\n• Histoire de l’art et du design`}
                  />
                  <div className="bg-slate-100 py-3 px-6 rounded-xl font-bold text-slate-500 text-sm text-center mb-3">
                    Vacances d’hiver 2027
                  </div>
                  <AccordionItem 
                    title="Février – Mars 2027"
                    content={`• Culture architecturale, entretiens blancs, suivi d’orientation\n• Promenade urbaine et croquis d’architecture\n• Histoire de l’architecture\n• Dessin, croquis d’architecture, portfolio`}
                  />
                  <AccordionItem 
                    title="Avril – Mai 2027"
                    content={`• Culture architecturale, entretiens blancs, suivi d’orientation\n• Simulations d’entretiens d’admission aux ENSA (jury)\n• Simulations d’entretiens d’admission aux ENSA (deux professeurs)`}
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
                <p className="text-slate-700 text-lg">L’admission en prépa à distance est sélective et repose sur une évaluation de votre motivation pour les études d’architecture.</p>
                
                <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 mt-6 shadow-sm">
                  <p className="text-slate-900 font-bold mb-4 text-lg">Cette évaluation se fait à travers :</p>
                  <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5"><Check size={16} /></div>
                      <span className="leading-relaxed">Un dossier de candidature détaillant votre intérêt pour l’architecture.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5"><Check size={16} /></div>
                      <span className="leading-relaxed">Un entretien avec un professeur de l’école, en présentiel à Paris ou à distance selon votre préférence.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5"><Check size={16} /></div>
                      <span className="leading-relaxed">Vous pouvez également présenter vos travaux artistiques durant l’entretien pour nous donner un aperçu de votre univers personnel.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-blue-200/60">
                    <p className="text-slate-900 font-bold flex items-center gap-2">
                      Aucun prérequis de diplôme, d’âge ou de nationalité n’est exigé. L’admission est hors Parcoursup.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* COLONNE DROITE (Infos pratiques + CTA) */}
            <aside id="infos" className="space-y-6 lg:sticky lg:top-24 self-start">
              
              {/* Dates & Lieu */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
                <h3 className="text-2xl font-black text-slate-900 mb-6">
                  Dates
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Calendrier</p>
                      <div className="mt-2 bg-slate-50 border border-slate-200 p-3 rounded-lg text-sm font-bold text-slate-900">
                        Du mardi 6 octobre 2026 au 4 mai 2027.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                      <Laptop size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Format</p>
                      <p className="text-slate-900 font-medium leading-relaxed text-sm">
                        100% à distance. 1h de live et un cours vidéo par semaine (hors vacances scolaires)
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
                  
                  <div className="mt-1 text-5xl font-black text-white tracking-tight">1 480 €</div>

                  <div className="mt-10">
                    <p className="text-sm text-white/90 mb-4 font-medium">
                      Pour candidater, rendez-vous sur le lien :
                    </p>
                    <a
                      href="#" 
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[color:var(--color-accent,orange)] px-6 py-4 font-bold text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      candidater à la prépa à distance
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