import React from "react";
import { useParams } from "react-router-dom";
import MainContentWindow, {
	ContentType,
} from "../Components/MainContentWindow";

export default function Server() {
	const { serverName } = useParams();

	return (
		<>
			<MainContentWindow
				contentType={ContentType.Server}
				serverName={serverName}
			/>
		</>
	);
}
