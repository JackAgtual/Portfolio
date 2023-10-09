import { twMerge } from 'tailwind-merge'
import { Project } from '../../types/project'

type MadeWithSectionProps = Pick<Project, 'madeWith'> & {
  madeWithFilter: string
}

function MadeWithSection({ madeWith, madeWithFilter }: MadeWithSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold pt-5 sm:pb-2">Made with:</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {madeWith.map((item) => {
          const selectedStyle =
            madeWithFilter.length > 0 &&
            item.toLowerCase().includes(madeWithFilter.toLocaleLowerCase())
              ? 'border-black border-2'
              : ''

          return (
            <li
              key={item}
              className={twMerge(
                'px-2 py-1text-sm sm:text-base break-words rounded-md bg-tertiary-bg border-2 border-transparent',
                selectedStyle,
              )}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MadeWithSection
