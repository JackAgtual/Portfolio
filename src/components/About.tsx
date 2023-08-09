function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center md:items-start space-y-4 mx-4">
        <h1 className="text-center text-5xl">
          Hello, my name is <span className="font-bold">Jack Agtual</span>
        </h1>
        <h2 className="text-center text-3xl font-light">I'm a software engineer</h2>
        <p className="text-center">
          This is a small bit about me, my skills, and the work I've done.
        </p>
      </div>
    </div>
  )
}

export default About
