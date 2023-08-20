import { cloneElement } from 'react'
import { Link } from '../types/links'

type LinkProps = Link

function LinkButton({ name, href, icon }: LinkProps) {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      className="flex items-center justify-center space-x-2 border px-4 py-2 rounded-md"
    >
      {cloneElement(icon, { className: 'w-6 h-6' })}
      <p>{name}</p>
    </a>
  )
}

export default LinkButton
