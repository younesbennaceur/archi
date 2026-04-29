import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import FloatingCallButton from './components/FloatingCallButton.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PrepaDistancePage from './pages/PrepaDistancePage.jsx'
import PrepaTempsCompletPage from './pages/PrepaTempsCompletPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import StageBootCampPage from './pages/StageBootCampPage.jsx'
import StageEntretienEnsaPage from './pages/StageEntretienEnsaPage.jsx'
import StageDecouvertePage from './pages/StageDecouvertePage.jsx'
import Rhino3DPage from './pages/Rhino3DPage.jsx'
import MentionsLegalesPage from './pages/Mentions.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/prepa-distance" element={<PrepaDistancePage />} />
          <Route path="/services/prepa-annuelle-temps-plein" element={<PrepaTempsCompletPage />} />
          <Route path="/services/stage-boot-camp" element={<StageBootCampPage />} />
          <Route path="/services/stage-entretien-ensa" element={<StageEntretienEnsaPage />} />
          <Route path="/services/formation-rhino-3d" element={<Rhino3DPage />} />
          <Route path="/services/stage-decouverte" element={<StageDecouvertePage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
