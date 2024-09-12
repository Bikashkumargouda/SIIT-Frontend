import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { RiLiveFill } from "react-icons/ri";
import oscit from "../assets/courses/images.png"
import oscita from "../assets/courses/oscit-Alogo.png"
import oscitap from "../assets/courses/oscit-Apluslogo.png"
import tally from "../assets/courses/Tally-min.png"
import photoShop from "../assets/courses/photoshop.png"
import excel from "../assets/courses/excel.png";
import { useContext } from "react";
import { UserContext } from "../App";
import EnrolePopup from "./EnrolePopup";

const Courses = () => {
  // const navigate = useNavigate();
   const {showPopup, setShowPopup} = useContext(UserContext);
  return (
    <>
      <section>
        <h1 className=" text-center md:text-5xl text-4xl my-4 font-medium">
          Our Popular{" "}
          <span className=" text-buttons_1 md:text-5xl text-4xl">Courses</span>
        </h1>
        <div className="flex flex-wrap justify-between gap-5 my-20">
          <div className=" bg-white p-4 rounded-md">
            <img src={oscit} alt="img" width={"350px"} />
            <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
            <h2 className="text-xl font-bold p-2">OS-CIT</h2>
            <div className="course-details ">
              <button
                onClick={() => setShowPopup(true)}
                className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
              >
                Enrole
              </button>
              {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
              Details
            </button> */}
            </div>
          </div>

          <div className=" bg-white p-4 rounded-md">
            <img src={oscita} alt="img" width={"350px"} />
            <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
            <h2 className="text-xl font-bold p-2">OS-CIT 'A'</h2>
            <div className="course-details ">
              <button
                onClick={() => setShowPopup(true)}
                className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
              >
                Enrole
              </button>
              {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
              Details
            </button> */}
            </div>
          </div>

          <div className=" bg-white p-4 rounded-md">
            <img src={oscitap} alt="img" width={"350px"} />
            <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
            <h2 className="text-xl font-bold p-2">OS-CIT 'A+'</h2>
            <div className="course-details ">
              <button
                onClick={() => setShowPopup(true)}
                className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
              >
                Enrole
              </button>
              {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
              Details
            </button> */}
            </div>
          </div>

          <div className=" bg-white p-4 rounded-md">
            <img src={tally} alt="img" width={"350px"} />
            <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
            <h2 className="text-xl font-bold p-2">Tally with GST</h2>
            <div className="course-details ">
              <button
                onClick={() => setShowPopup(true)}
                className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
              >
                Enrole
              </button>
              {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
              Details
            </button> */}
            </div>
          </div>

          <div className=" bg-white p-4 rounded-md">
            <img src={photoShop} alt="img" width={"350px"} />
            <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
            <h2 className="text-xl font-bold p-2">Adobe Photoshop</h2>
            <div className="course-details ">
              <button
                onClick={() => setShowPopup(true)}
                className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
              >
                Enrole
              </button>
              {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
              Details
            </button> */}
            </div>
          </div>

          <div className=" bg-white p-4 rounded-md">
            <img src={excel} alt="img" width={"350px"} />
            <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
            <h2 className="text-xl font-bold p-2">Advanced Excel</h2>
            <div className="course-details ">
              <button
                onClick={() => setShowPopup(true)}
                className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
              >
                Enrole
              </button>
              {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
              Details
            </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* {showPopup && <EnrolePopup/> } */}
    </>
  );
};

export default Courses;
