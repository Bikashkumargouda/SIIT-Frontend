import commingSoon from "/commingsoon.png"
import AnimationWrapper from "../common/page-animation";

export const Blog = () => {
  document.title = "SIIT | Blogs";
    return (
      <AnimationWrapper>
      <div className="w-full h-screen flex items-start justify-center overflow-hidden">
        <img src={commingSoon} alt="" className=" w-80" />
      </div>
      </AnimationWrapper>
    );
}