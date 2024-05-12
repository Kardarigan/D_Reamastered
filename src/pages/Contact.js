import { useEffect, useState } from "react";
import { Letter } from "../comps/Portal";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("LetterAnimation");
  const title = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("LetterAnimation-hover");
    }, 6000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="contain">
      <div className="max-w-[800px]">
        <h1>
          <Letter letterClass={letterClass} strArray={title} idx={11} />
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
          libero? Similique velit libero quis id suscipit cumque, quisquam
          necessitatibus, adipisci dicta, optio iusto quia officiis odit
          architecto dolor itaque aspernatur!
        </p>
        <div className="form my-8">
          <form>
            <ul className="grid grid-cols-4 gap-2">
              <li className="md:col-span-1 col-span-4">
                <input
                  type="text"
                  name="name"
                  className="field"
                  placeholder="Names..."
                  required
                />
              </li>
              <li className="md:col-span-3 col-span-4">
                <input
                  type="email"
                  name="email"
                  className="field"
                  placeholder="Email..."
                  required
                />
              </li>
              <li className="col-span-4">
                <input
                  type="text"
                  name="subject"
                  className="field"
                  placeholder="Subject..."
                  required
                />
              </li>
              <li className="col-span-4">
                <textarea
                  name="message"
                  className="field"
                  placeholder="Message Content..."
                ></textarea>
              </li>
            </ul>
            <input type="submit" className="button mt-2" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
