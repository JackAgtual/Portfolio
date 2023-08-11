import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <footer className="flex justify-center items-center space-x-14 h-16">
      <a href="https://www.linkedin.com/in/jack-agtual/" target="_blank">
        <BsLinkedin className="w-10 h-10" />
      </a>
      <a href="https://github.com/JackAgtual" target="_blank">
        <AiFillGithub className="w-10 h-10" />
      </a>
    </footer>
  )
}

export default Footer
