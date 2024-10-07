import Image from 'next/image';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import profile from '../../assets/profile.jpg'
const Projects = () => {
	return (
		<div className='w-full h-full rounded flex flex-col p-1 gap-3'>
			<div className='w-full flex justify-between p-3 bg-white rounded'>
				<h3 className='text-xl font-semibold'>Recent Projects</h3>
				<button className='flex items-center gap-2 text-blue-500 cursor-pointer hover:text-red-500'>
					All Projects <FaArrowRightLong />
				</button>
			</div>
			<div className='w-full h-[60vh] xl:flex-1 xl:h-full flex flex-col gap-4 p-3'>
				<div className='relative flex-1 bg-slate-900 rounded-md group cursor-pointer overflow-hidden'>
					<Image
						src={profile}
						alt="Cover"
						layout="fill"
						objectFit="cover"
						className="rounded-md"
					/>
					<FaCirclePlus className='absolute text-4xl inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out text-white' />
				</div>
				<div className='relative flex-1 bg-slate-900 rounded-md group cursor-pointer overflow-hidden'>
					<Image
						src={profile}
						alt="Cover"
						layout="fill"
						objectFit="cover"
						className="rounded-md"
					/>
					<FaCirclePlus className='absolute text-4xl inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out text-white' />
				</div>
			</div>
		</div>

	)
}

export default Projects
