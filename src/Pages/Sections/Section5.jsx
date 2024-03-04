import React from "react";
import "./Section5.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Section5 = () => {
  return (
    <div className="w-[96%] mx-auto md:w-[1140px] container flex flex-col justify-center items-center  mx-auto mt-12">
      <div className="texts flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold">The ways we work</h2>
        <p className="font-semibold">
          How has our relationship with work changed?
        </p>

        <div
          style={{ backgroundColor: "#4262FF", width: "165px" }}
          className="flex justify-center items-center py-2 px-3 rounded-3xl text-white gap-2 mt-2"
        >
          <button> View the report </button>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default Section5;
