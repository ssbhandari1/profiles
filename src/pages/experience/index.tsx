import React from 'react'
import { Image } from "@nextui-org/react";

const Experience = () => {
	const experiences = [
		{
			date: "2021-2024",
			company: "Adobe",
			position: "Senior UI UX Designer",
			iconSrc: "/assets/img/icons/adobe.svg",
		},
		{
			date: "2019-2021",
			company: "Google Inc.",
			position: "Senior Product Designer",
			iconSrc: "/assets/img/icons/google.svg",
		},
		{
			date: "2018-2019",
			company: "Meta Inc.",
			position: "Product Designer",
			iconSrc: "/assets/img/icons/meta.svg",
		},
		{
			date: "2017-2018",
			company: "Adobe",
			position: "Senior UI UX Designer",
			iconSrc: "/assets/img/icons/adobe.svg",
		},
		{
			date: "2018-2019",
			company: "Meta Inc.",
			position: "Product Designer",
			iconSrc: "/assets/img/icons/meta.svg",
		},
		{
			date: "2017-2018",
			company: "Adobe",
			position: "Senior UI UX Designer",
			iconSrc: "/assets/img/icons/adobe.svg",
		},
		{
			date: "2018-2019",
			company: "Meta Inc.",
			position: "Product Designer",
			iconSrc: "/assets/img/icons/meta.svg",
		},
		{
			date: "2017-2018",
			company: "Adobe",
			position: "Senior UI UX Designer",
			iconSrc: "/assets/img/icons/adobe.svg",
		},
	];
	return (
		<div className='w-full h-full rounded flex flex-col p-1'>
			<h3 className='text-xl font-semibold p-3 bg-white rounded'>Work Experience</h3>
			<div className='w-full flex-1 overflow-hidden'>
				<div className="w-full h-full max-h-60 overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
					<ul className="list-none text-sm p-2">
						{experiences.map((experience, index) => (
							<li key={index} className="mb-2 flex">
								<div className="date mr-6">
									<p className="text-gray-500">{experience.date}</p>
								</div>
								<div className="info flex items-center">
									<div className="icon mr-4">
										<Image
											src={experience.iconSrc}
											alt={experience.company}
											width={40}
											height={40}
											className="object-contain"
										/>
									</div>
									<div className="text">
										<h4 className="title text-lg font-bold">{experience.company}</h4>
										<h6 className="subtitle text-gray-600">{experience.position}</h6>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>


	)
}

export default Experience
