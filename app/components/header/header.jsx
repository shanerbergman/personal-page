"use client";

import React from "react";
import ScrollLink from "./scrollLink";
import { useInViewContext } from "../../context/inView";
import Social from "./social";

const Header = () => {
  const { inView } = useInViewContext();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col  lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <ScrollLink link="/" name="Shane Bergman" />
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Lead Engineer at Corteva AgriScience
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build products for the web.
        </p>
      </div>
      <nav className="nav hidden lg:block">
        <ul className="mt-16 w-max">
          <li
            className={
              inView?.about?.isInView
                ? "font-bold text-teal-300 move-left header-link-active"
                : "header-link"
            }
          >
            <ScrollLink
              inView={inView?.about?.isInView}
              link="about"
              name="About"
            />
          </li>
          <li
            className={
              inView?.experience?.isInView && inView?.about?.isInView === false
                ? "font-bold text-teal-300 header-link-active"
                : "header-link"
            }
          >
            <ScrollLink link="experience" name="Experience" />
          </li>
          <li
            className={
              inView?.projects?.isInView &&
              inView?.experience?.isInView === false
                ? "font-bold text-teal-300 header-link-active"
                : "header-link"
            }
          >
            <ScrollLink link="projects" name="Projects" />
          </li>
        </ul>
      </nav>
      <Social />
    </header>
  );
};

export default Header;
