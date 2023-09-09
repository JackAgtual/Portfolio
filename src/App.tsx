import { useState, useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sections = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Contact', ref: contactRef },
  ]

  if (navOpen) {
    return (
      <Header
        ref={headerRef}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        sections={sections}
      />
    )
  }

  return (
    <>
      <Header
        ref={headerRef}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        sections={sections}
      />
      <main className="flex flex-col items-center px-5 pb-10 sm:px-10 md:px-20">
        <Home ref={homeRef} readMoreRef={aboutRef} offsetRef={headerRef} />
        <About ref={aboutRef} />
        <div className="space-y-20 max-w-screen-xl">
          <Projects ref={projectsRef} />
          <Skills ref={skillsRef} />
          <Contact ref={contactRef} />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
