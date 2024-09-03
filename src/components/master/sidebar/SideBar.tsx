import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu,ChevronLeft  } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { navItems } from "@/assets/data/backBone";

const SideBar = () => {
    return (
        <div>
             <Drawer direction="left" >
            <DrawerTrigger asChild>
                <Button variant="outline" className=" font-bold text-lg text-card-foreground hover:bg-primary border-none"><Menu /></Button>
            </DrawerTrigger>
            <DrawerContent className="w-[250px] h-full">
            
                    <div className="ml-4 flex flex-col items-left space-x-4">
                        <div className="flex justify-between">
                            <Link href="/" className="text-foreground">
                                <Image className="ml-3 p-2 rounded-md" src={ "/logo.png"} width={50} height={50} loading='lazy' alt="Logo" title="সি শার্প"/>
                            </Link>
                            <DrawerClose asChild>
                                <Button variant="outline" className="font-bold text-lg text-card-foreground border-none p-2 mt-2">
                                    <ChevronLeft   />
                                </Button>
                            </DrawerClose>
                        </div>
                        {navItems.map((item) => {
                            return (
                                    <Link key={item.path} href={item.path}
                                          className={`p-2 text-secondary-foreground  hover:text-primary hover:bg-secondary no-underline rounded ease-in duration-200 transition-all `}
                                    >
                                        {item.name}
                                    </Link>

                            );
                        })}
                        {/* <ModeToggle/> */}
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>

            </DrawerContent>
        </Drawer>
        </div>
    );
};

export default SideBar;