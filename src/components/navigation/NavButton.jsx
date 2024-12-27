import { GithubIcon, HomeIcon, LinkedinIcon, NotebookTextIcon, PaletteIcon, PhoneIcon, TwitterIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x}, ${y})` }}>
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center bg-background/20 border-blue-300 border-solid backdrop-blur-[6px]"
        aria-label={label}
        name={label}
      >
        <span className="relative w-14 h-14 p-4">{getIcon(icon)} </span>
      </Link>
    </div>
  );
};

export default NavButton;
