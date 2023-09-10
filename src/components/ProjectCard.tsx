import { useEffect, useState } from 'react'
import useWindowResize from '../hooks/useWindowResize'
import { Project } from '../types/project'
import LinkButton from './LinkButton'
import { breakpoints } from '../utils/breakpoints'

type ProjectCardProps = Project

function ProjectCard({
  name,
  description,
  madeWith,
  smallImage,
  largeImage,
  github,
  website,
  gif,
}: ProjectCardProps) {
  const windowSize = useWindowResize()
  const [smallDisplayImage, setSmallDisplayImage] = useState(true)

  useEffect(() => {
    if (windowSize >= breakpoints.md && smallDisplayImage) {
      setSmallDisplayImage(false)
    } else if (windowSize < breakpoints.md && !smallDisplayImage) {
      setSmallDisplayImage(true)
    }
  }, [windowSize])

  return (
    <div className=" bg-blue-100 p-5 rounded-lg">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-sm pt-3">{description}</p>
          <div>
            <h2 className="text-lg font-semibold pt-5">Made with:</h2>
            <ul className="grid grid-cols-2 gap-y-2">
              {madeWith.map((item) => {
                return (
                  <li key={item} className="text-sm break-words">
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <img
          src={smallDisplayImage ? smallImage : largeImage}
          alt={`${name} screenshot`}
          className="max-h-64 mx-auto"
        />
      </div>
      <div className="grid grid-cols-3 gap-x-2 pt-5">
        <LinkButton name="Try it out" href={website} smallSize={true} />
        <LinkButton name="Watch a gif" href={gif} smallSize={true} />
        <LinkButton name="Code" href={github} smallSize={true} />
      </div>
    </div>
  )
}

export default ProjectCard
