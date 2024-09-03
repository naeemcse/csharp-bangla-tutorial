import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <menu>
            <ul className="flex justify-between items-center">
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
                </li>
            </ul>
        </menu>
      </div>
    </div>
  );
};

export default Navbar;
