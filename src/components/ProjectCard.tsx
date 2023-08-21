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
    <div className="flex flex-col lg:flex-row border-b-2 last:border-b-0 border-slate-300 pb-6">
      <img
        className="rounded-lg mx-auto h-full object-cover w-full max-w-md"
        src={image}
        alt={`${name} screenshot`}
      />

      <div className="px-4 space-y-3">
        <h1 className="text-center lg:text-left text-xl font-semibold">{name}</h1>
        <div>
          <p className="text-center lg:text-left">{description}</p>
          <h2 className="text-center lg:text-left text-lg">Made with:</h2>
          <div className="flex justify-center lg:justify-start flex-wrap gap-x-5">
            {madeWith.map((item) => {
              return (
                <p key={item} className="min-w-fit">
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center flex-wrap gap-y-3 gap-x-2">
          <LinkButton name="View the source code" href={github} icon={<AiFillGithub />} />
          <LinkButton name="Try it out" href={website} icon={<FiExternalLink />} />
          <LinkButton name="Watch a gif" href={gif} icon={<AiOutlineFileGif />} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
