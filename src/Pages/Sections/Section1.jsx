import React from "react";
import image from "./image/headerimage.png.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import image2 from "./image/div1.png";
import star from "./image/div2.png";
import logos from "./image/div.png";
const Section1 = () => {
  return (
    <div className="w-[1140px] mb-16  mx-auto">
      <div className="flex flex-row justify-between items-center  mt-10">
        <div style={{ width: "440px" }} className="mr-5">
          <h1 style={{ fontSize: "48px" }} className="font-bold">
            Take ideas from better to best
          </h1>
          <p>
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>
          <input
            type="text"
            placeholder="Enter your work email"
            className="border-gray-500 mt-4 border-2 rounded-3xl py-2 px-3 w-full"
          />
          <div
            style={{ backgroundColor: "#4262FF" }}
            className="flex flex-row justify-center items-center  py-2 px-3 rounded-3xl text-white mt-2 w-full"
          >
            <button> Sign up free </button>
            <FaLongArrowAltRight />
          </div>
          <p className="text-gray-400">
            Collaborate with your team within minutes
          </p>
          <div
            style={{
              width: "350px",
              height: "60px",
              backgroundColor: "#F5F5F7",
            }}
            className="rounded-lg p-2 mt-6"
          >
            <div className="flex flex-row items-center justify-center">
              <div>
                <img src={star} alt="" />
                <p className="font-semibold">
                  <small>Based on 5149+ reviews:</small>
                </p>
              </div>
              <div>
                <img src={logos} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-lg">Trusted by 45M+ users</p>
        </div>
        <img src={image2} alt="" />
      </div>
    </div>
  );
};

export default Section1;
