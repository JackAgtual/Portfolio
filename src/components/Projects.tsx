import { forwardRef, ForwardedRef } from 'react'
import iphoneMock from '../assets/iphoneMock.png'
import laptopMock from '../assets/laptopMock.png'
import ProjectCard from './ProjectCard'
import { Project } from '../types/project'
import SectionTitle from './SectionTitle'

const projects: Project[] = [
  {
    name: 'Travel Planner',
    description: 'Plan your next adventure with Travel Planner.',
    smallImage: iphoneMock,
    largeImage: laptopMock,
    madeWith: ['React', 'TypeScript', 'Tailwind CSS', 'Express JS'],
    github: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
    website: 'https://jackagtual.github.io/Travel-Planner-Frontend/',
    gif: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
  },
  {
    name: 'Net Worth Tracker',
    description: 'Track your net worth over time to see how it changes.',
    madeWith: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    smallImage: iphoneMock,
    largeImage: laptopMock,
    github: 'https://github.com/JackAgtual/Net-Worth-Tracker',
    website: 'https://jackagtual.github.io/Net-Worth-Tracker/',
    gif: 'https://github.com/JackAgtual/Net-Worth-Tracker',
  },
]

function Projects({}, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref}>
      <SectionTitle>Here are some of my projects</SectionTitle>
      <div className="grid grid-cols-1 gap-y-8">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              madeWith={project.madeWith}
              smallImage={project.smallImage}
              largeImage={project.largeImage}
              github={project.github}
              website={project.website}
              gif={project.gif}
            />
          )
        })}
      </div>
    </div>
  )
}

export default forwardRef(Projects)
