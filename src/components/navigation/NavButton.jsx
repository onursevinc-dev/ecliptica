"use client";
import {
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  NotebookTextIcon,
  PaletteIcon,
  PhoneIcon,
  TwitterIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <HomeIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <UserIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <PaletteIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <PhoneIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <GithubIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <LinkedinIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <TwitterIcon className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookTextIcon className="w-full h-auto" strokeWidth={1.5} />;
    default:
      break;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size > 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 group-hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left"
                      ? "right-full left-auto"
                      : "left-full right-auto"
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
