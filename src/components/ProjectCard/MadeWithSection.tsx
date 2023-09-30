import { Project } from '../../types/project'

type MadeWithSectionProps = Pick<Project, 'madeWith'>

function MadeWithSection({ madeWith }: MadeWithSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold pt-5 sm:pb-2">Made with:</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {madeWith.map((item) => {
          return (
            <li
              key={item}
              className="px-2 py-1text-sm sm:text-base break-words rounded-md bg-tertiary-bg"
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
