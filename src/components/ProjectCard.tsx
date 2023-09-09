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
    <div className="flex flex-col lg:flex-row w-full gap-y-3 border-b-2 last:border-b-0 border-black pb-6">
      <img
        className="rounded-lg mx-auto lg:mx-0 h-full object-cover w-full max-w-md cursor-pointer"
        src={image}
        alt={`${name} screenshot`}
        onClick={() => window.open(image, '_blank')}
      />

      <div className="lg:pl-4 space-y-4">
        <h1 className="text-center lg:text-left text-2xl font-semibold">{name}</h1>
        <p className="text-center sm:text-left">{description}</p>
        <div>
          <h2 className="text-center sm:text-left lg:text-left text-xl">Made with:</h2>
          <div className="flex justify-center sm:justify-start flex-wrap gap-x-5">
            {madeWith.map((item) => {
              return (
                <p key={item} className="min-w-fit">
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center flex-wrap gap-y-3 gap-x-2">
          <LinkButton name="View the source code" href={github} />
          <LinkButton name="Try it out" href={website} />
          <LinkButton name="Watch a gif" href={gif} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
