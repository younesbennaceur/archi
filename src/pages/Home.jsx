import SEO from '../components/SEO.jsx'
import Hero from '../components/Hero.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Pedagogy from '../components/Pedagogy.jsx'
import Services from '../components/Services.jsx'
import Team from '../components/Team.jsx'
import Avis from '../components/Avis.jsx'
import Cta from '../components/Cta.jsx'
import CertificationQualiopi from '../components/CertificationQualiopi.jsx';

export default function Home() {
  return (
    <>
      <SEO
        title="Prépa MonArchi — Réussir son concours d'entrée en ENSA"
        description="La référence pour préparer les concours d'entrée aux Écoles Nationales Supérieures d'Architecture. Prépa annuelle, stages intensifs, e-learning — 100% de réussite."
        path="/"
        keywords={["prépa architecture", "concours ENSA", "école architecture", "portfolio architecture", "prépa ENSA Paris"]}
      />
      <Hero />
      <WhyUs />
      <Pedagogy />
      <Services />
      <Team />
      <Avis />
      <CertificationQualiopi />
      <Cta />
    </>
  )
}
