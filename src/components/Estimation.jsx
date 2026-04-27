import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

// Liste mise à jour pour refléter exactement les 7 modules de la plateforme
const services = [
  'Prépa Annuelle Temps Plein',
  'Prépa à Distance',
  'Stage Prépa Boot Camp',
  'Stage Entretien ENSA',
  'Stage de Découverte',
  'Formation Logiciel 3D Rhino',
  'Autre / Je ne sais pas encore',
]

export default function Estimation() {
  const [form, setForm] = useState({
    nom: '', tel: '', email: '', service: services[0], ville: '', description: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Erreur')
      setStatus({ state: 'success', message: data.message || 'Demande envoyée !' })
      setForm({ nom: '', tel: '', email: '', service: services[0], ville: '', description: '' })
    } catch (err) {
      setStatus({ state: 'error', message: err.message || "Échec de l'envoi" })
    }
  }

  return (
    <section id="devis" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            DEMANDE DE DOSSIER / DEVIS
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
            Passez à <span className="text-[color:var(--color-blue)]">l'étape suivante</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Remplissez le formulaire ci-dessous. Notre équipe pédagogique étudiera votre profil et vous répondra sous 24h.
          </p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-slate-50 border border-slate-200 p-6 md:p-10 grid md:grid-cols-2 gap-5"
        >
          <Field label="Nom complet" name="nom" value={form.nom} onChange={update} required />
          <Field label="Téléphone" name="tel" type="tel" value={form.tel} onChange={update} required />
          <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
          <Field label="Ville" name="ville" value={form.ville} onChange={update} />

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Formation souhaitée</label>
            <select
              name="service" value={form.service} onChange={update}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 outline-none"
            >
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Votre projet ou vos questions</label>
            <textarea
              name="description" value={form.description} onChange={update} rows={5}
              placeholder="Parlez-nous brièvement de votre parcours, de vos objectifs, ou posez-nous vos questions…"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 outline-none"
            />
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-white font-semibold hover:bg-slate-800 transition disabled:opacity-60"
            >
              {status.state === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              Envoyer ma demande
            </button>

            {status.state === 'success' && (
              <p className="flex items-center gap-2 text-green-700 text-sm">
                <CheckCircle2 size={18} /> {status.message}
              </p>
            )}
            {status.state === 'error' && (
              <p className="flex items-center gap-2 text-red-700 text-sm">
                <AlertCircle size={18} /> {status.message}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 outline-none"
      />
    </div>
  )
}