import { skills } from "../Constants";
import { LetterAnimation, Transition } from "../comps/Portal";

const Skills = () => {
  return (
    <Transition>
      <div className="contain">
        <div className="md:w-1/2">
          <h1>
            <LetterAnimation
              strArray={["M", "y", " ", "S", "k", "i", "l", "l", "s"]}
            />
          </h1>
          <p className="mt-5 text-justify">
            As a Front End Developer and a Programmer, usualy im building my
            Projects using multiple Technologies that lead the website to be a
            Complete website. although i'm not a Web Designer but i know
            aesthetic and i built everything under principles, exept when i use
            Black color above the normal.
          </p>
          <br />
          <h4>Here are technologies I'm working with :</h4>
          <ul className="mt-5 text-sm grid grid-cols-2 gap-y-3 max-w-80">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="before:content-['_#'] before:me-1 before:text-red-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Transition>
  );
};

export default Skills;
