import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  if (navOpen) return <Header navOpen={navOpen} setNavOpen={setNavOpen} />
  return (
    <body>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main className="mx-auto py-10 px-5 md:px-20 max-w-screen-2xl space-y-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </body>
  )
}

export default App
