import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Competencies from '@/components/Competencies'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default async function Home() {
  return (
    <main className="min-h-screen bg-[#05050f]">
      <Navigation />
      <Hero />
      <About />
      <Competencies />
      <Experience />
      <Certifications />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
