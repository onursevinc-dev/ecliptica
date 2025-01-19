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
            Architect of Software
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            <p>Hello,</p>
            <p>
              I am Onur Sevinç, an experienced software developer with over 4
              years in the field. I have contributed to various projects in the
              software and electrical electronic domains, achieving success in
              the technology sector. Computer usage and software development are
              not just my hobbies; they are my passions. I thrive on identifying
              and solving problems across all aspects of life.
            </p>
            <p>
              My aptitude for teamwork and analytical thinking enables me to
              deliver effective solutions to complex projects and challenging
              problems. I am constantly eager to learn and improve myself. In
              this era of rapid technological advancement, staying updated with
              innovations and integrating them into my projects is a key driver
              of my motivation.
            </p>
            <p>
              I am enthusiastic about the opportunity to enhance my skills and
              contribute to your company's goals. I look forward to the
              possibility of working together.
            </p>
            <p>Best regards,</p>
            <p>Onur Sevinç.</p>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">projects</sub>
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
            src="https://skillicons.dev/icons?i=anaconda,androidstudio,arch,arduino,aws,bash,bootstrap,bun,cpp,cassandra,cloudflare,cmake,codepen,css,debian,discord,django,docker,dynamodb,eclipse,elasticsearch,electron,express,fastapi,figma,firebase,flask,flutter,git,github,gmail,go,gradle,godot,grafana,graphql,heroku,hibernate,html,htmx,idea,ai,instagram,java,js,jquery,kafka,kali,kotlin,kubernetes,laravel,linkedin,linux,materialui,maven,mint,mongodb,mysql,nestjs,nextjs,nginx,nodejs,npm,nuxtjs,opencv,php,phpstorm,pinia,planetscale,pnpm,postgres,postman,powershell,prisma,pug,pycharm,py,pytorch,qt,r,rabbitmq,rails,raspberrypi,react,redis,redux,regex,ruby,rust,sass,spring,sqlite,stackoverflow,sublime,supabase,sklearn,selenium,sequelize,svg,tailwind,tensorflow,threejs,twitter,ts,ubuntu,unity,unreal,vercel,vim,visualstudio,vite,vscode,vue,vuetify,webpack,webstorm,windows,wordpress,xd,yarn"
            alt="OnurSevinc-SkillIcons"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
