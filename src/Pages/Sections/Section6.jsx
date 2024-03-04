import React from "react";
import image from "./image/div6.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const Section6 = () => {
  return (
    <div className="w-[1140px] ml-16 mt-32">
      <h1 style={{ fontSize: "48px" }} className="font-bold">
        Built for the way you work
      </h1>
      <div className="flex justify-between mt-10">
        <p className="bg-gray-200 border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Brainstorming
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Diagramming
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Meetings & Workshops
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Scrum Events
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Mapping
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Research & Design
        </p>
        <p className="border-gray-100 font-semibold w-fit border-2 shadow-xs p-2 rounded-3xl">
          Strategic Planning
        </p>
      </div>
      <div className="flex mt-10 ">
        <div className="mr-10 w-1/5">
          <h5 className="font-semibold mt-16">Brainstorming</h5>
          <p className="text-gray-500 mt-10">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <p className="text-blue-500 flex justify-start gap-2 items-center mt-10">
            Learn more <FaLongArrowAltRight></FaLongArrowAltRight>
          </p>
        </div>
        <div className="w-4/5">
          <img style={{ width: "100%" }} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
