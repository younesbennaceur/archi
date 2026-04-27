# Prépa MonArchi — Site vitrine

SPA React 19 + Vite 6 + Tailwind v4, backend Express 5 pour le formulaire de devis (Nodemailer / Gmail).

## Démarrage

```bash
# Frontend
npm install
npm run dev            # http://localhost:5173

# Backend (nouveau terminal)
cd backend
cp .env.example .env   # renseigner EMAIL_USER / EMAIL_PASS / EMAIL_DEST
npm install
npm run dev            # http://localhost:5000
```

Le proxy Vite route `/api` → `http://localhost:5000`.

## Structure

- [src/components/](src/components/) — Navbar, Hero, WhyUs, Pedagogy, Services, Team, Avis, Cta, Estimation, Footer, ScrollToTop, FloatingCallButton
- [src/pages/](src/pages/) — Home, ServicesPage, AboutPage, ContactPage
- [backend/server.js](backend/server.js) — `POST /api/devis`
