export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2 L28 9 V23 L16 30 L4 23 V9 Z"
          stroke="#FF5A00"
          strokeWidth="2.2"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-extrabold tracking-tight text-[color:var(--color-ink)]">
        Prépa MonArchi
      </span>
    </div>
  )
}
