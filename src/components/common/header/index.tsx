"use client";
import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import { BsChatSquareText } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import profile from "../../../assets/profile.jpg";

const routes = [
	{
		id: "home",
		route: "/",
		value: "Home",
		iconSrc: RiHome6Line,
	},
	{
		id: "about",
		route: "/about",
		value: "About",
		iconSrc: FaRegCircleUser,
	},
	{
		id: "projects",
		route: "/my_project",
		value: "Projects",
		iconSrc: VscGithubProject,
	},
	{
		id: "contact",
		route: "/contact",
		value: "Contact",
		iconSrc: BsChatSquareText,
	},
];
const Header = () => {
	const router = useRouter();
	const [bgCLR, setBgCLR] = useState("home");
	const handleNavigate = (type: string, id: string) => {
		router.push(type);
		setBgCLR(id);
	};
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="w-full md:w-[80%] h-[8vh] bg-slate-200 rounded-xl flex items-center p-2 justify-between">
			<div className="flex items-center gap-2">
				<div className="w-10 h-10">
					<Image
						src={profile}
						alt="profile"
						className="w-full h-full object-center rounded-full"
					/>{" "}
				</div>{" "}
				<span className="text-sm sm:text-xl font-bold text-blue-500">Santosh Singh</span>
			</div>
			<div className="hidden xl:flex items-center gap-7 mr-10 text-gray-600">
				{routes.map((route) => {
					const Icon = route.iconSrc;

					return (
						<span
							key={route.id}
							onClick={() => handleNavigate(route.route, route.id)}
							className={`flex items-center gap-2 cursor-pointer ${bgCLR === route.id ? "bg-slate-600 text-white" : ""
								} hover:bg-slate-800 hover:text-white p-2 rounded-md transition-colors duration-300`}
						>
							<Icon className="text-2xl" /> {route.value}
						</span>
					);
				})}
			</div>
			<GiHamburgerMenu
				className="text-[1.4rem] cursor-pointer xl:hidden"
				onClick={toggleSidebar}
			/>

			{isSidebarOpen && (
				<div className="fixed top-0 left-0 w-[250px] h-full bg-slate-800 text-white z-50 p-4 transition-transform duration-300">
					<div className="flex justify-between items-center mb-6">
					<div className="flex items-center gap-2">
				<div className="w-10 h-10">
					<Image
						src={profile}
						alt="profile"
						className="w-full h-full object-center rounded-full"
					/>{" "}
				</div>{" "}
				<span className="text-sm sm:text-xl font-bold text-blue-600">Santosh Singh</span>
			</div>
						<button
							onClick={toggleSidebar}
							className="text-white text-2xl focus:outline-none"
						>
							&times;
						</button>
					</div>
					<ul className="flex flex-col gap-4">
						{routes.map((route) => {
							const Icon = route.iconSrc;

							return (
								<li
									key={route.id}
									onClick={() => {
										handleNavigate(route.route, route.id);
										setSidebarOpen(false); // Close sidebar on item click
									}}
									className={`flex items-center gap-2 cursor-pointer ${bgCLR === route.id ? "bg-slate-600 text-white" : ""
										} hover:bg-slate-600 p-2 rounded-md transition-colors duration-300`}
								>
									<Icon className="text-2xl" /> {route.value}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Header;
