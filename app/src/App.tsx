import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Home";
import Server from "./Server";

interface Server {
	name: string;
}

interface User {
	avatar: string;
	email: string;
	servers: Server[] | null;
}
export const UserContext = React.createContext<User>({} as User);

export default function App() {
	const [user, setUser] = useState<User>({} as User);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ user: user, setUser: setUser }}>
				<main className="flex min-h-screen">
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:serverName" element={<Server />} />
					</Routes>
				</main>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
