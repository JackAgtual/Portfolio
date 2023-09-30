import LinkButton from '../LinkButton'
import { Project } from '../../types/project'

type ButtonSectionProps = Pick<Project, 'github' | 'deployedLinks'> & {
  handleModalClick: () => void
}

function ButtonSection({ github, deployedLinks, handleModalClick }: ButtonSectionProps) {
  return (
    <div className="grid grid-cols-3 gap-x-2 md:gap-x-5 pt-5">
      <LinkButton
        name="Code"
        href={github}
        className="border max-sm:px-2 max-sm:text-sm"
      />
      {deployedLinks !== undefined && (
        <>
          <LinkButton
            name="Try it out"
            href={deployedLinks.website}
            className="border max-sm:px-2 max-sm:text-sm"
          />
          <LinkButton
            name="Watch a demo"
            href={deployedLinks.demo}
            className="border max-sm:px-2 max-sm:text-sm"
            onClick={handleModalClick}
          />
        </>
      )}
    </div>
  )
}

export default ButtonSection
