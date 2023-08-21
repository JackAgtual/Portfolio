import netWorthTrackerScreenshot from '../assets/net-worth-tracker/screenshot.png'
import travelPlannerScreenshot from '../assets/travel-planner/screenshot.png'
import ProjectCard from './ProjectCard'
import { Project } from '../types/project'

const projects: Project[] = [
  {
    name: 'Travel Planner',
    description:
      'Plan your next adventure with Travel Planner. Search for destinations and attractions at that destination.',
    image: travelPlannerScreenshot,
    madeWith: ['React', 'TypeScript', 'Tailwind CSS', 'Express JS'],
    github: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
    website: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
    gif: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
  },
  {
    name: 'Net Worth Tracker',
    description: 'Track your net worth over time to see how it changes.',
    madeWith: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: netWorthTrackerScreenshot,
    github: 'https://github.com/JackAgtual/Net-Worth-Tracker',
    website: 'https://github.com/JackAgtual/Net-Worth-Tracker',
    gif: 'https://github.com/JackAgtual/Net-Worth-Tracker',
  },
]

function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-6">
        Here are some of my projects
      </h1>
      <div className="flex flex-col items-center lg:items-start gap-y-8">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              madeWith={project.madeWith}
              image={project.image}
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

export default Projects
