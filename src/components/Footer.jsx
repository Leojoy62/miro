import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
// import logo from "../Pages/Sections/image/footerlogo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#02033B" }}
        className="mt-16 w-full  md:h-[680px] flex flex-col justify-center  items-center"
      >
        <div className="w-[90%] h-auto md:w-[1140px] md:h-[500px]">
          <div className="mt-5 md:mt-0 md:flex md:justify-between gap-10">
            <div>
              <h2 style={{ fontSize: "23px" }} className="text-white font-bold">
                Scan.Detect.Remove
              </h2>
              <div
                style={{ fontSize: "56px" }}
                className="flex gap-8 text-white mt-10"
              >
                <FaTwitterSquare />
                <FaSquareFacebook />
                <FaYoutubeSquare />
              </div>
              <div className="flex mt-10 text-white gap-5">
                <a href="#">
                  <u>Privacy Policy</u>
                </a>
                <a href="#">
                  <u>Terms of Service</u>
                </a>
              </div>
              <div className="mt-10 text-white">
                <p>
                  Copyright © 2022 Certo Software Limited | Registered in
                  England & Wales No. 10072356
                </p>
                <p className="mt-6">Designed & developed by Bigger Picture</p>
              </div>
            </div>
            <div>
              <h1
                style={{ fontSize: "35px" }}
                className="text-white font-bold w-[178px] h-[70px] border-b border-white border-3"
              >
                Miro.
              </h1>
              <div className="flex  items-center gap-4 mt-12">
                <div
                  style={{
                    background: "#FFC247",
                    width: "20px",
                    height: "4px",
                  }}
                ></div>
                <h3
                  style={{ fontSize: "19px", color: "#FFC247" }}
                  className="font-bold"
                >
                  iPhone
                </h3>
              </div>
              <div className="flex  items-center gap-4 mt-6">
                <div
                  style={{
                    background: "#FFC247",
                    width: "20px",
                    height: "4px",
                  }}
                ></div>
                <h3
                  style={{ fontSize: "19px", color: "#FFC247" }}
                  className="font-bold"
                >
                  Android
                </h3>
              </div>
              <div className="flex  items-center gap-4 mt-6">
                <div
                  style={{
                    background: "#FFC247",
                    width: "20px",
                    height: "4px",
                  }}
                ></div>
                <h3
                  style={{ fontSize: "19px", color: "#FFC247" }}
                  className="font-bold"
                >
                  Help
                </h3>
              </div>
              <div className="flex  items-center gap-4 mt-6">
                <div
                  style={{
                    background: "#FFC247",
                    width: "20px",
                    height: "4px",
                  }}
                ></div>
                <h3
                  style={{ fontSize: "19px", color: "#FFC247" }}
                  className="font-bold"
                >
                  About
                </h3>
              </div>
              <div className="flex  items-center gap-4 mt-6">
                <div
                  style={{
                    background: "#FFC247",
                    width: "20px",
                    height: "4px",
                  }}
                ></div>
                <h3
                  style={{ fontSize: "19px", color: "#FFC247" }}
                  className="font-bold"
                >
                  Insights
                </h3>
              </div>
            </div>
            <div className="bg mt-5 md:mt-0 md:w-[436px] md:h-[233px]">
              <div className="bg-yellow md:w-[436px] md:h-[233px] p-8 ">
                <h2 style={{ fontSize: "23px" }} className="font-bold">
                  Sign up to our newsletter
                </h2>
                <p className="my-4">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-[255px] h-[35px] rounded-l-2xl px-2 "
                  />
                  <button className="w-[109px] h-[35px] text-white bg-black rounded-r-2xl font-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-5 md:mt-16 text-white md:w-[570px]">
            <p>
              Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
              registered in the U.S. and other countries. App Store is a service
              mark of Apple Inc. Android, Google Play and the Google Play logo
              are trademarks of Google LLC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
