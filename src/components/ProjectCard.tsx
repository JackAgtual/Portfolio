import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub, AiOutlineFileGif } from 'react-icons/ai'
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
    <div className="max-w-md border-b-2 last:border-b-0 border-slate-300 pb-6">
      <img className="aspect-video rounded-lg" src={image} alt={`${name} screenshot`} />
      <div className="px-4 py-3 space-y-3">
        <h1 className="text-center text-xl font-semibold">{name}</h1>
        <p className="text-center">{description}</p>
        <h2 className="text-center text-lg">Made with:</h2>
        <div className="flex justify-center flex-wrap gap-x-5">
          {madeWith.map((item) => {
            return <p className="min-w-fit">{item}</p>
          })}
        </div>
        <div className="flex flex-col flex-wrap space-y-2">
          <LinkButton name="View the source code" href={github} icon={<AiFillGithub />} />
          <LinkButton name="Try it out" href={website} icon={<FiExternalLink />} />
          <LinkButton name="Watch a gif" href={gif} icon={<AiOutlineFileGif />} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
