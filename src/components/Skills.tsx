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
  SiAtlassian,
  SiNodedotjs,
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

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
  { skill: 'Bitbucket, Jira & Confluence', icon: <SiAtlassian /> },
  { skill: 'Material UI', icon: <SiMui /> },
  { skill: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { skill: 'Firebase', icon: <SiFirebase /> },
  { skill: 'Redux Toolkit', icon: <SiRedux /> },
  { skill: 'Node JS & Express', icon: <SiNodedotjs /> },
]

function Skills() {
  return (
    <>
      <h1 className="text-2xl font-medium text-center mb-6">
        Some of my technical skills
      </h1>
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
    </>
  )
}

export default Skills
