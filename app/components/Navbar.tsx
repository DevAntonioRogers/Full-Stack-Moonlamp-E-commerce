"use client";

import { useState, useEffect } from "react";

// Next.js Imports
import Image from "next/image";

// Images and Icons
import logo from "@/public/moonlamplogo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="py-3">
      <div className="w-[89%] m-auto flex justify-between items-center  max-w-[1400px]">
        <Image src={logo} width={200} height={200} alt="moon lamp" />

        <ul
          className={`md:flex items-center gap-8 md:static absolute text-gray-600  ${
            openMobileMenu
              ? "top-12 py-4 w-full bg-[#FFAFCC] left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <a href="/" onClick={() => setOpenMobileMenu(false)}>
              Buy Now
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpenMobileMenu(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setOpenMobileMenu(false)}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpenMobileMenu(false)}>
              Tracking
            </a>
          </li>
        </ul>

        <div className="flex gap-4 items-center text-[#1b263b] ml-auto md:ml-0">
          <div>
            <BsCart4 size={20} />
          </div>
          <BsFillBagHeartFill size={20} />
        </div>

        <div className="md:hidden ml-4" onClick={handleMobileMenu}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
