import { Play } from 'next/font/google'
import Link from "next/link";
import Image from 'next/image';

const play = Play({
    subsets: ["latin"],
    weight: "400"
});
const playBold = Play({
    subsets: ["latin"],
    weight: "700"
});

export default function Navbar() {
    return (
        <nav className={playBold.className} >
            <div className="container mx-auto py-4 flex flex-nowrap">
                <Link href="/" className="flex justify-start items-center gap-1">
                    <Image
                        src="/logo.svg"
                        alt="Accord Logo"
                        width={45}
                        height={45}
                        priority
                    />
                    <h2 className="text-xl text-slate-400">ACCORD</h2>
                </Link>

                <div className="flex-auto flex justify-center items-center gap-8">
                    <Link href="/download">Download</Link>
                    <Link href="/nitro">Nitro</Link>
                    <Link href="/discover">Discover</Link>
                    <Link href="/safety">Safety</Link>
                    <Link href="/support">Support</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/careers">Careers</Link>
                </div>

                <div className="flex justify-center items-center" >
                    <Link href="/login" className={play.className + " px-4 py-2 rounded-full bg-white text-slate-500 shadow-md shadow-gray-50/40 transition ease-in-out hover:shadow-lg hover:shadow-white/40"}>Login</Link>
                </div>
            </div>
        </nav>
    )
}
