import { FaLongArrowAltRight } from "react-icons/fa";
import image from "./image/M3_integrations_all_integrations.png.png";

const Section4 = () => {
  return (
    <div className="md:w-[1140px] flex flex-col justify-center items-center  mx-auto">
      <div className="w-[100%] mx-auto  px-3 md:flex flex-row justify-between items-center  mt-10 mr-12">
        <div>
          <img
            style={{
              width: "550px",
            }}
            src={image}
            alt=""
          />
        </div>
        <div className="md:w-[550px] md:h-[264px] md:ml-12">
          <h1 style={{ fontSize: "48px" }} className="font-bold">
            Connect your tools, close your tabs
          </h1>
          <p className="text-gray-400">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <p className="text-blue-500 flex justify-start gap-2 items-center mt-5">
            Learn more <FaLongArrowAltRight></FaLongArrowAltRight>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
