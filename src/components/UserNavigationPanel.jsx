import { Link } from "react-router-dom";
import { LuFileEdit } from "react-icons/lu";
import AnimationWrapper from "../common/page-animation";
import { useContext } from "react";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

const UserNavigationPanel = () => {
   const { userAuth: { username }, setUserAuth} = useContext(UserContext);

    const signOutUser = () => {
        removeFromSession("user");
        setUserAuth({access_token: null})
    }

    return (
      <AnimationWrapper
        className=" absolute right-0 -z-20"
        transition={{ duration: 0.2 }}
      >
        <div className="bg-white absolute -right-20 border border-grey md:w-60 overflow-hidden duration-200">
          <Link
            to={`/user/${username}`}
            className="text-dark-grey hover:text-black hover:bg-grey p-3 px-4 block opacity-75 pl-8 py-4"
          >
            Profile
          </Link>

          <Link
            to="/dashboard/blogs"
            className="text-dark-grey hover:text-black hover:bg-grey p-3 px-4 block opacity-75 pl-8 py-4"
          >
            Dashboard
          </Link>

          <Link
            to="/settings/edit-profile"
            className="text-dark-grey hover:text-black hover:bg-grey p-3 px-4 block opacity-75 pl-8 py-4"
          >
            Settings
          </Link>

          <span className="absolute border-t border-grey w-[100%]"></span>

          <button
            className="text-left p-4 hover:bg-grey w-full pl-8 py-4"
            onClick={signOutUser}
          >
            <h1 className="font-bold text-xl mg-1">Sign Out</h1>
            <p className="text-dark-grey">@{username}</p>
          </button>
        </div>
      </AnimationWrapper>
    );
};

export default UserNavigationPanel;
