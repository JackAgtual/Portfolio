import { useState, forwardRef, ForwardedRef } from 'react'
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
      demo: 'https://www.youtube.com/embed/YmtRWRamlSQ?si=myw2o5xhuz6fI8dF',
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
      demo: 'https://www.youtube.com/embed/sASl6ts9Ad8?si=CcrdipsHcnyxDeCU',
    },
  },
  {
    name: 'Static solver',
    description: 'Solve static beam analysis problems.',
    madeWith: ['React', 'TypeScript', 'Jest', 'CSS'],
    image: workingMemoji,
    github: 'https://github.com/JackAgtual/Static-Solver',
  },
]

function Projects({}, ref: ForwardedRef<HTMLDivElement>) {
  const [query, setQuery] = useState('')

  const filteredProjects = projects.filter((project) => {
    return project.madeWith.some((technology) =>
      technology.toLowerCase().includes(query.toLowerCase()),
    )
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  return (
    <div ref={ref}>
      <SectionTitle>Here are some of my projects</SectionTitle>
      <label className="flex flex-col pb-5">
        Filter projects by technology
        <input
          type="search"
          className="text-black px-2 py-2 rounded-sm border"
          placeholder="Material UI"
          value={query}
          onChange={handleFilterChange}
        ></input>
      </label>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-8">
          {filteredProjects.map((project) => {
            return <ProjectCard key={project.name} madeWithFilter={query} {...project} />
          })}
        </div>
      ) : (
        <h2>There aren't any projects that match that serach</h2>
      )}
    </div>
  )
}

export default forwardRef(Projects)
