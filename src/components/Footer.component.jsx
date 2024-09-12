import { Link } from "react-router-dom";

import { CiMail } from "react-icons/ci";
import {
  RiPhoneFill,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiYoutubeFill,
  RiTwitterXFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import OSOU from "../assets/osou.png";
import okcl from "../assets/OKCL.png";
import iso from "../assets/ISO.png"

const Footer = () => {
  return (
    <footer className="text-white bg-[#202431]">
      <section>
        <div className="md:flex">
          <div className="px-5 py-10 flex-1">
            <h1 className="text-2xl font-[700] py-4">
              Smart Institute Of Information Technology
            </h1>
            <p className="py-2 text-sm text-grey/50">
              <CiMail className="inline text-2xl" /> siitsurada@gmail.com
            </p>
            <p className="py-2 text-sm text-grey/50">
              <RiPhoneFill className="inline text-2xl" /> +91 7873987123
            </p>
            <ul className="flex gap-5 py-4">
              <li>
                <a
                  href="https://www.facebook.com/p/SIIT-100063805190257/"
                  target="_blank"
                >
                  <RiFacebookCircleFill className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/oscit_siit_surada/"
                  target="_blank"
                >
                  <RiInstagramLine className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@SIIT_Surada" target="_blank">
                  <RiYoutubeFill className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <RiTwitterXFill className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/siit-surada-56aa78187/"
                  target="_blank"
                >
                  <RiLinkedinBoxFill className="text-2xl" />
                </a>
              </li>
            </ul>
            <div className="certifications flex gap-5 py-4">
              <img src={iso} className="h-14" />
              <img src={OSOU} className="h-14" />
              <img src={okcl} className="h-14" />
            </div>
          </div>

          <div className="px-5 md:py-10 flex-1">
            <h1 className="footer-line text-2xl font-[700] py-4">
              Quick Links
            </h1>
            <div className="grid grid-cols-2 gap-4 text-grey/50 mt-10">
              <Link to={"/about"}>About us</Link>
              <Link to={"/"}>FAQs</Link>
              <Link to={"/"}>Privacy policy</Link>
              <Link to={"/contact"}>Contact us</Link>
              <Link to={"/bllog"}>Blogs</Link>
              <Link to={"/courses"}>Courses</Link>
            </div>
          </div>

          <div className="px-5 py-10 flex-1">
            <h1 className="footer-line text-2xl font-[700] py-4">
              Popular Courses
            </h1>
            <div className="grid grid-cols-2 gap-4 text-grey/50 mt-10">
              <Link>OS-CIT</Link>
              <Link>OS-CIT 'A'</Link>
              <Link>OS-CIT 'A++'</Link>
              <Link>Tally (with GST)</Link>
              <Link>Ms Office</Link>
              <Link>Web Development</Link>
              <Link>AutoCAD</Link>
              <Link>3D Modelling</Link>
              <Link>Video Editing</Link>
              <Link>Graphic Designing</Link>
              <Link>Photo Editing</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
