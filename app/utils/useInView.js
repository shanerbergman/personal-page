import React, { useState, useEffect } from "react";

export function useInView(refs) {
  const [elements, setElements] = useState({});

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const name = entry.target.getAttribute("name");
        if (!name) {
          console.warn(
            "Encountered entry with no name. You should add name to every element passed to the isInView hook."
          );
        } else {
          if (entry.isIntersecting) {
            setElements((prev) => {
              return {
                ...prev,
                [name]: {
                  isInView: true,
                },
              };
            });
          } else {
            setElements((prev) => ({
              ...prev,
              [name]: {
                isInView: false,
              },
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return elements;
}
