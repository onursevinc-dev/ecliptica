/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [{
        id: 1,
        name: "Fason-Tracker",
        description: "Track your Fason company footprint",
        date: "2024-11-01",
        demoLink: "https://fasontracker.example.com",
    },
    {
        id: 2,
        name: "Meta-Tracker",
        description: "Record your metal inspections in the garment factory",
        date: "2025-02-01",
        demoLink: "https://metatracker.example.com",
    },
    {
        id: 3,
        name: "Sinaps Dyehouse",
        description: "Keeps records of your surface control machine in the paint shop factory",
        date: "2023-07-01",
        demoLink: "https://sinapsdyehouse.example.com",
    },
    {
        id: 4,
        name: "Sinaps",
        description: "Keeps records for departments that work in integration with each other in the garment factory",
        date: "2021-06-01",
        demoLink: "https://sinaps.example.com",
    },
];

export const BtnList = [
    { label: "Home", link: "/", icon: "home", newTab: false },
    { label: "About", link: "/about", icon: "about", newTab: false },
    { label: "Projects", link: "/projects", icon: "projects", newTab: false },
    { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
        label: "Github",
        link: "https://www.github.com/onursevinc-dev",
        icon: "github",
        newTab: true,
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/onursevinc-dev",
        icon: "linkedin",
        newTab: true,
    },
    {
        label: "X",
        link: "https://www.x.com/onursevinc-dev",
        icon: "twitter",
        newTab: true,
    },
    {
        label: "Resume",
        link: "/resume.pdf",
        icon: "resume",
        newTab: true,
    },
];