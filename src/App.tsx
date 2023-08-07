import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  if (navOpen) return <Header navOpen={navOpen} setNavOpen={setNavOpen} />
  return (
    <body>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <About />
      </main>
    </body>
  )
}

export default App
