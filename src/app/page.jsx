import Image from "next/image";
import bg from "../../public/background/bg-home.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { HomeModel } from "@/components/models/HomeModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-30"
      />
      <div className="w-full h-screen">
        {/** navigation and 3d model */}
        <Navigation />
        <RenderModel>
          {/* <RobotModel /> */}
          <HomeModel/>
        </RenderModel>
      </div>
    </main>
  );
}
