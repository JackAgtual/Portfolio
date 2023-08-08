import { useEffect } from 'react'
import useWindowResize from '../hooks/useWindowResize'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const sections = ['Home', 'Skills', 'Projects', 'Work Experience', 'Education', 'Contact']
const navBreakpointSize = 768 // form tailwind md size

type HeaderProps = {
  navOpen: boolean
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ navOpen, setNavOpen }: HeaderProps) {
  const windowWidth = useWindowResize()

  useEffect(() => {
    if (navOpen && windowWidth > navBreakpointSize) {
      setNavOpen(false)
    }
  }, [windowWidth])

  const handleNavMenuClick = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen)
  }

  return (
    <div className={`flex flex-col ${navOpen ? 'h-screen' : ''}`}>
      <header className="flex items-center justify-between py-5 px-10">
        <h1 className="text-center">Jack Agtual</h1>
        <nav>
          <ul className="hidden md:flex items-center justify-evenly space-x-9">
            {sections.map((section) => {
              return (
                <li key={section}>
                  <button>{section}</button>
                </li>
              )
            })}
          </ul>
        </nav>
        <button className="md:hidden" onClick={handleNavMenuClick}>
          {navOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineMenu className="text-2xl" />
          )}
        </button>
      </header>
      {navOpen && (
        <nav className="flex-1 my-5">
          <ul className="flex h-full flex-col items-center">
            {sections.map((section) => {
              return (
                <li key={section} className="flex flex-col justify-center grow">
                  <button className="w-screen py-5">{section}</button>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Header
