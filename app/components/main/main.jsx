"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "../../utils/useInView";
import { useInViewContext } from "../../context/inView";
import About from "./about";
import Experience from "./experience";
import LinkToResume from "./linkToResume";

const Main = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const { setInView } = useInViewContext();
  const observedElements = useInView([aboutRef, experienceRef]);

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
        <LinkToResume />
      </section>
    </main>
  );
};

export default Main;
