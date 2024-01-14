import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./nav.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "PlayMe Toolbox",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="w-screen h-lvh bg-slate-100">
            <body
                className={
                    inter.className +
                    "w-full h-full grid grid-cols-1 place-items-center bg-slate-100"
                }
            >
                <Nav />
                {children}
            </body>
        </html>
    );
}
