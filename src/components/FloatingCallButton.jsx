import { Phone } from 'lucide-react'

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+33789786656"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition"
      aria-label="Nous appeler"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      <Phone size={18} />
      <span className="hidden sm:inline text-sm font-semibold">Nous appeler</span>
    </a>
  )
}
