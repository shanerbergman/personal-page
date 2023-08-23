"use client";
import React from "react";
//import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const ScrollLink = ({ link, name }) => {
  const currentRoute = usePathname();

  console.log("name", name);
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    /*window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });*/

    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // router.push(`/#${targetId}`);
  };

  return (
    <a href={`#${link}`} onClick={handleScroll}>
      {name}
    </a>
  );
};

export default ScrollLink;
/*
 <Link
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={5000}
      duration={500}
      onSetActive={handleSetActive}
    >
      {name}
    </Link>

 <Link
      className="group flex items-center py-3 active"
      href={link}
      onClick={handleScroll}
    >
      {name}
    </Link>
    */
