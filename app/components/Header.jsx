import { Heart, Search, ShieldCheck, ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link"
import LogoutButton from "./logoutButton";
import AuthContextProvider from "@/contexts/AuthContext";

export default function Header() {
    const menulist = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Contact",
            link: "/contact-us"
        },
        {
            name: "About",
            link: "/about-us"
        }
    ]
    return (
        <nav className="sticky top-0 md:py-1 z-50 bg-white bg-opacity-65 backdrop-blur-2xl  md:px-14 py-1 px-4 border-b flex items-center justify-between">
            <Link href={"/"}>
                <img className="h-4 md:h-5 rounded" src="/logo.png" alt="Logo" />
            </Link>
            <div className="hidden md:flex gap-2 items-center font-semiblod">
                {menulist?.map((item) => {
                    return (<Link href={item?.link}>
                        <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white">{item?.name}</button>
                    </Link>
                    );
                })}
            </div>
            <div className="flex  items-center gap-1">
                <Link href={`/search`}>
                    <button title="Search Product" className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-300">
                        <Search size={14} />
                    </button>
                </Link>
                <Link href={`/favorites`}>
                    <button title="My Favorite" className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-300">
                        <Heart size={14} />
                    </button>
                </Link>
                <Link href={`/cart`}>
                    <button title="My Cart" className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-300">
                        <ShoppingCart size={14} />
                    </button>
                </Link>
                <Link href={`/account`}>
                    <button title="My Account" className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-300">
                        <UserCircle2 size={14} />
                    </button>
                </Link>
                <Link href={`/dashboard`}>
                    <button title="Admin Pannel" className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-300">
                        <ShieldCheck size={14} />
                    </button>
                </Link>
                <AuthContextProvider>
                    <LogoutButton />
                </AuthContextProvider>
            </div>
        </nav>
    )
}