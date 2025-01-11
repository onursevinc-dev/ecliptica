import Image from "next/image";
import bg from "../../../../public/background/bg-contact.jpg";
import RenderModel from "@/components/RenderModel";
import { AboutModel } from "@/components/models/AboutModel";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />

      {/* <div className="w-full h-screen absolute top-1/4 -translate-y-1/2  left-0">
        <RenderModel>
          <AboutModel />
        </RenderModel>
      </div> */}

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            architecto, repellat enim assumenda possimus dolorem atque quasi
            culpa veniam saepe asperiores minus error voluptatem! Dignissimos
            autem unde facilis architecto possimus vitae in impedit iure,
            distinctio deleniti illo reiciendis, quo mollitia laboriosam maiores
            excepturi iste debitis reprehenderit ea ipsam! Accusantium maiores
            laboriosam dolorem. Pariatur atque eum laborum quas. Voluptatem vero
            ab nostrum voluptas illum, accusantium quisquam! Velit mollitia
            eius, reprehenderit cum totam explicabo alias repudiandae suscipit,
            voluptate eos atque laboriosam tempora possimus praesentium iure.
            Dolorum aliquid excepturi odio repellendus, labore, assumenda
            voluptates tempore, quo expedita voluptatum perspiciatis! Nihil vel
            nesciunt explicabo.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
