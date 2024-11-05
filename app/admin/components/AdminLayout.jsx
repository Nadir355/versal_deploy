"use client"

import { useEffect, useRef, useState } from "react"; 
import Headerss from "./Header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";


export default function AdminLayout({children}){
    const [isOpen,setIsOpen]=useState(false);
    const pathname=usePathname();
    const sidebarRef =  useRef(null);
    const toggleSlider=()=>{
        setIsOpen(!isOpen);
    };

    useEffect(()=>{
        toggleSlider();
    },[pathname])
    
    useEffect(()=>{
        function handleClickOutsideEvent(event){
            if(sidebarRef.current && !sidebarRef?.current?.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutsideEvent);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutsideEvent);
        };
    },[])

    return (<main className=" relative flex">
        <div className="hidden md:block">
            <Sidebar/>
        </div>
        <div 
            ref={sidebarRef}
            className={`fixed md:hidden ease-in-out transition-all duration-400 z-50
            ${isOpen ? "translate-x-0" : "-translate-x-[260px]"}`}>
            <Sidebar/>
        </div>
        <section className="flex-1 flex flex-col min-h-screen overflow-hidden">
            <Headerss toggleSlider={toggleSlider}/>
            <section className="p-14 flex-1 bg-[#eff3f4]">
                {children}
            </section>

        </section>
        </main>);
}