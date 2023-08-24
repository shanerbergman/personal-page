"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "../../utils/useInView";
import { useInViewContext } from "../../context/inView";
import About from "./about";
import Experience from "./experience/experience";
import Projects from "./projects/projects";

const Main = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const { setInView } = useInViewContext();
  const observedElements = useInView([aboutRef, experienceRef, projectsRef]);

  useEffect(() => {
    setInView(observedElements);
  }, [observedElements]);
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <section
        ref={aboutRef}
        id="about"
        name="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <About />
      </section>
      <section
        ref={experienceRef}
        id="experience"
        name="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <Experience />
      </section>
      <section
        ref={projectsRef}
        id="projects"
        name="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <Projects />
      </section>
    </main>
  );
};

export default Main;
