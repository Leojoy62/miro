import React from "react";
import image from "./image/uxdesignwithoutshadow.jpg.png";
import logos from "./image/logosdesign.svg.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const Section7 = () => {
  return (
    <div className="w-[1140px] ml-16 mt-32">
      <h1 style={{ fontSize: "48px" }} className="font-bold">
        Built for all kinds of teams
      </h1>
      <div className="flex justify-start gap-6 mt-10">
        <p className="bg-gray-200 border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          UX & Design
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Marketing
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Product Management
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Engineering
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Consultants
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Agile Coaches
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Sales
        </p>
      </div>
      <div className="flex mt-10 ">
        <div className="mr-10 mt-10 w-1/5">
          <p className="text-gray-500 mt-2 flex gap-2 items-center">
            <TiTick className="text-2xl mr-2" /> Build low-fi wireframes
          </p>

          <p className="text-gray-500 mt-2 flex gap-2 ">
            <TiTick className="text-4xl mr-2" /> Involve stakeholders in the
            design process
          </p>
          <p className="text-gray-500 mt-2 flex gap-2 ">
            <TiTick className="text-3xl mr-2" /> Run engaging design workshops
          </p>
          <p className="text-blue-500 flex justify-start gap-2 items-center mt-10">
            Learn more <FaLongArrowAltRight></FaLongArrowAltRight>
          </p>

          <div className="flex-col items-center justify-center w-[270px]">
            <p className="text-gray-500 mt-16 mb-3">
              Integrate your favorite tools
            </p>

            <img src={logos} alt="" />
          </div>
        </div>
        <div className="w-4/5">
          <img style={{ width: "100%" }} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
