"use client"

import AuthContextProvider, { useAuth } from "@/contexts/AuthContext";
import { CircularProgress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminLayout from "./components/AdminLayout";

export default function Layout({children}){
    return(
        <AuthContextProvider>
            <AdminChecking>{children}

            </AdminChecking>
        </AuthContextProvider>
    );
}

function AdminChecking({children}){
    const { user , isloading } = useAuth();
    const router =useRouter();

    useEffect(()=>{
        if(!user && !isloading){
            router.push("/login")
        }
    },[user,isloading]);
    if (isloading) {
        return(
            <div className="h-screen w-screen flex justify-center items-center">
                <CircularProgress/>
            </div>
        );
    }
    if(!user){
        return(
            <div className="h-screen w-screen flex justify-center items-center">
               <h1>Please Login First</h1>
            </div>
        );
    }

    return <AdminLayout>{children}</AdminLayout>;
}