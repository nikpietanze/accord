import './globals.css'
import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import Navbar from './components/Navbar';

const playNormal = Play({
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: 'Accord',
    description: 'Chat and Social application for gaming and productivity',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={playNormal.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
};
