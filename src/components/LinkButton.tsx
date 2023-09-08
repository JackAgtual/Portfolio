import { cloneElement } from 'react'
import { Link } from '../types/links'

type LinkProps = Link & { target?: '_blank' | '_self' | '_parent' | '_top' }

function LinkButton({ name, href, icon, target = '_blank' }: LinkProps) {
  return (
    <button
      className="flex items-center justify-center space-x-2 border-2 border-black px-4 py-2 rounded-md hover:bg-tertiary-bg hover:bg-opacity-50 transition-all"
      onClick={() => window.open(href, target)}
    >
      {cloneElement(icon, { className: 'w-6 h-6' })}
      <p>{name}</p>
    </button>
  )
}

export default LinkButton
