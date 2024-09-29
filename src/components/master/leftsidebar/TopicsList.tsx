import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopicsList = () => {
  return (
    <div>
      <div className="hidden md:block">
        <List />
      </div>
      <div className="block md:hidden">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className=" font-bold text-lg text-card-foreground hover:bg-primary border-none"
            >
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-[250px] h-full">
            <DrawerClose asChild>
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="  text-card-foreground w-fit hover:text-primary border-none p-2 mt-2"
              >
                Close <ChevronLeft />
              </Button>
              </div>
            </DrawerClose>
            <List />
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default TopicsList;

const List = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="">
        <AccordionTrigger>  <Link href="/tutorial" >Tutorials </Link>  </AccordionTrigger>
        <AccordionContent>
            <ul className="list-none pl-4">
                <li>
                    <Link href="/docs">C#</Link>
                </li>
                <li>
                    <Link href="/docs">Asp.Net Core</Link>
                </li>
                <li>
                    <Link href="/tutorial/dotnet">.NET</Link>
                </li>
                <li>
                    <Link href="/tutorial/dotnet-core">.NET Core</Link>
                </li>
            </ul>
        </AccordionContent>
      </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger> Blogs </AccordionTrigger>
        <AccordionContent>
          c# blogs
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Resourse </AccordionTrigger>
        <AccordionContent className={"flex flex-col"}>
         <Link href={"https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview"} target="_blank" > Microsoft  </Link>
            <Link href={"https://www.tutorialspoint.com/csharp/index.htm"} target="_blank" > Tutorialspoint  </Link>
            <Link href={"https://www.w3schools.com/cs/index.php"} target="_blank" > W3School  </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
