import { useEffect, forwardRef, ForwardedRef } from 'react'
import useWindowResize from '../hooks/useWindowResize'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Section } from '../types/sections'
import Scroll from '../utils/Scroll'
import { breakpoints } from '../utils/breakpoints'

type HeaderProps = {
  navOpen: boolean
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  sections: Section[]
}

function Header(
  { navOpen, setNavOpen, sections }: HeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const windowWidth = useWindowResize()

  useEffect(() => {
    if (navOpen && windowWidth > breakpoints.md) {
      setNavOpen(false)
    }
  }, [windowWidth])

  const handleNavMenuClick = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen)
  }

  const handleSectionClick = (section: Section) => {
    setNavOpen(false)
    setTimeout(() => {
      if (!ref || typeof ref === 'function') return
      Scroll.scrollToRefWithRefOffset(section.ref, ref)
    })
  }

  return (
    <div
      ref={ref}
      className={`sticky top-0 flex flex-col z-10 ${
        navOpen ? 'h-screen' : ''
      } bg-secondary-bg text-secondary-text`}
    >
      <header className="flex items-center justify-between py-5 px-10">
        <h1 className="text-center">Jack Agtual</h1>
        <nav>
          <ul className="hidden md:flex items-center justify-evenly space-x-9">
            {sections.map((section) => {
              return (
                <li key={section.name}>
                  <button onClick={() => handleSectionClick(section)}>
                    {section.name}
                  </button>
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
                <li key={section.name} className="flex flex-col justify-center grow">
                  <button
                    onClick={() => handleSectionClick(section)}
                    className="w-screen py-5"
                  >
                    {section.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default forwardRef(Header)
