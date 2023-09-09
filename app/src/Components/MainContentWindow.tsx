import React from "react";
import LeftContentPanel from "./LeftContentPanel";
import RightContentPanel from "./RightContentPanel";

export enum ContentType {
	Messages = "Messages",
	Server = "Server",
}

export interface Props {
	contentType: ContentType;
	serverName: string | undefined;
}

export default function MainContentWindow(props: Props) {
	return (
		<div className="flex-auto flex bg-gray-900">
			<LeftContentPanel />
			<RightContentPanel
				contentType={props.contentType}
				serverName={props.serverName}
			/>
		</div>
	);
}
