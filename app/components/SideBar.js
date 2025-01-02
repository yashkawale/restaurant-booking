"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div
      className={`fixed backdrop-blur-sm h-full border-r-[1px] border-gray-500 ${
        isSideBarOpen ? "w-48" : "w-14"
      } lg:w-48`}
    >
      <div className="pl-4 mt-3 lg:hidden">
        <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
          <Menu size={22} className="text-gray-500" />
        </button>
      </div>

      <div className="hidden lg:block pl-4 mt-4 text-2xl text-gray-500 text-shadow-lg">
        <p>
          Restro Table <br />
          Booking
        </p>
        <div className="h-[1px] max-w-40 bg-gray-500 mt-2"></div>
      </div>

      <div
        className={`mt-14 pl-4 text-gray-500 ${
          isSideBarOpen ? "" : "hidden"
        } lg:block`}
      >
        <ul className="flex flex-col gap-3">
          <li className="hover:text-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/booking">Book a Table</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
