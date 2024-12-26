import React from "react";
import { Image } from "@nextui-org/react";

const Experience = () => {
  const experiences = [
    {
      date: "2023/10 - present",
      company: "Misemind Pvt Ltd",
      position: "Frentend Web developer",
    },
    {
      date: "2023/03 - 2023/07",
      company: "Indian Robotic Solution",
      position: "Intern (Frentend Web developer)",
    },
    {
      date: "2022/11 - 2023/02",
      company: "Softmind Pvt Ltd",
      position: "Intern (Frentend Web developer)",
    },
  ];
  return (
    <div className="w-full h-full rounded flex flex-col p-1">
      <h6 className="text-xl font-bold p-3 bg-white rounded">
        Work Experience
      </h6>
      <div className="w-full flex-1 overflow-hidden">
        <div
          className="w-full h-full max-h-60 overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <ul className="list-none text-xs p-2">
            {experiences.map((experience, index) => (
              <li key={index} className="flex pb-3 pt-2  border-b-1 border-gray-300">
                <div className="w-1/3">
                  <p className="text-gray-500 text-xs">{experience.date}</p>
                </div>
                <div className="w-1/2">
                  <h4 className=" font-bold">{experience.company}</h4>
                  <p className=" text-gray-600 text-xs">
                    {experience.position}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
