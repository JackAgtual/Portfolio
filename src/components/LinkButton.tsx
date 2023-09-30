import React from 'react'
import { Link } from '../types/links'
import { twMerge } from 'tailwind-merge'

type LinkButtonProps = Link &
  Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> & {
    target?: '_blank' | '_self' | '_parent' | '_top'
  }

function LinkButton({
  name,
  href,
  target = '_blank',
  className,
  onClick: clickHandler,
}: LinkButtonProps) {
  const handleClick = clickHandler ? clickHandler : () => window.open(href, target)

  return (
    <button
      className={twMerge(
        'border-black border-2 py-2 px-4 rounded-lg hover:bg-tertiary-bg hover:bg-opacity-50 transition-all',
        className,
      )}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default LinkButton
