import React from "react";

export default function MessagesContent() {
	return (
		<>
			{/* Search Box */}
			<div className="p-4 flex justify-center items-center border border-transparent border-b-black"></div>

			{/* tabs/buttons */}
			<div className="flex flex-col gap-1 p-2">
				<div className="flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700">
					{/* friends icon */}
					<i className="fa-solid fa-user-group text-xl w-8 text-gray-300 flex justify-center items-center"></i>
					<h3 className="text-lg text-gray-300">Friends</h3>
				</div>

				<div className="flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700">
					{/* nitro icon */}
					<i className="fa-solid fa-bomb text-2xl w-8 text-gray-300 flex justify-center items-center"></i>
					<h3 className="text-lg text-gray-300">Nitro</h3>
				</div>
			</div>
			{/* tabs/buttons end */}

			{/* messages container */}
			<div className="flex-auto flex flex-col justify-start align-start gap-1 px-2 py-4">
				{/* messages heading */}
				<div className="flex justify-between items-center px-2 pb-1">
					<h5 className="text-xs font-semibold text-gray-300">
						DIRECT MESSAGES
					</h5>
					<i className="fa-solid fa-plus text-sm text-gray-300 cursor-pointer"></i>
				</div>

				{/* messages */}
				<div className="flex justify-start items-center gap-3 p-1 cursor-pointer rounded hover:bg-gray-600">
					<img
						src={
							process.env.PUBLIC_URL +
							"/icons/testMessageIcon1.svg"
						}
						alt="testMessageIcon1"
						width="38"
					/>
					<p className="text-md text-gray-200">Aztlan</p>
				</div>
				<div className="flex justify-start items-center gap-3 p-1 cursor-pointer rounded hover:bg-gray-600">
					<img
						src={
							process.env.PUBLIC_URL +
							"/icons/testMessageIcon2.svg"
						}
						alt="testMessageIcon2"
						width="38"
					/>
					<p className="text-md text-gray-200">PeterPicasso</p>
				</div>
			</div>
			{/* messages container end */}
		</>
	);
}
