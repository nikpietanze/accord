import React from "react";
import MessagesContent from "./MessagesContent";
import UserStatus from "./UserStatus";

export default function LeftContentPanel() {
	return (
		<div className="rounded-tl-lg w-60 bg-gray-800 flex flex-col">
			<MessagesContent />
			<UserStatus />
		</div>
	);
}
