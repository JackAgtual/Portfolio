import { useState, useEffect } from 'react'

function useScrollPosition(): [boolean, () => void] {
  const [atTop, setAtTop] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true)
      } else {
        setAtTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [atTop, scrollToTop]
}

export default useScrollPosition
