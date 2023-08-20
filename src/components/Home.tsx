import { cloneElement } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsLinkedin, BsFileEarmarkText } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const links = [
  {
    name: 'Resume',
    href: '#',
    icon: <BsFileEarmarkText />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jack-agtual/',
    icon: <BsLinkedin />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/JackAgtual',
    icon: <AiFillGithub />,
  },
]

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-main-vh">
      <div className="flex flex-col items-center md:items-start space-y-4 mx-4 max-w-screen-sm">
        <h1 className="text-center md:text-left text-5xl">
          Hello, my name is <span className="font-bold">Jack Agtual</span>
        </h1>
        <h2 className="text-center text-3xl font-light">I'm a software engineer</h2>
        <p className="text-center">
          This is a small bit about me, my skills, and the work I've done.
        </p>
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-4">
          {links.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="flex items-center space-x-2 border px-4 py-2 rounded-md"
              >
                {cloneElement(link.icon, { className: 'w-6 h-6' })}
                <p>{link.name}</p>
              </a>
            )
          })}
        </div>
        <button className="flex items-center space-x-1">
          <MdKeyboardArrowDown className="w-6 h-6" />
          <p className="underline underline-offset-2">Read more</p>
        </button>
      </div>
    </div>
  )
}

export default Home
