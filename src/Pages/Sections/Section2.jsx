import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import image from "./image/Group.png";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="w-[96%] mx-auto md:w-[1140px] mt-16 flex flex-col justify-center items-center  mx-auto main">
      <div className="hidden sm:block">
        <img src={image} alt="" className="hidden md:block sec2 " />
      </div>
      <div className="flex-col items-center md:flex">
        <h1 style={{ fontSize: "48px" }} className="font-bold ">
          Collaborate without
        </h1>
        <h1 style={{ fontSize: "48px" }} className=" font-bold">
          constraints
        </h1>
      </div>
      <div className=" md:flex flex-row justify-center mt-6 xs:flex-col items-center">
        <div style={{ width: "360px" }}>
          <h3 className="font-bold text-xl mb-4">Free forever</h3>
          <p className="text-gray-400">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <span className="text-blue-600">pricing plans</span> for more
            features.
          </p>
        </div>
        <div style={{ width: "360px" }} className="md:mx-12">
          <h3 className="font-bold text-xl mb-4">Easy integrations</h3>
          <p className="text-gray-400">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our <span className="text-blue-600">Marketplace</span>.
          </p>
        </div>
        <div style={{ width: "360px" }}>
          <h3 className="font-bold text-xl mb-4">Security first</h3>
          <p className="text-gray-400">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-blue-600">Trust Center</span>.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#4262FF", width: "149px" }}
        className="flex  justify-center items-center  py-2 px-3 rounded-3xl text-white gap-2 mt-2"
      >
        <button> Sign up free </button>
        <FaLongArrowAltRight />
      </div>
    </div>
  );
};

export default Section2;
