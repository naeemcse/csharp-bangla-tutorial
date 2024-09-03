import React from "react";
import Navbar from "../navbar/Navbar";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="grid grid-cols-12 mx-auto w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <div className="col-span-12 lg:col-span-3 bg-card border rounded-lg mt-[30px] h-fit">
          {/*<SideBar />*/} a ba c
          {/*<Container> <div className="min-h-full">abc </div>  </Container>*/}
        </div>
        <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
