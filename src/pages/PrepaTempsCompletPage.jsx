import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Calendar, ArrowLeft, ArrowRight, Quote, 
  BookOpen, Globe, Lightbulb, PenTool, Image, MessageSquare, 
  ChevronDown, List, GraduationCap, Building, Clock, ChevronRight
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

export default function PrepaTempsCompletPage() {
  const location = useLocation();

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
        title="La prépa à plein temps | Devenir Architecte"
        description="La voie la plus sûre pour réussir à devenir architecte. Intégrez une école, réussissez vos études et lancez votre carrière."
        path="/services/prepa-plein-temps"
      />

      {/* HERO SECTION avec l'image de la Cité Universitaire */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-0">
          <img 
            src="https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-5-PARIS-ZIZGAG.jpg" 
            alt="Cité Internationale Universitaire de Paris" 
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
            La prépa à plein temps :
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-2xl text-[color:var(--color-accent,orange)] font-bold tracking-wide"
          >
            la voie la plus sûre pour réussir à devenir architecte
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
                        Objectifs de la formation
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
                        Conditions d'admissions
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li className="border-t border-slate-200/60 pt-3">
                    <a href="#temoignages" className="group flex items-center justify-between py-2 text-slate-700 font-bold hover:text-[color:var(--color-accent,orange)] transition-colors">
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[color:var(--color-accent,orange)] transition-colors" />
                        Témoignages & Recommandations
                      </span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[color:var(--color-accent,orange)] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                </ul>
              </nav>

              {/* SECTION: CADRE D'ÉTUDE (Intégration de l'image de la Cité U) */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                   <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Un cadre d'étude exceptionnel au cœur du 14e arrondissement</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                     Notre école est située à proximité immédiate de la <strong>Cité Internationale Universitaire de Paris (CIUP)</strong>. Cet environnement unique offre à nos étudiants un musée d'architecture à ciel ouvert, idéal pour nourrir leur culture architecturale et s'exercer au croquis sur le vif.
                   </p>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Du Pavillon Suisse de Le Corbusier au Collège Néerlandais, la diversité des styles architecturaux de la CIUP constitue une source d'inspiration inépuisable tout au long de votre année préparatoire.
                   </p>
                </div>
                <div className="w-full md:w-1/2 relative h-64 rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src="https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-5-PARIS-ZIZGAG.jpg" 
                    alt="Fondation Deutsch de la Meurthe, Cité Universitaire" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 text-white text-xs font-medium px-2 py-1 bg-black/40 backdrop-blur-md rounded-md">
                     Cité Internationale Universitaire
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
                  <p className="mt-6 text-slate-700 text-lg leading-relaxed font-medium">
                    Notre formation à temps complet a été pensée pour vous donner les meilleures chances d’atteindre trois grands objectifs :
                  </p>
                  <div className="mt-6 grid sm:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex flex-col gap-3">
                      <Check className="text-[color:var(--color-accent,orange)]" size={24} />
                      <p className="font-bold text-slate-900 leading-tight">Intégrer une école qui vous conduira au diplôme d’État d’architecte</p>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex flex-col gap-3">
                      <Check className="text-[color:var(--color-accent,orange)]" size={24} />
                      <p className="font-bold text-slate-900 leading-tight">Réussir vos études d’architecture</p>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex flex-col gap-3">
                      <Check className="text-[color:var(--color-accent,orange)]" size={24} />
                      <p className="font-bold text-slate-900 leading-tight">Bien démarrer et mener votre carrière d’architecte</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10 text-slate-700 leading-relaxed">
                  
                  {/* Blocs de texte stylisés */}
                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Building size={24} className="text-slate-400" /> Intégrer l’école qui vous mènera au diplôme d’État d’architecte</h3>
                    <p className="mb-4">Nous vous préparons aux concours et admissions des principales écoles d’architecture en France, qu’elles soient généralistes ou spécialisées en architecture d’intérieur, design, scénographie ou paysage.</p>
                    <ul className="space-y-2 text-sm bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <li><strong>Écoles généralistes :</strong> les Écoles nationales supérieures d’architecture (ENSA), l’ESA Paris et Confluence.</li>
                      <li><strong>Filières architecture d’intérieur et design :</strong> les écoles Boulle, Olivier de Serres, Duperré, Estienne (pour le DNMADE mentions espace, matériaux, patrimoine) et l’école Camondo.</li>
                      <li><strong>Écoles d’architecture du paysage :</strong> les ENSA et de paysage de Bordeaux, Lille, Versailles-Marseille et Centre-Val de Loire.</li>
                    </ul>
                  </div>

                  <div id="ecoles-etranger" className="scroll-mt-24 relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Globe size={24} className="text-slate-400" /> Accéder aux meilleures écoles d’architecture à l’étranger
                    </h3>
                    <p>De très nombreuses écoles étrangères de haut niveau sont accessibles aux étudiants français. Elles se situent notamment au Royaume-Uni, en Suisse, en Allemagne, au Canada, au Japon, en Russie et figurent souvent en tête des classements internationaux. Ces établissements offrent des perspectives professionnelles remarquables grâce à la qualité de leur enseignement et à la puissance de leurs réseaux d’anciens. Nous vous communiquerons l’ensemble des informations nécessaires pour postuler : réputation, spécialités, débouchés, forces et faiblesses de chaque école. Le manque d’information constitue en effet le principal obstacle pour les candidats français ; nous le levons entièrement.</p>
                  </div>

                  <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-5 flex items-center gap-2"><BookOpen size={24} className="text-[color:var(--color-accent,orange)]" /> Les épreuves préparées</h3>
                    <ul className="grid sm:grid-cols-2 gap-4 text-white/90">
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> L’entretien de motivation</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Le dossier artistique personnel (book), dont le contenu sera orienté selon l’école visée</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Le dossier de candidature (CV et lettres de motivation)</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Les épreuves de design volume</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Les épreuves d’observation, de description et d’expression plastique liées à un site</li>
                      <li className="flex items-start gap-2"><Check size={18} className="text-[color:var(--color-accent,orange)] shrink-0 mt-1" /> Les épreuves d’anglais</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Lightbulb size={24} className="text-slate-400" /> Bâtir une stratégie de candidature qui fait la différence</h3>
                    <p>Prenons un exemple concret : vous souhaitez devenir architecte du bâtiment, avec un fort intérêt pour les questions environnementales. Vous avez identifié l’ENSA de Marne-la-Vallée, réputée sur ces sujets. Comment valoriser votre profil ? Quelles expériences, compétences et stages mettre en avant ? Comment montrer la cohérence entre votre parcours, vos ambitions et le projet pédagogique de l’école ? Pour chaque établissement, en France comme à l’étranger, nous élaborons avec vous une stratégie sur mesure de préparation et de candidature, en nous appuyant sur l’expertise de nos enseignants et de notre directeur.</p>
                  </div>

                  <div id="orientation-pro" className="scroll-mt-24 relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Vous informer pour bien choisir votre orientation professionnelle</h3>
                    <p className="mb-4">L’année de prépa vous donne une connaissance approfondie du métier d’architecte et de ses multiples spécialités. Nos professeurs et intervenants, eux-mêmes architectes en exercice, vous apportent au quotidien leurs conseils pour préparer au mieux votre avenir. À la fin de l’année, vous aurez une vision claire des différents métiers de l’architecture : architecte du bâtiment, du patrimoine, paysagiste, ingénieur-architecte, naval, d’intérieur, designer, scénographe, urbaniste.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div>
                        <p className="font-bold text-slate-900 mb-2">Cette connaissance fine vous apporte plusieurs bénéfices :</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Vous conforter dans votre choix d’études et d’orientation, renforçant ainsi votre motivation et votre réussite.</li>
                          <li>Sélectionner l’école la plus pertinente au regard de votre projet professionnel.</li>
                          <li>Présenter une candidature très réfléchie, ce que les jurys valorisent fortement.</li>
                          <li>Éventuellement découvrir une nouvelle vocation.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-2">Ces métiers vous sont présentés via :</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Des cours spécifiques (architecture d’intérieur, design, scénographie, paysage…)</li>
                          <li>Des conférences organisées à l’école ou à l’extérieur</li>
                          <li>Des visites et expositions dans des lieux emblématiques (Cité de l’architecture et du patrimoine, Pavillon de l’Arsenal…)</li>
                          <li>La diversité du corps enseignant, qui couvre toutes ces spécialités et vous renseigne au quotidien.</li>
                        </ul>
                      </div>
                    </div>
                    <p className="italic font-medium text-[color:var(--color-accent,orange)] mt-4 flex items-center gap-2"><Clock size={16} /> Un stage de découverte de 30 jours en cabinet complète ce dispositif.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Anticiper les choix d’études déterminants pour votre carrière</h3>
                    <p className="mb-3">Le choix de votre école est stratégique : même si le diplôme d’architecte s’obtient dans toutes les ENSA, chacune possède ses spécificités. L’ENSA Malaquais est ainsi sensible aux dimensions artistiques, tandis que l’ENSA Versailles est fortement tournée vers la conservation du patrimoine. Il est donc essentiel d’aligner votre projet professionnel avec l’identité de l’école. De même, envisagez-vous une carrière uniquement en France ou également à l’international ? Certaines écoles étrangères de premier plan constituent des tremplins exceptionnels pour une trajectoire internationale.</p>
                    <p>Enfin, une fois admis en école d’architecture, plusieurs choix structurants vous attendent : stages, options, échanges internationaux. Nous esquissons avec vous, dès la prépa, une stratégie professionnelle cohérente pour aborder ces décisions avec un temps d’avance.</p>
                  </div>

                  <div id="bases-techniques" className="scroll-mt-24 relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><PenTool size={24} className="text-slate-400" /> Acquérir les bases techniques pour réussir en architecture</h3>
                    <p className="mb-3">Si un étudiant sans bagage technique peut intégrer et réussir une école d’architecture, il est incontestable que de solides bases techniques procurent un avantage net pour exceller. En première année à l’ENSA Belleville par exemple, un niveau insuffisant en dessin peut poser de vraies difficultés, notamment en projet architectural. Notre prépa vous aide à maîtriser ces fondamentaux.</p>
                    <p className="mb-3">La maîtrise du dessin d’architecture devient une compétence rare et de plus en plus recherchée. Alors qu’un nombre croissant de diplômés ne savent pas dessiner à main levée, la capacité de projeter sur papier ou tablette reste un atout précieux. Le dessin en perspective (parallèle, points de fuite, oblique…) tient une place centrale dans nos cours, ouverts aux débutants comme aux profils plus avancés.</p>
                    <p>Par ailleurs, la maîtrise des logiciels d’architecture est aujourd’hui discriminante à l’embauche. Beaucoup de jeunes diplômés ont un niveau insuffisant sur certains outils, ce qui freine leur insertion. Pour faire du numérique un levier de carrière, nous vous formons très tôt aux logiciels professionnels tels que SketchUp et Autocad.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Image size={24} className="text-slate-400" /> Développer et démontrer sa créativité par la réalisation et l’amélioration du book</h3>
                    <p className="mb-3">La constitution d’un book (ou portfolio) est un projet central de l’année, pour plusieurs raisons :</p>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                      <li>Il sert de critère d’admission dans certaines ENSA et dans presque toutes les écoles d’architecture d’intérieur et de design.</li>
                      <li>Un book de qualité permet à un architecte de se distinguer tout au long de son parcours ; vous acquérez donc une méthode pour produire un recueil de travaux personnels de haut niveau.</li>
                      <li>Sa fabrication continue nourrit votre créativité et vous fait travailler des techniques variées (dessin, photographie, peinture…).</li>
                    </ul>
                    <p className="font-medium">À la fin de l’année, vous disposez d’un book abouti et, surtout, de l’autonomie pour le faire évoluer.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Apprendre une méthode pour réussir le projet, exercice fondamental en architecture</h3>
                    <p className="mb-3">Mener à bien un projet architectural – du dessin à la maquette en passant par la modélisation – est le point d’évaluation principal en école d’architecture. C’est ce qui conditionne le passage en année supérieure. En première année à l’ENSA Belleville, le projet est une matière redoutée, avec un taux d’échec d’environ 20 %.</p>
                    <p>À travers la réalisation d’au moins trois projets, chacun encadré par un architecte-enseignant différent, nous vous transmettons une méthode qui vous permettra de réussir cette épreuve tout au long de vos études et dans votre vie professionnelle.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Se distinguer grâce à sa culture architecturale</h3>
                    <p>Une culture architecturale riche est le meilleur atout pour concevoir des projets singuliers, innovants et de qualité. Notre programme prévoit des cours d’histoire de l’architecture, des analyses de la pensée des grands architectes et des promenades architecturales parisiennes. Mais l’essentiel réside dans la méthode d’acquisition de cette culture, que nous vous inculquons pour le long terme : lectures recommandées, revues spécialisées, visites de musées et d’expositions… De bonnes habitudes qui vous suivront toute votre vie professionnelle. Ce bagage culturel démontre également aux jurys la maturité de votre projet d’études et professionnel.</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-slate-200 hover:border-[color:var(--color-accent,orange)] transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2"><MessageSquare size={24} className="text-slate-400" /> Faire de l’anglais un atout pour votre carrière</h3>
                    <p className="mb-3">Alors que l’anglais est devenu indispensable pour la carrière d’architecte (offres d’emploi, contrats, formation continue…), il reste mal enseigné dans les écoles françaises par manque de moyens. Nous voulons en faire une force, en combinant :</p>
                    <ul className="list-disc pl-5 space-y-2 mb-3 bg-slate-50 p-4 rounded-xl">
                      <li>Une pratique orale via des ateliers (présentation de projet ou de book)</li>
                      <li>Une étude de l’usage de l’anglais dans le milieu architectural</li>
                      <li>L’acquisition du vocabulaire technique</li>
                      <li>Une ouverture sur les pratiques architecturales du monde anglo-saxon</li>
                    </ul>
                    <p>Ces cours vous préparent également à constituer dossiers de candidature solides et à réussir les entretiens pour les écoles étrangères. Enfin, nous vous donnons une méthodologie pour réussir les tests exigés par certaines écoles (comme le TOEIC pour le diplôme à l’ENSA Belleville).</p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-[color:var(--color-accent,orange)] bg-orange-50/50 p-6 rounded-r-2xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Gagner très tôt en expérience professionnelle grâce au stage d’observation</h3>
                    <p>Nous vous offrons la possibilité d’effectuer un mois de stage d’observation en cabinet d’architecte, pour découvrir la pratique réelle du métier. Notre école entretient des partenariats avec de nombreuses agences. Parmi celles ayant accueilli nos élèves en 2019-2020 : MGAU – Michel Guthmann et Associés, Agence Salin, PRVP architectes, Arnaud et Delrue Architectes, AAPHM, PCA Stream, YM Architectes, Obeid Georges Space Architectes, Altius Architectes, DFA Dietmar Feichtinger Architectes, Edelweiss Property. Vous pourrez choisir un cabinet en lien avec la spécialité qui vous intéresse : patrimoine, architecture d’intérieur, urbanisme, paysage…</p>
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
                  <div className="mt-6 text-slate-700 leading-relaxed space-y-4">
                    <p>Dès le début de l’année, un architecte référent vous est attribué ; il assure votre suivi individuel permanent et vous accompagne dans la recherche de votre stage d’observation en entreprise. L’évaluation se fait en contrôle continu et donne lieu à des relevés de notes. Ces résultats sont intégrés au processus Parcoursup pour la sélection aux entretiens de motivation.</p>
                    <p className="font-bold text-white bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-lg inline-block">
                      Le volume horaire hebdomadaire est de 22 à 26 heures de cours, de septembre à mai, en accompagnement des concours.
                    </p>
                  </div>
                </div>

                {/* Accordéon interactif pour les cours */}
                <div className="mt-8">
                  <AccordionItem 
                    title="Projet motivé, suivi personnalisé d’orientation et métiers de l’architecture"
                    content={`Le « projet motivé » désigne la lettre de motivation exigée dans Parcoursup. Comme le souligne Sylvie Moscatelli (ENSA Paris-Belleville) : « La lettre de projet de formation motivé est un exercice personnel qui nous permettra de mieux comprendre ses motivations et de nous révéler “un peu” sa personnalité. Elle doit être originale et surtout argumentée. Je tiens à vous préciser que ces renseignements ne seront pas pris en compte pour l’entretien mais pour la sélection à celui-ci. »\n\nUn suivi personnalisé vous aide à construire ce projet motivé et à clarifier votre orientation parmi les métiers de l’architecture.`}
                  />
                  <AccordionItem 
                    title="Histoire de l’architecture et histoire de l’art"
                    content="L’histoire de l’architecture est indispensable pour comprendre vers quoi se dirige l’architecture de
demain. L’évolution de l’architecture est le résultat d’un mélange de facteurs qui interagissent entre
eux au fil du temps.
-Elle est fortement influencée par les progrès technique et scientifique.
-L’architecture reflète également les besoins et modes de vie des sociétés.
-Y est aussi prégnante une dimension culturelle et artistique qui guide son style, ainsi que des
facteurs économiques.
-Et pour finir, les contraintes environnementales et climatiques y sont plus que jamais
déterminantes.
Il est donc important de pointer ces différents facteurs afin de comprendre son évolution.
-Les cours seront suivis :
-De demandes de croquis de bâtiments emblématiques d’une période ou d’un style architectural, à
réaliser sur place et à ramener pour le cours suivant.
-D’interrogations orales ou écrites.
Nous étudierons les périodes allant de l’antiquité à aujourd’hui."
                  />
                  <AccordionItem 
                    title="Culture architecturale"
                    intro="histoire du design, visites, expositions"
                    content="La culture architecturale, indissociable de l’histoire de l’architecture, est un mélange de savoir,
d’observation et de sensibilité qui permet de mieux lire et apprécier les espaces qui nous entourent.
-Elle inclut la compréhension des principes de conception (notions d’espace, de lumière, de
matériaux, de proportions ou encore la relation entre un bâtiment et son environnement).
-Elle fait référence à des architectes et des œuvres marquantes, afin de comprendre quel est leur
rapport à l’architecture.
-Elle aiguise le sens critique et le regard sur l’espace bâti : être capable d’analyser un lieu : est-il
fonctionnel ? Les matériaux employés semblent-ils bien choisis ? Le ressenti est-il en rapport avec la
symbolique du bâtiment etc…
-Elle inclut la dimension culturelle et sociale car l’architecture reflète les valeurs d’une société
(pouvoir, religion, écologie, technologie…).
-Et puis comprendre un bâtiment, c’est aussi comprendre son contexte.
Les cours comprendront :
-Des exposés à réaliser par les élèves.
-Des visites d’architectures emblématiques d’Ile de France et de quartiers parisiens."
                  />
                  <AccordionItem 
                    title="Projet architectural"
                    intro="mesures, plans, maquettes"
                    content="Les ateliers de projet s’articulent autour d’un sujet et d’un programme, en équipe et en travail individuel. Ils abordent les notions de maîtrise d’ouvrage et de maîtrise d’œuvre, le programme, le budget et les autorisations d’urbanisme. Un fil rouge traverse ces ateliers : transmettre, parler et débattre."
                  />
                  <AccordionItem 
                    title="Les études d’architecture et le métier d’architecte"
                    intro="connaissance du travail en équipe, organisation personnelle, expression en jury."
                    content=""
                  />
                  <AccordionItem 
                    title="Dessin, perspective, croquis d’architecture"
                    content=""
                  />
                  <AccordionItem 
                    title="Initiation à la résistance des matériaux"
                    intro="module conçu pour aborder sereinement une matière souvent redoutée par les étudiants."
                    content=""
                  />
                  <AccordionItem 
                    title="Informatique"
                    intro="acquérir les bases de la modélisation 3D"
                    content=""
                  />
                  <AccordionItem 
                    title="Anglais"
                    intro="cours en lien avec l’architecture et le design d’espace"
                    content=""
                  />
                  <AccordionItem 
                    title="Expression plastique et suivi individuel du book / portfolio"
                    content="Le cours d’expression plastique et appliquée vise à vous ouvrir aux différents champs des arts appliqués et plastiques. Il explore le dessin, le graphisme, la photographie, le design de matériaux, le design produit et la scénographie, comme autant de moyens d’étendre vos connaissances et d’enrichir votre travail en architecture et vos portfolios. La démarche s’inscrit dans une approche contemporaine de ces disciplines, pour vous rendre pleinement conscients du monde créatif dans lequel vous évoluez."
                  />
                  <AccordionItem 
                    title="Stage de découverte"
                    intro="un stage d’observation de quinze jours est intégré au parcours."
                    content=""
                  />
                  <AccordionItem 
                    title="Expression orale : préparation aux entretiens de motivation"
                    content="À l’issue de l’examen de votre dossier scolaire, complété par votre projet motivé, les écoles convoquent à l’entretien de motivation les candidats qui auront su convaincre. L’entretien dure de 10 à 25 minutes selon les établissements. Vous devrez y montrer les facettes de votre personnalité qui feront de vous un bon architecte, en vous appuyant sur une solide culture architecturale et en expliquant en quoi votre parcours de vie vous conduit vers ce métier exigeant. Certaines écoles imposent également un commentaire d’image pendant l’entretien (La Villette, Belleville, Versailles, Malaquais, Marseille, Nantes)."
                  />
                  <AccordionItem 
                    title="Analyse d’image"
                    content="Vous tirez au sort une image et devez expliquer ce qu’elle vous inspire.\n\nLa méthode enseignée est la suivante : avant toute chose, regarder et observer attentivement l’image, en restant ouvert à ce qu’elle évoque de manière immédiate et intuitive : « Qu’est-ce que vous voyez ? ». Ensuite, une analyse méthodique permet de multiplier les niveaux de lecture : 1/ Décrire, 2/ Mettre en contexte, 3/ Interpréter et critiquer."
                  />
                </div>

                {/* TEMOIGNAGES / CITATIONS ENSA */}
                <div id="temoignages" className="bg-slate-50 rounded-3xl p-8 relative border border-slate-200 mt-12 shadow-sm scroll-mt-10">
                  <Quote className="absolute top-6 right-6 text-slate-200" size={80} />
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-slate-900">Les ENSA recommandent la préparation en architecture</h3>
                  <p className="text-slate-700 relative z-10">Notre programme a été construit en suivant les conseils de responsables des études de différentes ENSA. Comme l’indique Bernard Coiffet, de l’ENSA Paris La Villette :</p>
                  
                  <blockquote className="mt-6 border-l-4 border-[color:var(--color-accent,orange)] pl-6 text-slate-700 italic relative z-10 space-y-4">
                    <p>« Nous conseillons souvent à nos postulants n’ayant pas été retenus lors d’une pré-sélection, malgré des vœux à plusieurs écoles d’architecture, d’envisager l’inscription dans une classe préparatoire à thème approchant l’architecture.</p>
                    <p>Quatre thèmes peuvent ainsi être abordés (je les cite dans l’ordre d’importance) :</p>
                    <ul className="list-none space-y-1">
                      <li>- classe préparatoire en Architecture</li>
                      <li>- classe préparatoire en Perception Plastique ou Arts Plastiques</li>
                      <li>- classe préparatoire en Photographie</li>
                      <li>- classe préparatoire en Histoire de l’Art</li>
                    </ul>
                    <p>Lors d’une prochaine demande de pré-inscription, vous pourrez évoquer ce parcours dans votre lettre de motivation et sur votre CV, afin que la Commission de sélection en prenne connaissance. Cela peut représenter un avantage concernant votre dossier, relatif notamment à votre motivation, et vous constaterez que là également, nous sommes très éloignés d’une sélection par un algorithme quelconque ou d’un tirage au sort… »</p>
                  </blockquote>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* ADMISSIONS */}
              <div id="admissions" className="scroll-mt-10 space-y-6">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[color:var(--color-accent,orange)] flex items-center justify-center text-white"><Check size={20} /></span>
                  Admissions
                </h2>
                <p className="text-slate-700 text-lg">L’entrée en prépa à temps complet est sélective. La sélection évalue avant tout votre motivation réelle pour des études d’architecture.</p>
                
                <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 mt-6 shadow-sm">
                  <p className="text-slate-900 font-bold mb-4 text-lg">Cette évaluation s’appuie sur :</p>
                  <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5"><Check size={16} /></div>
                      <span className="leading-relaxed">Un dossier de candidature exposant votre intérêt pour l’architecture.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5"><Check size={16} /></div>
                      <span className="leading-relaxed">Un entretien avec un enseignant de l’école, qui nous permet de mieux vous connaître et de vérifier l’adéquation du programme à votre profil. L’entretien peut se dérouler dans nos locaux à Paris ou à distance, selon votre préférence.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5"><Check size={16} /></div>
                      <span className="leading-relaxed">Vous avez également la possibilité de présenter vos travaux artistiques à cette occasion, ce qui nous aide à comprendre votre univers personnel.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-blue-200/60">
                    <p className="text-slate-900 font-bold flex items-center gap-2">
                      Aucune condition de diplôme, d’âge ou de nationalité n’est exigée. L’admission est hors Parcoursup.
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
                  Dates et lieu
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Adresse</p>
                      <p className="text-slate-900 font-medium leading-relaxed">
                        15 rue Henri Regnault,<br/>75014 Paris.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl text-[color:var(--color-accent,orange)]">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Calendrier</p>
                      <p className="text-slate-700 leading-relaxed text-sm">
                        Les cours ont lieu du lundi au vendredi (hors vacances scolaires), à Paris.
                      </p>
                      <div className="mt-3 bg-slate-50 border border-slate-200 p-3 rounded-lg text-sm font-bold text-slate-900">
                        Prépa annuelle du lundi 28 septembre 2026 aux concours (7 mai 2027).
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
                    Tarif
                  </h3>
                  
                  <div className="mt-1 text-5xl font-black text-white tracking-tight">6 980 €</div>

                  <div className="mt-10">
                    <p className="text-sm text-white/90 mb-4 font-medium">
                      Pour candidater, rendez-vous sur le lien :
                    </p>
                    <a
                      href="#" 
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[color:var(--color-accent,orange)] px-6 py-4 font-bold text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      candidater à la prépa à plein temps 
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