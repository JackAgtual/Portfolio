import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  if (navOpen) return <Header navOpen={navOpen} setNavOpen={setNavOpen} />
  return (
    <body>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <About />
        <Skills />
      </main>
    </body>
  )
}

export default App
