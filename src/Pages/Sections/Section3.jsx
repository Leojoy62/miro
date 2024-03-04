import { FaLongArrowAltRight } from "react-icons/fa";
import image from "./image/hybridwork.png.png";

const Section3 = () => {
  return (
    <div className="w-[1140px] flex flex-col justify-center items-center  mx-auto">
      <div className="flex flex-row justify-between items-center  mt-10">
        <div style={{ width: "550px", height: "264px" }} className="mr-10">
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
        <div className="ml-10">
          <img
            style={{
              width: "550px",
            }}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
