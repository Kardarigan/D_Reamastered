import { LetterAnimation, Transition } from "../comps/Portal";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const title = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_auob6ff", "template_h64zus6", form.current, {
        publicKey: "7g-CYayFlK8AuXyt9",
      })
      .then(
        () => {
          setMessage("Your Message Sent");
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        },
        (error) => {
          setMessage("Something is Wrong here");
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        }
      );
  };
  return (
    <Transition>
      <div className="contain">
        <div className="max-w-[800px]">
          <h1>
            <LetterAnimation strArray={title} />
          </h1>
          <p>
            Here is a Form to get in tuch with me. also if you don't like this
            kind of thing, just like old time{" "}
            <a
              href="mailto:duckduckstay@hotmail.com"
              className="underline hover:decoration-2"
            >
              send me an Email
            </a>{" "}
            :)
          </p>
          <div className="form my-8">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="grid grid-cols-4 gap-3">
                <li className="md:col-span-1 col-span-4">
                  <input
                    type="text"
                    name="sender_name"
                    className="field"
                    placeholder="Names..."
                    required
                  />
                </li>
                <li className="md:col-span-3 col-span-4">
                  <input
                    type="email"
                    name="source_email"
                    className="field"
                    placeholder="Email..."
                    required
                  />
                </li>
                <li className="col-span-4">
                  <input
                    type="text"
                    name="message_subject"
                    className="field"
                    placeholder="Subject..."
                    required
                  />
                </li>
                <li className="col-span-4">
                  <textarea
                    name="message_content"
                    className="field h-24"
                    placeholder="Message Content..."
                    required
                  ></textarea>
                </li>
              </ul>
              <input type="submit" className="button mt-3" value="Send" />
            </form>
          </div>
        </div>
        {message && (
          <p
            className={`fixed bottom-[1vw] right-[1vh] px-5 py-3 rounded transition-all bg-slate-100 text-slate-900 font-bold ${
              message ? "right-[1vw]" : "right-[-100%]"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </Transition>
  );
};

export default Contact;
