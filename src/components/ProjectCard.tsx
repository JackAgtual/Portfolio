import { useState, useRef } from 'react'
import { Project } from '../types/project'
import LinkButton from './LinkButton'
import VideoPlayer from './VideoPlayer'

type ProjectCardProps = Project

function ProjectCard({
  name,
  description,
  madeWith,
  image,
  github,
  deployedLinks,
}: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef<HTMLDialogElement | null>(null)

  const handleModalClick = () => {
    if (videoRef === null) return

    if (modalOpen) {
      videoRef.current?.close()
      setModalOpen(false)
    } else {
      videoRef.current?.showModal()
      setModalOpen(true)
    }
  }

  return (
    <div className=" bg-[#eef2f7] p-5 rounded-lg max-w-5xl drop-shadow-xl">
      <h1 className="text-3xl font-bold md:hidden">{name}</h1>
      <div className="md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:order-last">
          <img src={image} alt={`${name} screenshot`} className="max-h-64 mx-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-bold hidden md:block">{name}</h1>
          <div className="space-y-3 pt-3">
            {deployedLinks === undefined && (
              <p className="text-sm sm:text-base">This project is a work in progress.</p>
            )}
            <p className="text-sm sm:text-base">{description}</p>
          </div>
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
        </div>
      </div>
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
      <VideoPlayer
        ref={videoRef}
        name={name}
        videoSrc={deployedLinks?.demo}
        handleClose={handleModalClick}
      />
    </div>
  )
}

export default ProjectCard
