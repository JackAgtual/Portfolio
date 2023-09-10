import React from 'react'
import { Link } from '../types/links'
import { twMerge } from 'tailwind-merge'

type LinkButtonProps = Link &
  Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    target?: '_blank' | '_self' | '_parent' | '_top'
  }

function LinkButton({ name, href, target = '_blank', className }: LinkButtonProps) {
  return (
    <button
      className={twMerge(
        'border-black border-2 py-2 px-4 rounded-lg hover:bg-tertiary-bg hover:bg-opacity-50 transition-all',
        className,
      )}
      onClick={() => window.open(href, target)}
    >
      {name}
    </button>
  )
}

export default LinkButton
