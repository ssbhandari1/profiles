"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import theater from "../../assets/theater.png";
import Link from "next/link";
const Projects = () => {
  //https://mycinemas.netlify.app/

  const projects = [
    {
      id: "1",
      name: "Theater",
      img: theater,
      link: "https://mycinemas.netlify.app",
    },
    {
      id: "2",
      name: "Mandi",
      img: theater,
      link: "https://mycinemas.netlify.app",
    },
  ];

  const handleClick = (link:string) => {
    window.open(link);
  };
  return (
    <div className="w-full h-full rounded flex flex-col p-1 gap-3">
      <div className="w-full flex justify-between p-3 bg-white rounded">
        <h6 className="text-xl font-bold">Recent Projects</h6>
        <Link
          className="flex items-center gap-2 text-blue-500 cursor-pointer hover:text-red-500"
          href={"/my_project"}
        >
          {" "}
          All Projects <FaArrowRightLong />
        </Link>
      </div>
      <div className="w-full h-[60vh] xl:flex-1 xl:h-full flex flex-col gap-4 p-3">
        {projects?.map((project) => {
          return (
            <div key={project.id} className="relative flex-1 bg-slate-900 rounded-md group cursor-pointer overflow-hidden">
              <Image
                src={project.img}
                alt="Cover"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              {/* //https://vercel.com/ssbhandari1s-projects/profiles/Tpu5zmRqeQwiUxUPnDbCokZVd94M */}
              <FaCirclePlus
                onClick={() => handleClick(project?.link)}
                className="absolute text-4xl inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out text-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
