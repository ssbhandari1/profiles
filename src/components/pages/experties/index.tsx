import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import Link from 'next/link';
const expertAreas = [
	{
		name: "ReactJs",
		icon: <FaReact className="text-3xl text-sky-300" />,
		color: "bg-white border border-gray-300",
		link: "https://react.dev"
	},
	{
		name: "NextJs",
		icon: <RiNextjsFill className="text-3xl text-slate-800" />,
		color: "bg-white border border-gray-300",
		link: "https://nextjs.org/"
	},
	{
		name: "JavaScript",
		icon: <FaJsSquare className="text-3xl text-yellow-300" />,
		color: "bg-white border border-gray-300",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScrip"
	},
	{
		name: "Tailwind CSS",
		icon: <RiTailwindCssFill className="text-3xl text-cyan-400" />,
		color: "bg-white border border-gray-300",
		link: "https://tailwindcss.com"
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="text-3xl text-blue-600" />,
		color: "bg-white border border-gray-300",
		link: "https://www.typescriptlang.org"
	},	
	{
		name: "Redux",
		icon: <TbBrandRedux className="text-3xl text-green-500" />,
		color: "bg-white border border-gray-300",
		link: "https://redux.js.org"
	},
	{
		name: "Node.js",
		icon: <FaNodeJs className="text-3xl text-green-500" />,
		color: "bg-white border border-gray-300",
		link: "https://nodejs.org"
	},
	{
		name: "MongoDB",
		icon: <SiMongodb className="text-3xl text-green-600" />,
		color: "bg-white border border-gray-300",
		 link: "https://www.mongodb.com"
	},	
	{
		name: "HTML",
		icon: <FaHtml5 className="text-3xl text-cyan-400" />,
		color: "bg-white border border-gray-300",
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
	},
	{
		name: "MUI",
		icon: <SiMui className="text-3xl text-cyan-800" />,
		color: "bg-white border border-gray-300",
		link: "https://mui.com"
	},
	{
		name: "Git",
		icon: <FaGithub className="text-3xl text-slate-800" />,
		color: "bg-white border border-gray-300",
		 link: "https://git-scm.com/"
	}
];

const Experties = () => {
	return (
		<div className='w-full h-full rounded flex flex-col p-1'>
			<h6 className='text-xl font-bold p-3 bg-white rounded'>My Expert Area</h6>
			<div className='w-full flex-1 overflow-hidden'>
				<ul className="w-full h-full max-h-60 p-4 grid grid-cols-3 gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
					{expertAreas.map((expert, index) => (
						<li key={index} className={`${expert.color} h-20 rounded-md flex justify-center items-center cursor-pointer hover:border-blue-300`}>
							<Link href={expert?.link}  target="_blank">{expert.icon}</Link>
							
						</li>
					))}
				</ul>
			</div>
		</div>

	)
}

export default Experties