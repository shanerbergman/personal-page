import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const FunWithD3 = () => {
  return (
    <li className="mb-24">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href="https://d3.shanebergman.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span className="flex">
                Fun With D3
                <span>
                  <FiArrowUpRight className={`ml-2`} />
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            D3 can be used to visualize both Spatial and Non Spatial data. I
            have used D3 on various projects throughout my career and built this
            project to highlight some of the neat things you can do with the
            tool.
          </p>
        </div>
      </div>
    </li>
  );
};

export default FunWithD3;
