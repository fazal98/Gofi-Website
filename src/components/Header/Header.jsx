import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu/1" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ]

  const [isOpen,setIsOpen] = useState(false);
  const whatToDo = isOpen ? "mobile-lg:translate-x-0" : "mobile-lg:-translate-x-full";

  return (
    <header className="py-1 bg-secondary relative">
      <div>
        <nav>
          <div className=" max-w-[1280px] m-auto text-white flex items-center justify-between px-10 mobile-md:px-5">
            <NavLink to={"/"} className="flex flex-row items-center gap-1">
              <figure>
                <img src="/images/logo.webp" className="h-20" alt="logo" />
              </figure>
              <h2 className="text-4xl tracking-wider">Gufi</h2>
            </NavLink>
            <div className="hidden mobile-lg:block" onClick={() => setIsOpen(true)}><GiHamburgerMenu className="text-white text-4xl" /></div>
            <ul className={`flex items-center gap-12 text-lg tracking-widest uppercase cursor-pointer font-roboto transition-all duration-500 ease-in-out tablet:gap-8 tablet:text-sm mobile-lg:flex-col mobile-lg:absolute mobile-lg:top-0 mobile-lg:left-0 mobile-lg:bg-secondary mobile-lg:h-screen mobile-lg:w-screen mobile-lg:z-[100] mobile-lg:pt-40 mobile-lg:gap-12 mobile-lg:text-xl ${whatToDo}`}>
            <IoClose onClick={() => setIsOpen(false)} className="hidden absolute text-5xl bg-white py-1 shadow-sm shadow-white
             px-2 rounded-md font-semibold text-black mobile-lg:block right-12 top-24 animate-bounce mobile-sm:right-4" />
              {
                navItems.map((navitem,index) => {
                  return <li key={index} className="hover:text-tertiary transition-all duration-500 ease-in-out relative font-bold before:absolute before:h-[2px] before:transition-all before:duration-500 before:ease-in-out before:bg-tertiary before:bottom-0 before:w-0 before:hover:w-full">
                    <NavLink onClick={() => setIsOpen(false)} to={navitem.link} className={({ isActive }) => ` ${isActive && 'text-tertiary decoration-solid decoration-tertiary underline-navitems'}`} >{navitem.name}</NavLink>
                  </li>
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
