import { useState, useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [navOpen, setNavOpen] = useState(false)
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
  if (navOpen)
    return <Header navOpen={navOpen} setNavOpen={setNavOpen} sections={sections} />
  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} sections={sections} />
      <main className="mx-auto px-5 sm:px-10 md:px-20 max-w-screen-2xl space-y-10">
        <Home ref={homeRef} readMoreRef={aboutRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  )
}

export default App
