import { Facebook, Flag, Instagram, Send, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
    {
        icon: <Instagram />,
        href: "#instagram",
    },
    {
        icon: <Facebook />,
        href: "#facebook",
    },
    {
        icon: <Twitter />,
        href: "#twitter",
    },
]

export default function Footer() {

    return (
        <footer className="p-20 border-t border-gray-200 bg-gray-200">
            <div className="grid grid-cols-2 justify center items-center">
                <ul className="flex flex-col">
                    <li>
                        <Link href="#contact" className="hover:font-bold ease-in-out flex">
                            <Send/>
                            <span className="ml-1">Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:font-bold ease-in-out flex">
                            <Flag className="text-red-600" />
                            <span className="ml-1">Report an issue</span>
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-row space-x-4">
                    <li>
                        <Instagram className="hover:text-blue-900 ease-in-out"/>
                    </li>
                    <li>
                        <Facebook className="hover:text-blue-900 ease-in-out"/>
                    </li>
                    <li>
                        <Twitter className="hover:text-blue-900 ease-in-out"/>
                    </li>
                </ul>
            </div>
            <div>
                <p>&copy; Jacob Cuison 2023</p>
            </div>
        </footer>
    )
}