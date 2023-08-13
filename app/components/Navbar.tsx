"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";

// Next.js Imports
import Image from "next/image";

// Images and Icons
import logo from "@/public/moonlamplogo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";
import Cart from "./Cart";
import WishList from "./Wishlist";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const cartStore = useCartStore();
  const wishlistStore = useWishlistStore();

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
              ? "top-12 py-10 w-full bg-primarybg left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <a href="/" onClick={() => setOpenMobileMenu(false)}>
              Shop
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpenMobileMenu(false)}>
              More Info
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setOpenMobileMenu(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpenMobileMenu(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4 items-center text-[#1b263b] ml-auto md:ml-0">
          <div onClick={() => cartStore.toggleCart()} className="cursor-pointer relative">
            <BsCart4 size={20} />
            {cartStore.cart.length > 0 && (
              <span className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute left-2 bottom-3 flex items-center justify-center">
                {cartStore.cart.length}
              </span>
            )}
          </div>
          <div onClick={() => wishlistStore.toggleWishList()} className="cursor-pointer">
            <BsFillBagHeartFill size={20} />
          </div>
        </div>

        <div className="md:hidden ml-4" onClick={handleMobileMenu}>
          {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
        </div>
      </div>
      {!cartStore.isOpen && <Cart />}
      {!wishlistStore.openWishlist && <WishList />}
    </nav>
  );
};

export default Navbar;
