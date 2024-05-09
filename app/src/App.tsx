import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Home";

interface Server {
    name: string;
}

interface User {
    avatar: string;
    email: string;
    servers: Server[] | null;
}

//export const UserContext = React.createContext({} as User);

/*
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <main className="flex min-h-screen">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </UserContext.Provider>
        </BrowserRouter>
*/

export default function App() {
    //const [user, setUser] = useState({});

    return (
        <BrowserRouter>
            <main className="flex min-h-screen">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
