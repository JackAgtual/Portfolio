import { forwardRef, ForwardedRef } from "react";
import memoji from "../assets/memoji.png";

function About({}, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className="py-10 px-10 md:px-20 bg-gradient-to-b from-primary-bg to-secondary-bg w-screen"
    >
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-6xl font-medium pt-10 md:hidden">
          A bit about <span className="font-bold">me</span>
        </h1>
        <div className="md:flex flex-row-reverse">
          <div className=" flex-1">
            <img
              src={memoji}
              alt="memoji"
              className="aspect-square max-h-80 md:max-h-fit mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-5 max-w-screen-md mx-auto">
            <h1 className="text-6xl font-medium pb-10 hidden md:block">
              A bit about <span className="font-bold">me</span>
            </h1>
            <p>
              I am a{" "}
              <span className="font-bold">full stack software engineer</span>. I
              love building web applications that solve real world problems and
              making those applications accessible to everyone.
            </p>
            <p>
              I currently work as a full stack software engineer at Northrop
              Grumman. I design and maintain RESTful and SOAP APIs in Spring
              Boot. I also work with MongoDB and PostgreSQL for the persistence
              layer. For the frontend I work with Java Swing desktop
              applications and Java Server Pages web applications.
            </p>
            <p>
              I previously wokred as a Modeling and Simulation Systems Engineer.
              I wrote software in a language similar to C# or Java to create
              physics-based models of aircraft interactions. I was responsible
              for adding new features to the models, conducting code reviews,
              and briefing analysis packages to stakeholders.
            </p>
            <p>
              I graduated summa cum laude from San Diego State University with a
              bachelor's degree in mechanical engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);
