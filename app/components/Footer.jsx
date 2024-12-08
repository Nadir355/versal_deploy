import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-3 w-full bg-blue-100 border-t p-5 md:p-10">
            <div className="border-b w-full flex justify-between flex-col md:flex-row gap-3">
                <img className="md:h-8" src="/logo2.png" alt="Logo" />
                <div className="flex-1 flex flex-col md:flex-row justify-end gap-4">
                    <div className="flex gap-2 itemms-center">
                        <Phone size={12} className="text-blue-500" />
                        <h2 className="text-sm text-gray-600">+92 3*********</h2>
                    </div>
                    <div className="flex gap-2 itemms-center">
                        <Mail size={12} className="text-blue-500" />
                        <h2 className="text-sm text-gray-600">example@gmail.com</h2>
                    </div>
                    <div className="flex gap-2 itemms-center">
                        <MapPin size={12} className="text-blue-500" />
                        <h2 className="text-sm text-gray-600">Dadu</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-center w-full">
                <h3 className="text-sm  text-gray-700 ">
                    © 2024 . All rights resvered by [ Comrade]
                </h3>
            </div>
        </footer>
    )
}