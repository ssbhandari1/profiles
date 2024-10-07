import CardComponent from "@/pages/card";
import Experience from "@/pages/experience";
import Experties from "@/pages/experties";
import Projects from "@/pages/projects";
import React from "react";

const Layout = () => {
	return (
		<div className="w-full md:w-[80%] flex flex-col gap-6">
			<div className="w-full h-full grid xl:grid-cols-3 gap-5">
				<div className="bg-slate-200 col-span-1 rounded-lg ">
					<CardComponent />
				</div>
				<div className="col-span-1 rounded-lg flex flex-col gap-5 ">
					<div className="w-full flex-1 rounded-lg bg-slate-200 ">
						<Experience />
					</div>
					<div className="w-full flex-1  rounded-lg bg-slate-200">
						<Experties />
					</div>
				</div>
				<div className="bg-slate-200 col-span-1 rounded-lg">
					<Projects />
				</div>
			</div>
		</div>
	);
};

export default Layout;
    