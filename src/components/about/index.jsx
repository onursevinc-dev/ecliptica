"use client";
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab harum
            voluptatibus, facilis cumque dolorem tempora assumenda ipsa atque!
            Obcaecati, aliquid repudiandae! Ab deleniti at autem provident a
            impedit cum aut commodi recusandae neque est accusamus perferendis
            ut molestiae rem necessitatibus, quis, voluptatibus accusantium!
            Minima, eligendi odio, atque ut vel adipisci porro sint repellendus
            aliquid doloremque rerum odit magnam. Quos accusantium consectetur
            ratione, officia iure exercitationem architecto ut aliquam, expedita
            cum inventore odit commodi iusto nostrum ex. Vitae ea voluptatum
            deserunt nam quisquam consequatur voluptatibus natus blanditiis vero
            nisi esse, exercitationem excepturi nesciunt ut assumenda velit,
            eligendi molestiae sint delectus quo.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+<sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=onursevinc-dev&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="OnurSevinc"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=onursevinc-dev&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="OnurSevinc"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full !p-0"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,was"
            alt="OnurSevinc-SkillIcons"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
