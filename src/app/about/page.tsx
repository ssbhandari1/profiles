import React from "react";

const About = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML",
        "State Management: Redux",
        "Form Handling: React JSON Form Schema",
        "Formik",
      ],
    },
    {
      category: "Styling",
      skills: ["CSS", "Sass", "Tailwind CSS", "Material-UI (MUI)", "NextUI"],
    },
    {
      category: "Testing",
      skills: ["Unit Testing: Jest", "End-to-End Testing: Puppeteer"],
    },
    {
      category: "Backend Development",
      skills: ["Basic Knowledge: Node.js", "Express.js", "Database: MongoDB"],
    },
    {
      category: "DevOps & CI/CD Tools",
      skills: [
        "Jenkins (CI/CD pipeline for builds)",
        "SonarQube (Code quality and coverage analysis)",
      ],
    },
    {
      category: "Project Management Tools",
      skills: ["Jira (Agile sprints and task management)"],
    },
    {
      category: "Version Control",
      skills: ["Git"],
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows"],
    },
  ];

  return (
    <div className="text-xs pr-6 pl-6 md:pr-20 md:pl-20 mb-10 pt-10 w-full h-full flex justify-center">
      <div className="w-full md:w-[60%] gap-6 rounded bg-gray-100">
        <div className="p-3">
          <h1 className="text-sm sm:text-xl font-bold">About Us</h1>
          <p className="text-sm mt-4 text-gray-600">
            I am a skilled Frontend Web developer with expertise JavaScript,
            React, Node.js, and . I am a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let us work together to
            bring your ideas to life!
          </p>
        </div>

        <div className="pt-4 ">
          <div className="p-3 ">
            <h6 className="text-xl font-bold mb-6">Technical Skills</h6>
            <div className="grid gap-6 ">
              {technicalSkills.map((item, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                  <h2 className="text-md font-semibold mb-4 text-blue-500">
                    {item.category}
                  </h2>
                  <ul className="list-disc list-inside space-y-2">
                    {item.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-700">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
