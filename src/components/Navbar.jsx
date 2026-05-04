import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Nos Prépas' },
  { to: '/about', label: 'La Méthode' },
  { to: '/blog', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 w-full transition ${scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-white/70 backdrop-blur-sm'}`}>
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        
        {/* --- MODIFICATION ICI --- */}
        <Link to="/" className="flex items-center gap-3">
         <img src="/logo.png" alt="Logo" className="h-14 w-16" />
          <span className="text-md font-bold text-slate-800">Prépa MonArchi</span>
         
        </Link>
        {/* ------------------------ */}

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium link-underline ${isActive ? 'text-[color:var(--color-accent)]' : 'text-slate-700 hover:text-[color:var(--color-ink)]'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="tel:+33123456789"
            className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-white text-sm font-semibold hover:bg-orange-600 transition"
          >
            07 89 78 66 56
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 text-slate-800"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-base py-2 ${isActive ? 'text-[color:var(--color-accent)]' : 'text-slate-800'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href="tel:+33789786656" className="mt-2 text-center rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-white font-semibold">
              +33 07 89 78 66 56
            </a>
          </div>
        </div>
      )}
    </header>
  )
}