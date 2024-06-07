import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export const Navbar = () => {
  return (
    <>
      <nav className=" h-16   md:flex justify-end items-end text-white    bg-sky-400">
        <div className=" md:flex justify-end items-end gap-10 mr-10 mb-3 text-white hidden">
          <button type="button">Our Customers</button>
          <button type="button">SpArts Advantage</button>
          <button type="button">Contact Us</button>
        </div>
        <div className="md:hidden flex justify-end items-center mr-10">
          <RxHamburgerMenu className=" my-5 text-3xl" />
        </div>
      </nav>
    </>
  );
};
