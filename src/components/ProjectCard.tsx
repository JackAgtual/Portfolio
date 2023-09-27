import { Project } from '../types/project'
import LinkButton from './LinkButton'

type ProjectCardProps = Project

function ProjectCard({
  name,
  description,
  madeWith,
  image,
  github,
  website,
  gif,
}: ProjectCardProps) {
  return (
    <div className=" bg-blue-100 p-5 rounded-lg max-w-5xl">
      <h1 className="text-3xl font-bold md:hidden">{name}</h1>
      <div className="md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:order-last">
          <img src={image} alt={`${name} screenshot`} className="max-h-64 mx-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-bold hidden md:block">{name}</h1>
          <p className="text-sm sm:text-base pt-3">{description}</p>
          <div>
            <h2 className="text-lg font-semibold pt-5">Made with:</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {madeWith.map((item) => {
                return (
                  <li key={item} className="text-sm sm:text-base break-words">
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-2 md:gap-x-5 pt-5">
        <LinkButton
          name="Try it out"
          href={website}
          className="border max-sm:px-2 max-sm:text-sm"
        />
        <LinkButton
          name="Watch a gif"
          href={gif}
          className="border max-sm:px-2 max-sm:text-sm"
        />
        <LinkButton
          name="Code"
          href={github}
          className="border max-sm:px-2 max-sm:text-sm"
        />
      </div>
    </div>
  )
}

export default ProjectCard
