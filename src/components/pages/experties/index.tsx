import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Link from 'next/link';
const expertAreas = [
	{
		name: "React",
		icon: <FaReact className="text-3xl text-sky-300" />,
		color: "bg-white border border-gray-300",
		link: ""
	},
	{
		name: "Node.js",
		icon: <FaNodeJs className="text-3xl text-green-500" />,
		color: "bg-white border border-gray-300",
		link: ""
	},
	{
		name: "JavaScript",
		icon: <FaJsSquare className="text-3xl text-yellow-300" />,
		color: "bg-white border border-gray-300",
		link: ""
	},
	{
		name: "Tailwind CSS",
		icon: <RiTailwindCssFill className="text-3xl text-cyan-400" />,
		color: "bg-white border border-gray-300",
		link: ""
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="text-3xl text-blue-600" />,
		color: "bg-white border border-gray-300",
		link: ""
	},
	{
		name: "MongoDB",
		icon: <SiMongodb className="text-3xl text-green-600" />,
		color: "bg-white border border-gray-300",
		 link: ""
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
							<Link href={expert?.link}>{expert.icon}</Link>
							
						</li>
					))}
				</ul>
			</div>
		</div>

	)
}

export default Experties