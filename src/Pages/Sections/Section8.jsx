import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import vmware from "./image/vmware.svg.png";
import docu from "./image/Docusign-Testimonials-280-60-Baseline.svg.png";
import frog from "./image/frog.svg.png";
import testimonial1 from "./image/first.png";
import testimonial2 from "./image/second.png";
import testimonial3 from "./image/third.png";

const Section8 = () => {
  return (
    <>
      <div className="w-[96%] mx-auto px-2 lg:w-[1140px] mt-16 flex flex-col justify-center items-center  mx-auto">
        <div className="flex flex-col items-center">
          <h1 style={{ fontSize: "48px" }} className="font-bold">
            Loved by the world's best teams
          </h1>
          <div className="flex mt-5  justify-center items-center w-fit border-blue-600 border-2 py-2 px-6 rounded-3xl text-white gap-2 mt-2">
            <button className="text-blue-600 ">
              {" "}
              See all cusmoter stories
            </button>
            <FaLongArrowAltRight className="text-blue-600 mt-1" />
          </div>
        </div>
        <div className="w-[100%] mx-auto md:flex flex-row justify-center mt-16">
          <div className="lg:w-[360px]">
            <img src={vmware} alt="" />
            <p style={{ height: "200px" }} className="text-gray-400 mt-10">
              “When the pandemic hit, those of us who thrive on in-person
              collaboration were worried that our creativity and productivity
              would suffer. Miro was the perfect tool to help us with
              collaboration, whiteboarding, and retrospectives while remote.”
            </p>
            <div className="flex items-center gap-4 ">
              <img src={testimonial1} alt="" />
              <div>
                <p className="text-gray-500">Roxanne Mustafa</p>
                <p className="text-gray-500">Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 lg:w-[360px]  md:mx-12">
            <img src={docu} alt="" />
            <p style={{ height: "200px" }} className="text-gray-400 mt-10">
              “Miro helps solve one of the major gaps in product design: how to
              manage tasks across product designers whose projects are in
              different tools.”
            </p>
            <div className="flex items-center gap-4">
              <img src={testimonial2} alt="" />
              <div>
                <p className="text-gray-500">Jane Ashley</p>
                <p className="text-gray-500">Head of Design at DocuSign</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-[360px]  md:mx-12">
            <img src={frog} alt="" />
            <p style={{ height: "200px" }} className="text-gray-400 mt-10">
              “As we used Miro we moved from skepticism to belief to innovation,
              and now we have a tool that’s at the core of what we do and will
              continue to extend into the future.”
            </p>
            <div className="flex items-center gap-4 ">
              <img src={testimonial3} alt="" />
              <div>
                <p className="text-gray-500">Laura Baird</p>
                <p className="text-gray-500">
                  Associate Design Director at frog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section8;
