import React from "react";

export default function UserStatus() {
	return (
		<div className="flex justify-start items-center gap-2 p-2 bg-gray-900">
			<img
				src={process.env.PUBLIC_URL + "/icons/myIcon.svg"}
				alt="myIcon"
				width="38"
			/>

			<div className="flex-auto flex flex-col">
				<h4 className="text-sm text-white font-semibold">Kinnoli</h4>
				<p className="text-xs text-white font-thin">Online</p>
			</div>

			<div className="flex justify-between items-center gap-1">
				<div className="flex justify-center items-center w-8 h-8 bg-transparent rounded cursor-pointer hover:bg-gray-700">
					<i className="fa-solid fa-microphone text-lg text-gray-300"></i>
				</div>
				<div className="flex justify-center items-center w-8 h-8 bg-transparent rounded cursor-pointer hover:bg-gray-700">
					<i className="fa-solid fa-headphones text-lg text-gray-300"></i>
				</div>
				<div className="flex justify-center items-center w-8 h-8 bg-transparent rounded cursor-pointer hover:bg-gray-700">
					<i className="fa-solid fa-gear text-lg text-gray-300"></i>
				</div>
			</div>
		</div>
	);
}
