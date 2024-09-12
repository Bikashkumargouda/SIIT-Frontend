import { FaCode } from "react-icons/fa";
import careerPath from "../assets/career-path.png";
import designing from "../assets/web-design.png"
import account from "../assets/accounting.png"
import digitalArt from "../assets/pen-tablet.png"
import programming from "../assets/code.png"
import nethard from "../assets/lan.png"

export const Categories = () => {
  return (
    <section className="mt-20 py-10">
      {/* <h1 className="text-4xl font-bold py-8">Category</h1> */}
      <div className="md:flex mt-6 ">
        <div className=" md:w-[28%] m-6 pt-4">
          <h1 className="text-3xl font-bold py-2 text-buttons_1">Category</h1>
          <p>
            <span className="text-2xl text-text_color3 font-bold">E</span>
            ducation is the cornerstone of progress and the key to unlocking
            endless possibilities. Our education category is dedicated to
            providing valuable resources, insights, and inspiration to students,
            educators, parents, and lifelong learners alike. Whether you're
            seeking academic support, career guidance, or tips for educational
            success, our comprehensive education category has you covered.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-1 gap-5 text-center">
          <article className=" md:w-64 flex flex-col items-center ">
            <div className="w-[70px]">
              <img src={careerPath} alt="img" />
            </div>
            <h3 className="text-xl font-bold py-2">Job Readiness</h3>
            <p>An awareness of your strengths and areas for growth</p>
          </article>

          <article className="md:w-64 flex flex-col items-center">
            <div className="w-[70px]">
              <img src={designing} alt="designIMG" />
            </div>
            <h5 className="text-xl font-bold py-2">Designing</h5>
            <p>To make drawings, preliminary sketches, or plans.</p>
          </article>

          <article className=" md:w-64 flex flex-col items-center">
            <div className="w-[70px]">
              <img src={account} alt="AccIMG" />
            </div>
            <h5 className="text-xl font-bold py-2">Accounting</h5>
            <p>
              The process of recording financial transactions pertaining to a
              business.
            </p>
          </article>

          <article className="md:w-64 flex flex-col items-center">
            <div className="w-[70px]">
              <img src={digitalArt} alt="" />
            </div>
            <h5 className="text-xl font-bold py-2">Digital Arts</h5>
            <p>
              Art made using software, computers, or other electronic devices.
            </p>
          </article>

          <article className="md:w-64 flex flex-col items-center">
            <div className="w-[70px]">
              <img src={programming} alt="" />
            </div>
            <h5 className="text-xl font-bold py-2">Programming</h5>
            <p>
              The composition of sequences of instructions, called programs,
              that computers can follow to perform tasks.
            </p>
          </article>

          <article className=" md:w-64 flex flex-col items-center">
            <div className="w-[70px]">
              <img src={nethard} alt="" />
            </div>
            <h5 className="text-xl font-bold py-2">Hardware and Networking</h5>
            <p>
              The physical devices within a computer and the networks that
              connect them to share resources and exchange data with each other.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
