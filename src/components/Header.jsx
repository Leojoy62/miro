import React from "react";
import logo from "./images/Frame.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import web from "./images/www.png";
const Header = () => {
  return (
    <div className="flex   justify-between  items-center w-full pt-5 pb-[19px] px-5 border-gray-200 border-b border-solid bg-white-A700">
      <div className="flex flex-row justify-center items-center">
        <img
          className="mb-2"
          src={logo}
          alt=""
          style={{ width: "91px", height: "32px" }}
        />
        <nav className="flex items-center gap-2 ml-5">
          <p className="flex items-center">
            Product <IoIosArrowDown />
          </p>
          <p className="flex items-center">
            Solutions <IoIosArrowDown />
          </p>
          <p className="flex items-center">
            Resources <IoIosArrowDown />
          </p>
          <p>Enterprice</p>
          <p>Pricing</p>
        </nav>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 ">
        <img src={web} alt="" />
        <p>EN</p>
        <p>Contact</p>
        <p>Sales</p>
        <p>Login</p>
        <div
          style={{ backgroundColor: "#4262FF" }}
          className="flex items-center  py-2 px-3 rounded-3xl text-white gap-2"
        >
          <button> Sign up free </button>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default Header;
