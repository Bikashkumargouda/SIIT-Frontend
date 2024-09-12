import { Link } from "react-router-dom";
import {
  RiMenu3Fill,
  RiCloseLine,
  RiMoonFill,
  RiSunLine,
} from "react-icons/ri";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import UserNavigationPanel from "./UserNavigationPanel";

const Navbar = () =>{

  const [toggle, setToggle] = useState(true);
  const [dark, setDark] = useState(false);
  const [userNavPanel, setUserNavPanel] = useState(false);
  
  const handleDarkMood = () => {
    setDark(!dark);
  }

   function onToggleMenu(e){
        setToggle(!toggle);
    }

    const { userAuth, userAuth: { access_token, profile_img}} = useContext(UserContext);

    const handleUserNavPanel = () => {
      setUserNavPanel(currentVal => !currentVal)
    }

    const handleBlur = () => {
      setTimeout(() => {
        setUserNavPanel(false);
      }, 200);
    }

    return (
      <div className="navbar border border-buttons_2 border-t-4 border-b-0 border-x-0">
        <a href="/">
          <div className="text-[#1c3fbd] font-gelasio text-5xl font-bold">
            S<span className=" text-buttons_1 text-5xl">i</span>
            <span className=" text-buttons_2 text-5xl">i</span>
            <span className=" text-twitter text-5xl">T</span>
            {/* <img src="logo" alt="logo" /> */}
          </div>
        </a>
        {/* <div
          className={`md:static absolute bg-white min-h-[60vh] left-0 ${
            toggle ? "top-[-545px]" : "top-[80px]"
          } md:w-auto md:min-h-fit w-full flex items-center justify-center px-5 transition-all ease-in-out duration-700`}
        > */}

        {/* Nav menus */}
        <div
          className={`md:static absolute bg-white min-h-[100vh] top-[75px] ${
            toggle ? "right-[100%]" : "right-[0%]"
          } md:w-auto md:min-h-fit w-full flex md:items-center justify-center px-5 transition-all ease-in-out duration-700`}
        >
          <div className="flex md:flex-row flex-col py-4 items-center md:gap-[4vw] gap-8">
            <div className="menu-items">
              <Link to={"/"} onClick={() => setToggle(!toggle)}>
                Home
              </Link>
            </div>
            <div className="menu-items">
              <Link to={"/courses"} onClick={() => setToggle(!toggle)}>
                Courses
              </Link>
            </div>
            <div className="menu-items">
              <Link to={"/about"} onClick={() => setToggle(!toggle)}>
                About
              </Link>
            </div>
            <div className="menu-items">
              <Link to={"/blog"} onClick={() => setToggle(!toggle)}>
                Blog
              </Link>
            </div>
            <div className="menu-items">
              <Link to={"/contact"} onClick={() => setToggle(!toggle)}>
                Contact
              </Link>
            </div>

            {!access_token && (
              <Link to={"/signin"}>
                <button
                  className="btn-dark "
                  onClick={() => setToggle(!toggle)}
                >
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5 ">
          {/* loght moode toogle */}
          {/* <div onClick={handleDarkMood} className="cursor-pointer">
            {dark ? (
              <RiSunLine className="text-2xl" />
            ) : (
              <RiMoonFill className="text-2xl" />
            )}
          </div> */}
          {/* <button className="btn-dark hidden">Sign In</button> */}
          {access_token && (
            <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>
              <button className="w-11 h-11 rounded-full bg-grey relative hover:bg-black/10">
                <img
                  src={profile_img}
                  alt="img"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>

              {userNavPanel ? 
              <UserNavigationPanel /> : ""
              }
            </div>
          )}
          {/* menu bar */}
          <div
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          >
            {toggle ? (
              <RiMenu3Fill className="text-3xl" />
            ) : (
              <RiCloseLine className="text-3xl" />
            )}
          </div>
        </div>
      </div>
    );
}

export default Navbar;