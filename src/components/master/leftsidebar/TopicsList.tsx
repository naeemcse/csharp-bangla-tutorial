import React from "react";
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
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
