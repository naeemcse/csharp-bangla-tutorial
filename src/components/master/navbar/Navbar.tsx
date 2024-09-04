import React from "react";
import Image from "next/image";
import Link from "next/link";
import  {Github}  from 'lucide-react';

import { navItems } from "@/assets/data/backBone";
import SideBar from "../sidebar/SideBar";
import { ModeToggle } from "../ModeToggle";
const Navbar = () => {
 
  return (
    <div className="border w-full h-16 ">
      <div className="flex max-w-screen-xl justify-between items-center mx-5 md:mx-[100px] mt-2">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={20} height={20} />
        </div>
        <menu className="hidden md:block">
        <ul className="list-none flex gap-4 ">
        {navItems.map((item) => {
            return (
                <li key={item.path}>
                    <Link href={item.path}
                        className={"text-secondary-foreground hover:text-primary ease-in duration-200 transition-all"}
                    >
                      {item.name}
                    </Link>

                </li>
            );
          })}
          </ul>
        </menu>
        <menu className="md:hidden">
<ul className="list-none flex gap-4 ">
{navItems.slice(0, 2).map((item) => {
  return (
    <li key={item.path}>
      <Link href={item.path}
        className={"text-secondary-foreground hover:text-primary ease-in duration-200 transition-all"}
      >
        {item.name}
      </Link>
    </li>
  );
})}

</ul>
        </menu>
        <div className="flex gap-2">
          <Link className="mt-2 hover:text-primary" href="/github">
          <Github />
          </Link> 
          <ModeToggle />
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
