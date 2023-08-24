import { cloneElement, ReactElement } from 'react'
import {
  SiHtml5,
  SiTypescript,
  SiCss3,
  SiMui,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiNodedotjs,
  SiJest,
} from 'react-icons/si'
import { FaReact, FaJira, FaPython } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

type SkillAndIcon = {
  skill: string
  icon: ReactElement
}

const skillsAndIcons: SkillAndIcon[] = [
  { skill: 'HTML', icon: <SiHtml5 /> },
  { skill: 'CSS', icon: <SiCss3 /> },
  { skill: 'JavaScript & TypeScript', icon: <SiTypescript /> },
  { skill: 'React JS', icon: <FaReact /> },
  { skill: 'Git', icon: <SiGit /> },
  { skill: 'Jest', icon: <SiJest /> },
  { skill: 'Material UI', icon: <SiMui /> },
  { skill: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { skill: 'Firebase', icon: <SiFirebase /> },
  { skill: 'Redux Toolkit', icon: <SiRedux /> },
  { skill: 'Node JS & Express', icon: <SiNodedotjs /> },
  { skill: 'Python', icon: <FaPython /> },
  { skill: 'Jira', icon: <FaJira /> },
]

function Skills() {
  return (
    <div>
      <SectionTitle>Some of my technical skills</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 px-2">
        {skillsAndIcons.map(({ skill, icon }) => {
          return (
            <div key={skill} className="flex flex-col items-center space-y-1">
              <p className="text-center">{skill}</p>
              {cloneElement(icon, { className: 'h-10 w-10' })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
