"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setListener = () => {
    var pos = document.documentElement;
    pos.addEventListener(`mousemove`, (e) => {
      setX(`${e.clientX}px`);
      setY(`${e.clientY}px`);
    });
  };

  useEffect(() => {
    setListener();
  }, []);

  return (
    <main>
      <div
        className="hidden lg:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `radial-gradient(
           circle at ${x}  ${y},
           transparent 20%,
           rgba(0, 0, 0, 0.25) 30%
         )`,
        }}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </main>
  );
}
