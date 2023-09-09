import React from "react";
import MainContentWindow, {
	ContentType,
} from "../Components/MainContentWindow";

export default function Home() {
	return (
		<MainContentWindow
			contentType={ContentType.Messages}
			serverName={undefined}
		/>
	);
}
