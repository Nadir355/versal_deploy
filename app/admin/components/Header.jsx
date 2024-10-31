"use client"

import { Menu } from "lucide-react"

export default  function Headerss({toggleSlider}){
    return <section className="flex items-center bg-white border-b px-4 py-4">
        <div className="flex justify-center items-center gap-3 md:hidden">
            <button onClick={toggleSlider}>
                <Menu />
            </button>
        </div>
        <h1 className="text-xl font-semibold ">
            Dashborad
        </h1>
    </section>
}