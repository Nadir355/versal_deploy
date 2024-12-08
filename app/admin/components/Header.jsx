"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useAdmin } from "@/lib/firebase/admins/read"
import { Avatar } from "@nextui-org/react";
import { Menu } from "lucide-react"

export default function Headerss({ toggleSlider }) {
    const { user } = useAuth();
    const { data: admin } = useAdmin({ email: user?.email });
    return <section className=" fixed w-full  top-0 flex items-center bg-white border-b px-4 py-2">
        <div className="flex justify-center items-center gap-3 md:hidden">
            <button onClick={toggleSlider}>
                <Menu />
            </button>
        </div>
        <div className="w-full flex justify-between items-center pr-0 md:pr-[260px]">
            <h1 className="text-xl font-semibold ">
                Dashborad
            </h1>
            <div className="flex gap-2 items-center">
                <Avatar size="sm" src={admin?.imageURL} />
                <div className="md:flex flex-col hidden">
                    <h1 className="text-sm font-semibold">{admin?.name}</h1>
                    <h1 className="text-sm text-gray-600">{admin?.email}</h1>
                </div>
            </div>
        </div>
    </section>
}