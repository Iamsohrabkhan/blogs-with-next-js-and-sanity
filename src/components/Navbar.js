"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Themebutton from "./themebutton";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = usePathname();
 
  return (
  
    <header className="dark:bg-[rgba(31,34,41,0.83)]  dark:shadow-sm backdrop-blur-sm fixed top-0 w-full z-50 bg-white/80 ">

  
  <nav className="w-full max-w-3xl mx-auto py-4 ">
    <div className="flex justify-between items-center ">
      <div className="item ">
        <ul className="flex items-center gap-5">
          <li><Link href="/" className={` text-base font-serif  ${active==="/"? "text-indigo-500" : "dark:text-white"}`}>Home</Link></li>
          <li><Link href={"/blogs" } className={` text-base font-serif  ${active==="/blogs" ? "text-indigo-500" : "dark:text-white"}`}>Blogs</Link></li>
        </ul>
      </div>
      <div className="mode">
      <Themebutton/>
      </div>      
    </div>
   
  </nav>
  </header>
  );
};
export default Navbar;
