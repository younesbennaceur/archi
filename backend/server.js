require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const escape = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const adminTemplate = (d) => `
  <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:auto;background:#f8fafc;padding:24px;border-radius:16px;color:#0F172A">
    <h2 style="color:#FF5A00;margin:0 0 16px">Nouvelle demande de devis</h2>
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:12px;overflow:hidden">
      <tr><td style="padding:12px 16px;border-bottom:1px solid #eee"><b>Nom</b></td><td style="padding:12px 16px;border-bottom:1px solid #eee">${escape(d.nom)}</td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #eee"><b>Email</b></td><td style="padding:12px 16px;border-bottom:1px solid #eee">${escape(d.email)}</td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #eee"><b>Téléphone</b></td><td style="padding:12px 16px;border-bottom:1px solid #eee">${escape(d.tel)}</td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #eee"><b>Ville</b></td><td style="padding:12px 16px;border-bottom:1px solid #eee">${escape(d.ville)}</td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #eee"><b>Formule</b></td><td style="padding:12px 16px;border-bottom:1px solid #eee">${escape(d.service)}</td></tr>
      <tr><td style="padding:12px 16px" valign="top"><b>Projet</b></td><td style="padding:12px 16px">${escape(d.description).replace(/\n/g, '<br>')}</td></tr>
    </table>
  </div>`

const clientTemplate = (d) => `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;background:#0F172A;padding:32px;border-radius:16px;color:white">
    <h1 style="margin:0 0 8px;color:#FF5A00">Merci ${escape(d.nom)} !</h1>
    <p style="margin:0 0 16px;color:#cbd5e1">Nous avons bien reçu votre demande concernant <b style="color:white">${escape(d.service)}</b>.</p>
    <p style="color:#cbd5e1">Notre équipe pédagogique vous recontacte sous 24h pour échanger sur votre projet et construire un accompagnement sur-mesure.</p>
    <div style="margin-top:24px;padding:16px;background:rgba(255,90,0,.15);border-radius:12px;border:1px solid #FF5A00">
      <p style="margin:0"><b>À très vite,</b><br/>L'équipe Prépa MonArchi</p>
    </div>
  </div>`

app.post('/api/devis', async (req, res) => {
  const { nom, tel, email, service, ville, description } = req.body || {}
  if (!nom || !email || !tel) {
    return res.status(400).json({ message: 'Champs obligatoires manquants' })
  }
  try {
    await transporter.sendMail({
      from: `"Prépa MonArchi" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DEST,
      replyTo: email,
      subject: `Nouveau devis — ${nom} (${service})`,
      html: adminTemplate({ nom, tel, email, service, ville, description }),
    })

    await transporter.sendMail({
      from: `"Prépa MonArchi" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Votre demande a bien été reçue — Prépa MonArchi',
      html: clientTemplate({ nom, service }),
    })

    res.status(200).json({ message: 'Votre demande a été envoyée, nous vous répondons sous 24h.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Erreur lors de l'envoi", error: error.message })
  }
})

app.get('/api/health', (_, res) => res.json({ ok: true }))

app.listen(PORT, () => console.log(`Backend ArchiPrep en écoute sur le port ${PORT}`))
