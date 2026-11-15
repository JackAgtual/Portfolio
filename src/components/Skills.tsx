import { cloneElement, ForwardedRef, forwardRef, ReactElement } from "react";
import { FaJava, FaJira, FaLinux, FaPython, FaReact } from "react-icons/fa";
import {
  SiAnsible,
  SiCss,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiHtml5,
  SiJest,
  SiJunit5,
  SiKubernetes,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiShadcnui,
  SiSonarqubeserver,
  SiSpringboot,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";

type SkillAndIcon = {
  skill: string;
  icon: ReactElement;
};

type SkillCategory = {
  name: string;
  skills: SkillAndIcon[];
};

const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { skill: "Java", icon: <FaJava /> },
      { skill: "JavaScript & TypeScript", icon: <SiTypescript /> },
      { skill: "Python", icon: <FaPython /> },
      { skill: "Bash", icon: <SiGnubash /> },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { skill: "Spring Boot", icon: <SiSpringboot /> },
      { skill: "React JS", icon: <FaReact /> },
      { skill: "Next JS", icon: <SiNextdotjs /> },
      { skill: "Node JS & Express", icon: <SiNodedotjs /> },
    ],
  },
  {
    name: "Styling",
    skills: [
      { skill: "HTML", icon: <SiHtml5 /> },
      { skill: "CSS", icon: <SiCss /> },
      { skill: "Tailwind CSS", icon: <SiTailwindcss /> },
      { skill: "Shadcn", icon: <SiShadcnui /> },
      { skill: "Material UI", icon: <SiMui /> },
    ],
  },
  {
    name: "Testing",
    skills: [
      { skill: "JUnit", icon: <SiJunit5 /> },
      { skill: "Jest", icon: <SiJest /> },
      { skill: "React Testing Library", icon: <SiTestinglibrary /> },
    ],
  },
  {
    name: "Databases",
    skills: [
      { skill: "PostgreSQL", icon: <SiPostgresql /> },
      { skill: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { skill: "Docker", icon: <SiDocker /> },
      { skill: "Kubernetes", icon: <SiKubernetes /> },
      { skill: "Ansible", icon: <SiAnsible /> },
      { skill: "Linux", icon: <FaLinux /> },
      { skill: "GitHub Actions", icon: <SiGithubactions /> },
      { skill: "SonarQube", icon: <SiSonarqubeserver /> },
    ],
  },
  {
    name: "Misc",
    skills: [
      { skill: "Git", icon: <SiGit /> },
      { skill: "Jira", icon: <FaJira /> },
    ],
  },
];

function Skills({}, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref}>
      <SectionTitle>Some of my technical skills</SectionTitle>
      {skills.map((skillCategory) => {
        return (
          <div>
            <h2 className="text-xl my-8">{skillCategory.name}:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7">
              {skillCategory.skills.map(({ skill, icon }) => {
                return (
                  <div
                    key={skill}
                    className="flex flex-col items-center space-y-1"
                  >
                    <p className="text-center">{skill}</p>
                    {cloneElement(icon, { className: "h-10 w-10" })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default forwardRef(Skills);
