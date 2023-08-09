import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function About() {
  const [readMoreOpen, setReadMoreOpen] = useState(false)

  const handleReadMoreClick = () => {
    setReadMoreOpen((prevReadMore) => !prevReadMore)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center md:items-start space-y-4 mx-4 max-w-screen-sm">
        <h1 className="text-center text-5xl">
          Hello, my name is <span className="font-bold">Jack Agtual</span>
        </h1>
        <h2 className="text-center text-3xl font-light">I'm a software engineer</h2>
        <p className="text-center">
          This is a small bit about me, my skills, and the work I've done.
        </p>
        <button onClick={handleReadMoreClick} className="flex items-center space-x-1">
          {readMoreOpen ? (
            <>
              <MdKeyboardArrowUp className="w-6 h-6" />
              <p className="underline underline-offset-2">Read less</p>
            </>
          ) : (
            <>
              <MdKeyboardArrowDown className="w-6 h-6" />
              <p className="underline underline-offset-2">Read more</p>
            </>
          )}
        </button>
        {readMoreOpen && (
          <div className="border-s-4 rounded-sm space-y-4 pl-4">
            <p className="text-center md:text-left">
              This is a longer description about me. It'll talk about how I have been
              working as a systems engineer for the past ~2 years and how that work
              relates to web development.
            </p>
            <p className="text-center md:text-left">
              I'll also talk about how I have an engineering degree and how it helps me:
              think critically using first principles, technical learning, technical
              communication
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default About
