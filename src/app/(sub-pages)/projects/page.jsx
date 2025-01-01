import Image from "next/image";
import bg from "../../../../public/background/bg-projects.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import { ProjectsModel } from "@/components/models/ProjectsModel";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />
      <ProjectList projects={projectsData} />

      <div className="fixed top-20 left-0 h-full p-32">
        <RenderModel>
          <ProjectsModel />
        </RenderModel>
      </div>
    </>
  );
}
