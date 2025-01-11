"use client";

import React from "react";
import useScreensize from "./hooks/useScreensize";

const ResponsiveComponent = ({ children }) => {
  const size = useScreensize();
  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
