import { AiOutlineArrowUp } from 'react-icons/ai'
import Scroll from '../utils/Scroll'
import useScrollPosition from '../hooks/useScrollPosition'

function ScrollToTop() {
  const atTop = useScrollPosition()

  if (atTop) return

  return (
    <button
      className="fixed bottom-6 right-6 rounded-full px-2 py-2 bg-tertiary-bg"
      onClick={Scroll.scrollToTop}
    >
      <AiOutlineArrowUp className="mx-auto w-5 h-5" />
    </button>
  )
}

export default ScrollToTop
