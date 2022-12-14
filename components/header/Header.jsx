import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[3px] w-7 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <nav className="flex relative py-4 px-4 md:px-0 md:py-0 justify-between md:justify-between items-center">
      <div className="text-3xl">
        <h3 className="cursor-pointer">
          F<span className="text-[#d31b27]">oo</span>dy
        </h3>
      </div>
      <div className="list-none hidden md:flex gap-6 my-auto">
        <li className="nav-list">Home</li>
        <li className="nav-list">Menu</li>
        <li className="nav-list">About Us</li>
        <li className="nav-list">Contact</li>
      </div>

      <div className="md:flex hidden items-center my-auto gap-4 ">
        <IoBagOutline className="text-xl" />
        <button className="btn-brown text-sm px-7">Sign Up</button>
      </div>
      {isOpen && (
        <div
          className={`md:hidden bg-[#E9E5E4] bg-opacity-60 backdrop-blur-sm h-screen w-3/4 right-0 bottom-0 top-0 fixed transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 "
          } flex flex-col items-center`}
        >
          <div className="list-none flex flex-col gap-6 my-auto">
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Home
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Menu
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              About Us
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Contact
            </li>
          </div>

          <div className="flex  items-center my-auto gap-4 ">
            <IoBagOutline
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-brown text-sm px-7"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      <button
        className="flex md:hidden flex-col rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "-rotate-45 -translate-y-3 " : ""
          }`}
        />
      </button>
    </nav>
  );
};

export default Header;
