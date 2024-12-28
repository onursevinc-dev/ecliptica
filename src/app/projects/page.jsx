import Image from "next/image";
import bg from "../../../public/background/projects-background.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-30"
      />
      <div className="w-full h-screen"></div>
    </main>
  );
}
