import Image from "next/image";
import bg from "../../../../public/background/bg-projects.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const ProjectsModel = dynamic(
  () => import("@/components/models/ProjectsModel"),
  { ssr: false }
);

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 w-fit -z-10 h-screen">
        <RenderModel>
          <ProjectsModel />
        </RenderModel>
      </div>
    </>
  );
}
