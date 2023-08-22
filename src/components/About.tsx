function About() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <h1 className="text-4xl font-medium text-center mb-6 lg:mb-0">About Me</h1>
      <div className="rounded-sm space-y-4 pl-4 lg:border-s-2">
        <p>
          I am a frontend-focused web developer. I love building web applications that
          solve real world problems and making those applications accessible to everyone.
          I am looking to pivot my career to the web development domain and continue
          honing my web development skills.
        </p>
        <p>
          I currently work as a systems engineer at Northrop Grumman. I write software in
          a language similar to C# or Java to create physics-based models of aircraft
          interactions. I'm responsible for adding new features to the models, conducting
          code reviews, and briefing analysis packages to stakeholders.
        </p>
        <p>
          I graduated summa cum laude from San Diego State University with a bachelor's
          degree in mechanical engineering.
        </p>
      </div>
    </div>
  )
}

export default About
