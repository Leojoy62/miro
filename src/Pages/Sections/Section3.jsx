import { FaLongArrowAltRight } from "react-icons/fa";
import image from "./image/hybridwork.png.png";

const Section3 = () => {
  return (
    <div className="w-[96%] mx-auto lg:w-[1140px]  flex-col justify-center items-center  mx-auto">
      <div className="w-full mx-auto px-2 md:flex  flex-row justify-between items-center  mt-10">
        <div className="md:w-1/2 h-automax-w-[550px] max-h-[264px]  mb-16 sm:mb-0 ">
          <h1 style={{ fontSize: "48px" }} className="font-bold">
            Work together, wherever you work
          </h1>
          <p className="text-gray-400">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <p className="text-blue-500 flex justify-start gap-2 items-center mt-5">
            Learn more <FaLongArrowAltRight></FaLongArrowAltRight>
          </p>
        </div>
        <div className="sm:flex flex-col sm:items-center">
          <img className="w-[96%] max-w-[550px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
