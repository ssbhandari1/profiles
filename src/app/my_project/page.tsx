'use client'
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import Image from "next/image";
import theater from "../../assets/theater.png";
const Page = () => {
  const project = [
    {
      id: 1,
      name: "Theater",
      language: "NextJS, ReactJS, Typescript, Tailwind",
      img: theater,
      link: "https://mycinemas.netlify.app",
      discription:"Theater is a modern web application built with Next.js, React, TypeScript, and Tailwind CSS to display comprehensive movie information. It uses the TMDB API to fetch real-time data about popular, top-rated, upcoming, and now-playing movies. Users can explore movie details such as cast, synopsis, ratings, and genres, along with a dedicated section for the latest releases. The app features  user-friendly interface."
    },
    {
      id: 2,
      name: "Theater",
      language: "NextJS, ReactJS, Typescript, Tailwind",
      img: theater,
      link: "https://mycinemas.netlify.app",
      discription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatum perspiciatis pariatur? Vel magni maxime doloremque nesciunt dicta repellat quibusdam sequi voluptate eos perferendis. Dignissimos!",
    },
  ];

  const handleClick = (link: string) => {
    window.open(link);
  };
 
  
  return (
    <div className="pr-6 pl-6 md:pr-20 md:pl-20 mb-10 pt-10 w-full  flex justify-center">
      <div className="w-full md:w-[80%] grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-6">
        {project.map((project) => {
          return (
            <div
              key={project.id}
              className="w-full xl:w-[20vw]  bg-slate-200 rounded flex flex-col gap-3"
            >
              <div className="relative w-full h-[30vh] bg-slate-800 rounded cursor-pointer group p-2">
                <Image
                  src={project.img}
                  alt="Cover"
                  className="w-full h-full rounded object-cover"
                />
                <FaCirclePlus
                  onClick={() => handleClick(project?.link)}
                  className="absolute text-4xl inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out text-white"
                />
              </div>

              <div className="hide-scroll flex-1 rounded p-3 max-h-[200px] overflow-y-auto">
                <h3 className="text-[1.2rem] font-semibold mt-2 text-blue-500">
                  {project.name}
                </h3>
                <p className="text-[0.7rem] mt-4">{project.language}</p>
                <p className="text-xs mt-2 text-gray-500">{project.discription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
