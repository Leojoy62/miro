import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import image from "./image/Group.png";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="w-[96%] mx-auto max-w-[1140px] mt-16 flex-col justify-center items-center mx-auto main">
      <div className="hidden md:block">
        <img src={image} alt="" className="hidden md:block sec2 " />
      </div>
      <div className="flex flex-col justify-center items-center  md:flex">
        <h1 style={{ fontSize: "48px" }} className="font-bold ml-16 sm:ml-0">
          Collaborate without
        </h1>
        <h1 style={{ fontSize: "48px" }} className=" font-bold">
          constraints
        </h1>
      </div>
      <div className=" md:flex justify-center mt-6  items-center gap-6">
        <div className="">
          <h3 className="sm:w-[96%] max-w-[360px] font-bold text-xl mb-4">
            Free forever
          </h3>
          <p className="text-gray-400">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <span className="text-blue-600">pricing plans</span> for more
            features.
          </p>
        </div>
        <div className="my-5 md:my-0">
          <h3 className="sm:w-[96%] max-w-[360px] font-bold text-xl mb-4">
            Easy integrations
          </h3>
          <p className="text-gray-400">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our <span className="text-blue-600">Marketplace</span>.
          </p>
        </div>
        <div className="">
          <h3 className="sm:w-[96%] max-w-[360px] font-bold text-xl mb-4">
            Security first
          </h3>
          <p className="text-gray-400">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-blue-600">Trust Center</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <div
          style={{ backgroundColor: "#4262FF" }}
          className="flex w-full max-w-[149px] justify-center items-center  py-2 px-3 rounded-3xl text-white gap-2 mt-2"
        >
          <button> Sign up free </button>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default Section2;
