import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const NextDashboard = () => {
  return (
    <li className="mb-24">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href="https://nextjs.dashboard.shanebergman.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span className="flex">
                NextJS Dashboard
                <span>
                  <FiArrowUpRight className={`ml-2`} />
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            Dashboard built with NextJS and Tailwind CSS. I built this to gain
            experience with NextJS. Planning to update the Dashboard data to be
            dynamic by adding a editable PRISMA database.
          </p>
        </div>
      </div>
    </li>
  );
};

export default NextDashboard;
