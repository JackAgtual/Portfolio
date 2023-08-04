import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const handleNavMenuClick = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen)
  }
  return (
    <div className={`flex flex-col ${navOpen ? 'h-screen' : ''}`}>
      <header className="flex items-center justify-between py-5 px-10 bg-slate-300">
        <h1 className="text-center">Jack Agtual</h1>
        {navOpen ? (
          <button onClick={handleNavMenuClick}>
            <AiOutlineClose className="text-2xl" />
          </button>
        ) : (
          <button onClick={handleNavMenuClick}>
            <AiOutlineMenu className="text-2xl" />
          </button>
        )}
      </header>
      {navOpen && (
        <nav className="flex-1">
          <ul className="flex h-full flex-col items-center justify-evenly">
            <li className="grow">
              <button className="w-screen h-full">Home</button>
            </li>
            <li className="grow">
              <button className="w-screen h-full">Skills</button>
            </li>
            <li className="grow">
              <button className="w-screen h-full">Project</button>
            </li>
            <li className="grow">
              <button className="w-screen h-full">Work Experience</button>
            </li>
            <li className="grow">
              <button className="w-screen h-full">Education</button>
            </li>
            <li className="grow">
              <button className="w-screen h-full">Contact</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Header
