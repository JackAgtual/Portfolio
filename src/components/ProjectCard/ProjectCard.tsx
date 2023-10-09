import { useState, useRef } from 'react'
import { Project } from '../../types/project'
import VideoPlayer from './VideoPlayer'
import ButtonSection from './ButtonSection'
import MadeWithSection from './MadeWithSection'

type ProjectCardProps = Project & {
  madeWithFilter: string
}

function ProjectCard({
  name,
  description,
  madeWith,
  image,
  github,
  deployedLinks,
  madeWithFilter,
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
          <MadeWithSection madeWith={madeWith} madeWithFilter={madeWithFilter} />
        </div>
      </div>
      <ButtonSection
        github={github}
        deployedLinks={deployedLinks}
        handleModalClick={handleModalClick}
      />
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
