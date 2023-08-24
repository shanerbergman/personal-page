import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Social = () => {
  return (
    <ul
      className="ml-1 mt-32 flex items-center"
      aria-label="social media sites"
    >
      <li className="mr-5 text-xs">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/shanerbergman"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Github</span>
          <AiFillGithub className="h-8 w-8" />
        </a>
      </li>
      <li className="mr-5 text-xs">
        <a
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/shane-r-bergman/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Linkedin</span>
          <AiFillLinkedin className="h-8 w-8" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
