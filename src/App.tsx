import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  if (navOpen) return <Header navOpen={navOpen} setNavOpen={setNavOpen} />
  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  )
}

export default App
