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
  const [showSmallImage, setShowSmallImage] = useState(true)

  useEffect(() => {
    if (windowSize >= breakpoints.md && showSmallImage) {
      setShowSmallImage(false)
    } else if (windowSize < breakpoints.md && !showSmallImage) {
      setShowSmallImage(true)
    }
  }, [windowSize])

  return (
    <div className=" bg-blue-100 p-5 rounded-lg">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-sm sm:text-base pt-3">{description}</p>
          <div>
            <h2 className="text-lg font-semibold pt-5">Made with:</h2>
            <ul className="grid grid-cols-2 gap-y-2">
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
        <div className="flex flex-col justify-center">
          <img
            src={showSmallImage ? smallImage : largeImage}
            alt={`${name} screenshot`}
            className="max-h-64 mx-auto"
          />
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
