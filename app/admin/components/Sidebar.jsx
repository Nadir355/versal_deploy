"use client"

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { Layers2, LayoutDashboard, LibraryBig, LucideLogOut, ShieldCheck, Shirt, ShoppingBasket, ShoppingCart, Star, UserRound } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Sidebar() {
  const menuList = [

    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <ShoppingBasket className="h-4 w-4" />,

    },

    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 className="h-4 w-4" />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <Shirt className="h-4 w-4" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <UserRound className="h-4 w-4" />,
    },

    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-4 w-4" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-4 w-4" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldCheck className="h-4 w-4" />,
    },

  ]
  return (
    <section className=" sticky top-0 flex flex-col gap-1 bg-white border-r px-5 py-3 h-screen overflow-hidden w-[260px] z-[1000]">
      <div className="flex justify-center py-4">
        <Link href={ `/`}>
          <img className="h-10" src="/logo2.png" alt="Logo" />
        </Link>
      </div>
      <ul className=" flex-1 flex flex-col gap-2 h-full overflow-y-auto">
        {menuList?.map((item, key) => (
          <Tab item={item} key={key} />
        ))}
      </ul>
      <div className="flex justify-center py-4">
        <button
          onClick={async () => {
            try {
              await toast.promise(signOut(auth), {
                error: (e) => e?.message,
                loading: "Loading...",
                success: "Logged out successfully ",
              });
            } catch (error) {
              toast.error(error?.message);
            }
          }}
          className="flex gap-2 items-center px-3 py-1 hover:bg-indigo-100 rounded-xl justify-center w-full transition-all duration-400 ease-soft-spring"
        >
          <LucideLogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </section>
  );

}


function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;
  return (
    <Link href={item?.link}>
      <li className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300
                ${isSelected ? "bg-[#879fff] text-white" : "bg-white text-black"}
            `}>
        {item?.icon}{item?.name}
      </li>
    </Link>
  );
}