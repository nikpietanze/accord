import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="w-20 bg-gray-900 flex flex-col justify-start items-center gap-2 p-3">
			{/* messages icon */}
			<Link to="/">
				<img
					className="cursor-pointer"
					src={process.env.PUBLIC_URL + "/icons/myIcon.svg"}
					alt="logo"
					width="80"
				/>
			</Link>

			<hr className="text-white" />

			{/* servers */}
			<div className="flex flex-col justify-start items-center gap-2">
				<Link to="test server 1">
					<img
						className="cursor-pointer"
						src={process.env.PUBLIC_URL + "/icons/testIcon1.svg"}
						alt="testIcon1"
						width="80"
					/>
				</Link>
				<Link to="test server 2">
					<img
						className="cursor-pointer"
						src={process.env.PUBLIC_URL + "/icons/testIcon2.svg"}
						alt="testIcon2"
						width="80"
					/>
				</Link>
				<Link to="test server 3">
					<img
						className="cursor-pointer"
						src={process.env.PUBLIC_URL + "/icons/testIcon3.svg"}
						alt="testIcon3"
						width="80"
					/>
				</Link>
				<Link to="test server 4">
					<img
						className="cursor-pointer"
						src={process.env.PUBLIC_URL + "/icons/testIcon4.svg"}
						alt="testIcon4"
						width="80"
					/>
				</Link>
				<Link to="test server 5">
					<img
						className="cursor-pointer"
						src={process.env.PUBLIC_URL + "/icons/testIcon5.svg"}
						alt="testIcon5"
						width="80"
					/>
				</Link>
			</div>

			{/* create server */}
			<div className="flex justify-center items-center rounded-full bg-gray-700 mt-2 cursor-pointer hover:bg-green-600 transition">
				<i className="fa-solid fa-plus w-14 h-14 flex justify-center items-center text-xl text-green-600 hover:text-white transition"></i>
			</div>

			{/* explore servers */}
			<div className="flex justify-center items-center rounded-full bg-gray-700 mt-2 cursor-pointer hover:bg-green-600 transition">
				<i className="fa-solid fa-compass w-14 h-14 flex justify-center items-center text-xl text-green-600 hover:text-white transition"></i>
			</div>
		</div>
	);
}
