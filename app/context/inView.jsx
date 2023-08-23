"use client";

import { createContext, useContext, useState } from "react";

const InViewContext = createContext({});

export const InViewContextProvider = ({ children }) => {
  const [inView, setInView] = useState(false);

  return (
    <InViewContext.Provider value={{ inView, setInView }}>
      {children}
    </InViewContext.Provider>
  );
};

export const useInViewContext = () => useContext(InViewContext);
