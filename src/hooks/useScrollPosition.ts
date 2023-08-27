import { useState, useEffect } from 'react'

function useScrollPosition() {
  const [atTop, setAtTop] = useState(true)

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

  return atTop
}

export default useScrollPosition
