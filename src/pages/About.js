import React, { useEffect, useState } from "react";
import { LetterAnimation, Transition } from "../comps/Portal";
import { cubeFaces } from "../Constants";

const About = () => {
  const [letterClass, setLetterClass] = useState("LetterAnimation");

  return (
    <Transition>
      <div className="contain">
        <div className="md:w-1/2">
          <h1>
            <LetterAnimation
              strArray={["W", "h", "o", " ", "a", "m", " ", "I", "?"]}
            />
          </h1>
          <p className="mt-5 text-justify">
            I'm a Web Developer from somewhere in Iran. I'm interested in
            building websites from scratch for people around the world.
            <br />
            <br />
            In the beginning, I learned coding for building simple websites and
            terminal apps for automation my life and more for fun.
            <br />
            <br />
            After a few years, today I'm ready to build real great websites
            using popular languages and technologies for all the customers.
            <br />
            <br />
          </p>
        </div>

        <div className="cube md:flex items-center hidden w-1/2">
          <div className="cube-spinner">
            {cubeFaces.map((className, index) => (
              <div className={`face-${index + 1}`} key={index}>
                <i className={`fab ${className}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default About;
