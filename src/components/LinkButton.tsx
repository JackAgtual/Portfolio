import { Link } from '../types/links'

type LinkProps = Link & {
  smallSize?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
}

function LinkButton({ name, href, target = '_blank', smallSize = false }: LinkProps) {
  const commonClasses =
    'border-black py-2 rounded-lg hover:bg-tertiary-bg hover:bg-opacity-50 transition-all'

  const sizeClasses = smallSize ? 'border px-2 text-sm' : 'border-2 px-4'

  return (
    <button
      className={commonClasses.concat(' ', sizeClasses)}
      onClick={() => window.open(href, target)}
    >
      {name}
    </button>
  )
}

export default LinkButton
