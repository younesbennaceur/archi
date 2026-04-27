import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail, UserPlus, Briefcase } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-4 gap-12">
        
        {/* COLONNE 1 : LOGO & SOCIAL */}
        <div>
          <Logo />
          <p className="mt-5 text-slate-600 text-sm leading-relaxed">
            La référence pour préparer et réussir les concours d'entrée aux Écoles Nationales Supérieures d'Architecture (ENSA).
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram].map((Icon, i) => (
              <a key={i} href="https://www.instagram.com/prepamonarchi/" className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* COLONNE 2 : NAVIGATION */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            Navigation
          </h4>
          <ul className="mt-5 space-y-3 text-slate-600">
            <li><Link to="/" className="hover:text-[color:var(--color-accent)]">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--color-accent)]">Nos Prépas</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--color-accent)]">La Méthode</Link></li>
            <li><Link to="/blog" className="hover:text-[color:var(--color-accent)]">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--color-accent)]">Contact</Link></li>
          </ul>
        </div>

        {/* COLONNE 3 : CARRIÈRES (Nouveau) */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]" />
            Carrières
          </h4>
          <ul className="mt-5 space-y-4 text-slate-600 text-sm">
            <li className="flex items-center gap-2 hover:text-[color:var(--color-accent)] cursor-pointer">
              <UserPlus size={16} /> <Link to="/enseigner">Enseigner avec MonArchi</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[color:var(--color-accent)] cursor-pointer">
              <Briefcase size={16} /> <Link to="/stages">Proposer un stage</Link>
            </li>
          </ul>
          
          <h4 className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase mt-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]" />
            Légal
          </h4>
          <ul className="mt-5 space-y-3 text-slate-600 text-xs">
            <li><a href="#" className="hover:text-[color:var(--color-accent)]">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-[color:var(--color-accent)]">Confidentialité</a></li>
            <li><a href="#" className="hover:text-[color:var(--color-accent)]">CGV</a></li>
          </ul>
        </div>

        {/* COLONNE 4 : CONTACT */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            Contactez-nous
          </h4>
          <ul className="mt-5 space-y-4 text-slate-600 text-sm">
            <li className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                <MapPin size={14} />
              </span>
              <div>
                <div className="font-bold text-slate-800">Prépa Architecture MonArchi</div>
                <div>15 Rue Henri Regnault<br />75014 Paris, France</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                <Phone size={14} />
              </span>
              <a href="tel:+33789786656">+33 (0)7 89 78 66 56</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                <Mail size={14} />
              </span>
              <a href="mailto:contact@prepa-monarchi.fr">contact@prepa-monarchi.fr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 Prépa MonArchi. Tous droits réservés.</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            SYSTÈME OPÉRATIONNEL
          </span>
        </div>
      </div>
    </footer>
  )
}