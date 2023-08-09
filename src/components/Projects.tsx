import netWorthTrackerScreenshot from '../assets/net-worth-tracker/screenshot.png'
import travelPlannerScreenshot from '../assets/travel-planner/screenshot.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Travel Planner',
    description:
      'Plan your next adventure with Travel Planner. Search for destinations and attractions at that destination.',
    image: travelPlannerScreenshot,
    github: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
    website: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
    gif: 'https://github.com/JackAgtual/Travel-Planner-Frontend',
  },
  {
    name: 'Net Worth Tracker',
    description: 'Track your net worth over time to see how it changes.',
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
        Here are some projects I've worked on
      </h1>
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-12">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              projectName={project.name}
              projectDescription={project.description}
              image={netWorthTrackerScreenshot}
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
