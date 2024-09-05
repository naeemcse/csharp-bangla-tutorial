import React from "react";
import Navbar from "../navbar/Navbar";
import TopicsList from "../leftsidebar/TopicsList";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] */}
      <div className="grid grid-cols-12 mx-auto w-full md:max-w-[1280px]">
        <div className="col-span-12 md:col-span-3 bg-card m-[30px] mb-0 h-fit">
       <TopicsList />
        </div>
        <div className="col-span-12 md:col-span-9 lg:ml-[30px] m-[30px] text-justify">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
