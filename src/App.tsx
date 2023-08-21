import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  if (navOpen) return <Header navOpen={navOpen} setNavOpen={setNavOpen} />
  return (
    <>
      <div className="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main className="mx-auto px-5 sm:px-10 md:px-20 max-w-screen-2xl space-y-10">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
