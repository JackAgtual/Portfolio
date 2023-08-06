import { useState, useEffect } from 'react'

function useWindowResize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return windowSize
}

export default useWindowResize
