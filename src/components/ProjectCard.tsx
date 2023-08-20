import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub, AiOutlineFileGif } from 'react-icons/ai'

type ProjectCardProps = {
  projectName: string
  projectDescription: string
  image: string
  github: string
  website: string
  gif: string
}

function ProjectCard({
  projectName,
  projectDescription,
  image,
  github,
  website,
  gif,
}: ProjectCardProps) {
  return (
    <div className="max-w-md border-b-2 last:border-b-0 border-slate-300 pb-6">
      <img
        className="aspect-video rounded-lg"
        src={image}
        alt={`${projectName} screenshot`}
      />
      <div className="px-4 py-3 space-y-3">
        <h1 className="text-center text-xl font-semibold">{projectName}</h1>
        <p className="text-center">{projectDescription}</p>
        <div className="flex flex-col space-y-2">
          <button className="rounded-md px-3 py-1 flex justify-center items-center space-x-2 bg-orange-600/75">
            <AiFillGithub className="h-6 w-6" />
            <a href={github} target="_blank">
              View the source code
            </a>
          </button>
          <button className="rounded-md px-3 py-1 flex justify-center items-center space-x-2 bg-orange-600/75">
            <FiExternalLink className="h-6 w-6" />
            <a href={website} target="_blank">
              Try it out
            </a>
          </button>
          <button className="rounded-md px-3 py-1 flex justify-center items-center space-x-2 bg-orange-600/75">
            <AiOutlineFileGif className="h-6 w-6" />
            <a href={gif} target="_blank">
              Watch a gif
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
