import Link from "next/link"

export default function Header(){
    const menulist=[
        {
            name:"Home",
            link :"/"
        },
        {
            name:"Contact us",
            link :"/about-us"
        },
        {
            name:"About us",
            link :"/contact-us"
        }
    ]
    return (
        <nav className="py-4 px-14 border-b flex items-center justify-between">
                <img className="h-20 rounded" src="/logo.png" alt="" />
                    <div className="flex gap-4 items-center font-semiblod">
                        {menulist?.map((item)=>{
                            return( <Link href={item?.link}>
                            <button>{item?.name}</button>
                            </Link>
                        );
                     })}
                    </div>
            <Link href={"/login"}>
             <button className="bg-blue-600 px-5 font-bold py-2 rounded-full text-white">Login</button>
            </Link>
        </nav>
    )
}