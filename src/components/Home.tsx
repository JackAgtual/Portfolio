import { forwardRef, ForwardedRef } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from '../types/links'
import { DivRef } from '../types/sections'
import LinkButton from './LinkButton'
import Scroll from '../utils/Scroll'

const links: Link[] = [
  {
    name: 'Resume',
    href: '#',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jack-agtual/',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/JackAgtual',
  },
]

type HomeProps = {
  readMoreRef: DivRef
  offsetRef: DivRef
}

function Home({ readMoreRef, offsetRef }: HomeProps, ref: ForwardedRef<HTMLDivElement>) {
  const handleReadMoreClick = () => {
    Scroll.scrollToRefWithRefOffset(readMoreRef, offsetRef)
  }

  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-main-vh">
      <div className="flex flex-col items-center md:items-start space-y-4 mx-4">
        <h1 className="text-center md:text-left text-5xl md:text-6xl lg:text-7xl">
          Hello, my name is <span className="font-bold">Jack Agtual</span>
        </h1>
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-light">
          I'm a software engineer
        </h2>
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-4">
          {links.map((link) => {
            return <LinkButton key={link.name} name={link.name} href={link.href} />
          })}
        </div>
        <button onClick={handleReadMoreClick} className="flex items-center space-x-1">
          <MdKeyboardArrowDown className="w-6 h-6" />
          <p className="underline underline-offset-2">Read more</p>
        </button>
      </div>
    </div>
  )
}

export default forwardRef(Home)
