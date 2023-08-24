"use client";
import React from "react";
import NextDashboard from "./nextDashboard";
import MapboxCustomDraw from "./mapboxCustomDraw";
import FunWithD3 from "./funWithD3";

const Projects = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <NextDashboard />
          <MapboxCustomDraw />
          <FunWithD3 />
        </ul>
      </div>
    </>
  );
};

export default Projects;
