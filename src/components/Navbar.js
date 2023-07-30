"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Themebutton from "./themebutton";
const Navbar = () => {
  const active = usePathname();

  return (
    <>
      <header className="dark:bg-dark/80  shadow-sm backdrop-blur-sm fixed top-0 w-full z-50 bg-white/80 ">
        <nav className="w-full max-w-3xl mx-auto py-4 ">
          <div className="flex justify-between items-center px-16 md:px-10 lg:px-0">
            <div className="item ">
              <ul className="flex items-center gap-5">
                <li>
                  <Link
                    href="/"
                    className={` text-base font-serif  ${
                      active === "/" ? "text-indigo-500" : "dark:text-white"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/blogs"}
                    className={` text-base font-serif  ${
                      active === "/blogs"
                        ? "text-indigo-500"
                        : "dark:text-white"
                    }`}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mode">
              <Themebutton />
            </div>
          </div>
        </nav>
        <div className="container max-w-md sm:max-w-xl md:max-w-2xl customb:max-w-4xl lg:max-w-6xl mx-auto ">
          <hr />
        </div>
      </header>
    </>
  );
};
export default Navbar;
