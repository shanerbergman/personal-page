"use client";
import React from "react";

const ScrollLink = ({ link, name }) => {
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
  };

  return (
    <a href={`#${link}`} onClick={handleScroll}>
      {name}
    </a>
  );
};

export default ScrollLink;
