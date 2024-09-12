"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isOpen, onClose }: any) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[300px] bg-[#130F0C] opacity-80 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-start ml-12 p-4 mt-7">
        <button onClick={onClose} className="text-white">
          <span className="text-4xl">&times;</span>
        </button>
      </div>
      <Link href="/">
        <Image
          alt="header-name"
          src="/assets/header/header-name.png"
          width={330}
          height={221}
        />
      </Link>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link
              href="/home"
              className="block py-2 text-[22px] hover:text-[#D29A5A]"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 text-[22px] hover:text-[#D29A5A]"
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 text-[22px] hover:text-[#D29A5A]"
            >
              MEET CHEF MATT
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 text-[22px] hover:text-[#D29A5A]"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 text-[22px] hover:text-[#D29A5A]"
            >
              CONNECT WITH US
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-16 left-4 flex gap-4">
        <p className="text-sm">TEXT SUPPORT 24/7</p>
        <p className="text-[#D29A5A]">070-7782-9137</p>
      </div>
      <div className="absolute bottom-14 border-b-2 border-white w-full"></div>
      <div className="absolute bottom-4 right-4 flex justify-between pl-10 pr-4 w-full items-center">
        <div>
          <button className="text-white flex items-center gap-1">
            <Image
              alt="cart"
              src="/assets/header/CART.png"
              width={29}
              height={29}
            />
            CART
          </button>
        </div>
        <div>
          <button className="text-white flex items-center gap-1">
            <Image
              alt="wishlist"
              src="/assets/header/WISHLIST.png"
              width={29}
              height={29}
            />
            WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`bg-[#130F0C] opacity-80 w-[150px] h-screen absolute left-0 top-0 z-40 border-r-8 border-[#D29A5A] flex flex-col items-center justify-between ${
          isSidebarOpen ? "hidden" : "flex"
        }`}
      >
        <div className="mt-12 cursor-pointer" onClick={toggleSidebar}>
          <Image
            alt="menu"
            src="/assets/header/hamberger.png"
            width={30}
            height={20}
          />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <Image
            alt="name"
            src="/assets/header/name.png"
            width={447}
            height={299}
          />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
