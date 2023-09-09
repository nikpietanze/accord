import React from "react";
import { Props } from "../MainContentWindow";

export default function RightContentPanel(props: Props) {
	return (
		<div className="w-full flex flex-col items-center">
			<h1 className="text-5xl text-white my-4">
				Content Type: {props.contentType}
			</h1>
			<h2 className="text-4xl text-white">
				Server Name: {props.serverName}
			</h2>
		</div>
	);
}
