function About() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <h1 className="text-4xl font-medium text-center mb-6 lg:mb-0">About Me</h1>
      <div className="rounded-sm space-y-4 pl-4 lg:border-s-2">
        <p>
          This is a longer description about me. It'll talk about how I have been working
          as a systems engineer for the past ~2 years and how that work relates to web
          development.
        </p>
        <p>
          I'll also talk about how I have an engineering degree and how it helps me: think
          critically using first principles, technical learning, technical communication
        </p>
      </div>
    </div>
  )
}

export default About
