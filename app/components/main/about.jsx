"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "../../utils/useInView";
import { useInViewContext } from "../../context/inView";

const About = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <p className="mb-4">
        I started off my career as a Geographic Information Systems Analyst. I
        have always had a knack for tinkering with code and began a journey that
        started with writing simple Python scripts to developing Full Stack Web
        Applications.With my background in GeoSpatial I tend to speacilize in
        developing powerful Maps on the web, but I can do much more. I am always
        learning and I love to build products for the Web.
      </p>
      <p>
        Today I work as the Lead Front End Engineer on an small team
        speacilizing in developing Mapping Applications that support vital
        agricultural research.
      </p>
    </>
  );
};

export default About;
