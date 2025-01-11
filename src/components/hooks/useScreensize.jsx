"use client";

import { useEffect, useState } from "react";

const useScreensize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreensize() {
      return window.innerWidth;
    }

    function handleResize() {
      setScreenSize(getScreensize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};

export default useScreensize;
