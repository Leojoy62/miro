import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "./images/Frame.png";

import web from "./images/www.png";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-gray-200 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <details>
                  <summary className="font-semibold ">Product</summary>
                  <ul className="p-2">
                    <li className="font-semibold text-lg">
                      <a>Submenu 1</a>
                    </li>
                    <li className="font-semibold text-lg">
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="font-semibold ">Solutions</summary>
                  <ul className="p-2">
                    <li className="font-semibold text-lg">
                      <a>Submenu 1</a>
                    </li>
                    <li className="font-semibold text-lg">
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="font-semibold ">Resources</summary>
                  <ul className="p-2">
                    <li className="font-semibold text-lg">
                      <a>Submenu 1</a>
                    </li>
                    <li className="font-semibold text-lg">
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="font-semibold text-lg">
                <a>Enterprise</a>
              </li>
              <li className="font-semibold text-lg">
                <a>Pricing</a>
              </li>
              <li className="font-semibold text-lg">
                <a>EN</a>
              </li>
              <li className="font-semibold text-lg">
                <a>Contact</a>
              </li>
              <li className="font-semibold text-lg">
                <a>Sales</a>
              </li>
              <li className="font-semibold text-lg">
                <a>Login</a>
              </li>

              <li
                style={{ backgroundColor: "#4262FF" }}
                className="h-[20px] py-2 w-full flex justify-center items-center   rounded-3xl text-white  text-lg "
              >
                <div>
                  <button> Sign up free </button>
                </div>
                <div>
                  <FaLongArrowAltRight />
                </div>
              </li>
            </ul>
          </div>
          <img className="mb-2" src={logo} alt="" />
          {/* todo */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="font-semibold text-lg">Product</summary>
                  <ul className="p-2">
                    <li className="font-semibold text-lg">
                      <a>Submenu 1</a>
                    </li>
                    <li className="font-semibold text-lg">
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="font-semibold text-lg">Solutions</summary>
                  <ul className="p-2">
                    <li className="font-semibold text-lg">
                      <a>Submenu 1</a>
                    </li>
                    <li className="font-semibold text-lg">
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="font-semibold text-lg">Resources</summary>
                  <ul className="p-2">
                    <li className="font-semibold text-lg">
                      <a>Submenu 1</a>
                    </li>
                    <li className="font-semibold text-lg">
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="font-semibold text-lg">
                <a>Enterprise</a>
              </li>
              <li className="font-semibold text-lg">
                <a>Pricing</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal flex  justify-center items-center">
            <li>
              <img src={web} alt="" />
            </li>
            <li className="font-semibold text-lg">
              <a>EN</a>
            </li>
            <li className="font-semibold text-lg">
              <a>Contact</a>
            </li>
            <li className="font-semibold text-lg">
              <a>Sales</a>
            </li>
            <li className="font-semibold text-lg">
              <a>Login</a>
            </li>

            {/* <li
              style={{ backgroundColor: "#4262FF" }}
              className="flex items-center  py-2 px-3 rounded-3xl text-white font-semibold text-lg gap-2"
            >
              <button> Sign up free </button>
              <FaLongArrowAltRight />
            </li> */}
          </ul>
          <li
            style={{ backgroundColor: "#4262FF" }}
            className="flex items-center  py-2 px-3 rounded-3xl text-white font-semibold text-lg gap-2"
          >
            <button> Sign up free </button>
            <FaLongArrowAltRight />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;

// export default Header;
// import React from "react";
// import logo from "./images/Frame.png";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import web from "./images/www.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center w-full pt-5 pb-[19px] px-5 border-gray-200 border-b border-solid bg-white-A700">
//       <div className="flex justify-center items-center">
//         <img
//           className="mb-2"
//           src={logo}
//           alt=""
//           style={{ width: "91px", height: "32px" }}
//         />
//         <nav className="hidden md:flex items-center gap-2 ml-5">
//           <Link to="#" className="flex items-center">
//             Product <IoIosArrowDown />
//           </Link>
//           <Link to="#" className="flex items-center">
//             Solutions <IoIosArrowDown />
//           </Link>
//           <Link to="#" className="flex items-center">
//             Resources <IoIosArrowDown />
//           </Link>
//           <Link to="#">Enterprise</Link>
//           <Link to="#">Pricing</Link>
//         </nav>
//         <div className="md:hidden">
//           <select className="block appearance-none bg-transparent border-none">
//             <option>Menu</option>
//             <option>Product</option>
//             <option>Solutions</option>
//             <option>Resources</option>
//             <option>Enterprise</option>
//             <option>Pricing</option>
//           </select>
//         </div>
//       </div>
//       <div className="hidden md:flex justify-center items-center gap-2">
//         <img src={web} alt="" />
//         <p>EN</p>
//         <p>Contact</p>
//         <p>Sales</p>
//         <p>Login</p>
//         <div
//           style={{ backgroundColor: "#4262FF" }}
//           className="flex items-center py-2 px-3 rounded-3xl text-white gap-2"
//         >
//           <button> Sign up free </button>
//           <FaLongArrowAltRight />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
