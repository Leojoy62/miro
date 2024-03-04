import { FaLongArrowAltRight } from "react-icons/fa";
import image from "./image/M3_integrations_all_integrations.png.png";

const Section4 = () => {
  return (
    <div className="w-[1140px] flex flex-col justify-center items-center  mx-auto">
      <div className="flex flex-row justify-between items-center  mt-10 mr-12">
        <div>
          <img
            style={{
              width: "550px",
            }}
            src={image}
            alt=""
          />
        </div>
        <div style={{ width: "550px", height: "264px" }} className="ml-12">
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
