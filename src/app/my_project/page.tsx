import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import profile from "../../assets/profile.jpg";
import Image from 'next/image';
const Page = () => {
	const project = [
		{
			id: 1,
			name: 'React Project',
			language: 'ReactJS / NodeJs'
		},
		{
			id: 2,
			name: 'React Project',
			language: 'ReactJS / NodeJs'
		},
		{
			id: 3,
			name: 'React Project',
			language: 'ReactJS / NodeJs'
		},
		{
			id: 4,
			name: 'React Project',
			language: 'ReactJS / NodeJs'
		},
		{
			id: 5,
			name: 'React Project',
			language: 'ReactJS / NodeJs'
		},
		{
			id: 6,
			name: 'React Project',
			language: 'ReactJS / NodeJs'
		}
	]
	return (
		<div className="pr-6 pl-6 md:pr-20 md:pl-20 mb-10 pt-10 w-full h-full flex justify-center">
			<div className="w-full md:w-[80%] grid grid-cols-1 items-center xs:grid-cols-2 xl:grid-cols-3 gap-6">
				{
					project.map((project) => {
						return (
							<div key={project.id} className='w-full xl:w-[20vw] h-[40vh] bg-slate-200 rounded flex flex-col'>
								<div className='relative w-full h-[70%] bg-slate-800 rounded cursor-pointer group p-2'>
									<Image

										// width={240}
										src={profile}
										alt="Cover"
										className="w-full h-full rounded object-cover"
									/>
									<FaCirclePlus className='absolute text-4xl inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out text-white' />
								</div>

								<div className='flex-1 rounded p-3'>
									<h3 className='text-[1.2rem] font-semibold'>{project.name}</h3>
									<span className='text-xs '>{project.language}</span>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Page