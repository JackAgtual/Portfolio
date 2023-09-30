import { forwardRef, ForwardedRef } from 'react'
import travelPlannerScreenshot from '../assets/TravelPlannerScreenshot.png'
import netWorthTrackerScreenshot from '../assets/NetWorthTrackerScreenshot.png'
import workingMemoji from '../assets/workingMemoji.png'
import ProjectCard from './ProjectCard'
import { Project } from '../types/project'
import SectionTitle from './SectionTitle'

const projects: Project[] = [
  {
    name: 'Travel Planner',
    description: 'Plan your next adventure with Travel Planner.',
    image: travelPlannerScreenshot,
    madeWith: ['React', 'TypeScript', 'Tailwind CSS', 'Express JS'],
    github: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
    deployedLinks: {
      website: 'https://jackagtual.github.io/Travel-Planner-Frontend/',
      demo: 'https://youtu.be/UU_B3bPpOEM',
    },
  },
  {
    name: 'Net Worth Tracker',
    description: 'Track your net worth over time to see how it changes.',
    madeWith: ['React', 'TypeScript', 'Material UI', 'Firebase'],
    image: netWorthTrackerScreenshot,
    github: 'https://github.com/JackAgtual/Net-Worth-Tracker',
    deployedLinks: {
      website: 'https://jackagtual.github.io/Net-Worth-Tracker/',
      demo: 'https://youtu.be/sASl6ts9Ad8',
    },
  },
  {
    name: 'Static solver',
    description: 'Solve static beam analysis problems.',
    madeWith: ['React', 'TypeScript', 'Material UI', 'Jest'],
    image: workingMemoji,
    github: 'https://github.com/JackAgtual/Static-Solver',
  },
]

function Projects({}, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref}>
      <SectionTitle>Here are some of my projects</SectionTitle>
      <div className="grid grid-cols-1 gap-y-8">
        {projects.map((project) => {
          return <ProjectCard key={project.name} {...project} />
        })}
      </div>
    </div>
  )
}

export default forwardRef(Projects)
