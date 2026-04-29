import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Scale, ShieldCheck, Server, 
  Cookie, FileText, Mail, Link as LinkIcon 
} from 'lucide-react';
import SEO from '../components/SEO.jsx';

export default function MentionsLegalesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="scroll-smooth bg-slate-50 min-h-screen">
      <SEO
        title="Mentions Légales | Prépa MonArchi"
        description="Mentions légales, politique de confidentialité et gestion des cookies de la Prépa MonArchi."
        path="/mentions-legales"
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Mentions Légales
          </motion.h1>
          <p className="mt-4 text-white/70 text-lg">
            Informations juridiques, politique de confidentialité et conditions d'utilisation.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-12 text-slate-700 leading-relaxed">

            {/* ÉDITEUR */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <Scale className="text-[color:var(--color-accent,orange)]" /> 
                Éditeur du site
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold text-lg text-slate-900 mb-2">Prépa MonArchi</p>
                <ul className="space-y-2">
                  <li><strong>Société :</strong> SASU MonEducation</li>
                  <li><strong>SIRET :</strong> 954 025 482 00017</li>
                  <li><strong>Code APE :</strong> 8559B (Autres Enseignements)</li>
                  <li className="pt-2 mt-2 border-t border-slate-200">
                    <strong>Contact :</strong> <a href="mailto:contact@prepa-monarchi.fr" className="text-blue-600 hover:underline">contact@prepa-monarchi.fr</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText size={20} className="text-slate-400" /> 
                Code de la propriété intellectuelle
              </h2>
              <p className="mb-3">
                Toute représentation ou reproduction intégrale ou partielle faite sans le consentement des auteurs ou de leurs ayants droit ou ayants cause est illicite. Il en est de même pour la traduction, l’adaptation ou la transformation, l’arrangement ou la reproduction par un art ou un procédé quelconque.
              </p>
              <p className="font-medium text-slate-900">Protection des pages et tous éléments du site :</p>
              <p>Toute copie, même partielle, d’éléments de ce site est strictement interdite.</p>
              <p className="mt-4">
                L’Éditeur du site est le producteur de cette base de données au sens de l’article L 342-1 du Code de la Propriété Intellectuelle. Toute extraction ou utilisation du contenu de la base non expressément autorisée peut engager la responsabilité civile et/ou pénale de son auteur. L’éditeur du Site se réserve la possibilité de saisir toutes voies de droit à l’encontre des personnes qui n’auraient pas respecté cette interdiction.
              </p>
            </div>

            {/* LIENS ET ERRATUM */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <LinkIcon size={20} className="text-slate-400" /> 
                  Liens
                </h2>
                <p className="text-sm">
                  Le présent site Internet peut fournir des liens ou des références à d’autres sites. Prépa MonArchi n’est pas responsable de la teneur desdits autres sites. Elle ne sera tenue responsable d’aucun dommage ou préjudice en découlant. Les liens vers d’autres sites sont fournis uniquement dans un but de commodité.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Mail size={20} className="text-slate-400" /> 
                  Erratum
                </h2>
                <p className="text-sm">
                  Malgré les soins et les contrôles de l’équipe de rédaction, des erreurs ou omissions involontaires peuvent subsister sur le site, veuillez nous en excuser. Vous pouvez nous faire part de vos remarques à <a href="mailto:contact@prepa-monarchi.fr" className="text-blue-600 hover:underline">contact@prepa-monarchi.fr</a>.
                </p>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* CNIL & DONNÉES PERSONNELLES */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <ShieldCheck className="text-[color:var(--color-accent,orange)]" /> 
                CNIL & Données Personnelles
              </h2>
              <p className="mb-4">
                Conformément à la loi Informatique et Libertés et à l’article 27 de la loi n°78-17 du 6 janvier 1978, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant (art.34 de la loi « Informatique et Libertés »).
              </p>
              <p className="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 text-sm font-medium">
                Ce droit peut être exercé par courrier électronique à : <a href="mailto:contact@prepa-monarchi.fr" className="underline">contact@prepa-monarchi.fr</a>
              </p>
              
              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">Bloctel - Protection des données</h3>
              <p>
                Selon l’article L.223-2 du code de la consommation, il est rappelé que le consommateur peut user de son droit à s’inscrire sur la liste d’opposition au démarchage téléphonique Bloctel : <a href="https://www.bloctel.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">bloctel.gouv.fr</a>.
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* COOKIES */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <Cookie className="text-[color:var(--color-accent,orange)]" /> 
                Politique des Cookies
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">1. Qu’est-ce qu’un cookie ?</h3>
                  <p>Un « cookie » est un fichier texte qui enregistre des informations relatives à la navigation sur le site mais ne permet pas d’identifier l’utilisateur.</p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">2. Quelles sont les données collectées ?</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>L’adresse IP</li>
                    <li>La date et l’heure de connexion</li>
                    <li>L’URL de la page web consultée</li>
                    <li>Le type de système d’exploitation</li>
                    <li>Le type et la version du logiciel de navigation</li>
                    <li>La langue d’utilisation</li>
                    <li>L’identifiant et le contenu d’un fichier Cookie</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">3. À quoi servent ces cookies ?</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Établir des statistiques de fréquentation et d’utilisation des divers éléments grâce à Google Analytics.</li>
                    <li>Adapter la présentation du site (Responsive) à l’affichage de votre terminal.</li>
                    <li>Mémoriser des informations relatives à un formulaire que vous avez peut-être rempli.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">4. Cookies tierces parties</h3>
                  <p className="text-sm">
                    Nous sommes susceptibles d’inclure des applications émanant de réseaux sociaux qui permettent de partager des contenus (boutons « Partager », « J’aime »). Le réseau social fournissant le bouton est susceptible de vous identifier. Nous n’avons aucun contrôle sur la manière employée par les réseaux sociaux pour collecter des informations. Vous pouvez consulter les politiques de protection de la vie privée de ces réseaux.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-slate-900 mb-3">Refus et gestion des cookies</h3>
                  <p className="text-sm mb-4">
                    Si vous refusez l’enregistrement de cookies, vous ne pourrez pas bénéficier de certaines fonctionnalités nécessaires à la navigation. Nous déclinons toute responsabilité concernant les conséquences liées au fonctionnement dégradé de nos services.
                  </p>
                  <p className="text-sm font-medium mb-2">Pour configurer vos navigateurs :</p>
                  <ul className="text-sm space-y-1">
                    <li>- Chrome : <a href="https://support.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">support.google.com</a></li>
                    <li>- Firefox : <a href="https://support.mozilla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">support.mozilla.org</a></li>
                    <li>- Safari : <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">apple.com</a></li>
                    <li>- Edge : <a href="https://windows.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">windows.microsoft.com</a></li>
                  </ul>
                  <p className="text-sm mt-4">
                    Plus d'informations sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cnil.fr</a>.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* HÉBERGEMENT & SÉCURITÉ */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <Server className="text-[color:var(--color-accent,orange)]" /> 
                Hébergement & Web
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900">Hébergement</h3>
                  <p className="text-sm mt-1">
                    L’hébergement du site web est réalisé par Faïz CHERAIET sur un serveur OVH (2 rue Kellermann 59100 Roubaix – France). L'hébergeur s’engage à tout mettre en œuvre pour assurer la permanence, la continuité et la qualité du service. Toutefois, des périodes d’indisponibilité pour maintenance ou cas de force majeure peuvent intervenir.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Sécurité</h3>
                  <p className="text-sm mt-1">
                    La société s’engage à mettre en place les procédures de sécurité usuelles pour limiter les accès physiques et logiques à toute intrusion dans le serveur et à procéder à des sauvegardes régulières du site.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-900">Référencement</h3>
                  <p className="text-sm mt-1">
                    Dans le cadre du site web, il a été créé des champs de descriptions permettant son référencement auprès des annuaires de recherches.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* MÉDIATION */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Médiation</h2>
              <p className="text-sm">
                Conformément à l’article L. 211-3 du Code de la consommation, le consommateur est informé qu’il a le droit de recourir à un médiateur de la consommation en vue de la résolution amiable du litige qui pourrait l’opposer à l’éditeur du site. Les modalités de cette médiation sont organisées par les articles L 611-1 à L 641-1 et R 612-1 à R 612-2 du Code de la consommation.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}