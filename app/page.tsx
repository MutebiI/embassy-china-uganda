
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ConsularServices from './components/Consular/ConsularServices'
import ChinaUgandaRelations from './components/Relations/ChinaUgandaRelations'
import NewsEvents from './components/News/NewsEvents'
import AboutEmbassy from './components/About/AboutEmbassy'
import ContactSection from './components/Contact/ContactSection'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ConsularServices />
       <ChinaUgandaRelations />
       <NewsEvents />
       <AboutEmbassy />
       <ContactSection />
       <Footer />
    </main>
  )
}