import React from "react";


import { ChooseUs } from "../components/ChooseUS";
import Hero from "../components/Hero.component";
import Courses from "../components/Courses.component";
import Testimonial from "../components/Testimonial.component";
import { Categories } from "../components/Categories.components";
import {Faq} from "../components/Faq.components"
import { Newsletter } from "../components/Newsletter.component";
import AnimationWrapper from "../common/page-animation";

const Home = () => {
  document.title = "SIIT - Smart Institute of information technology";
  return (
    <AnimationWrapper>
      <div className="w-full">
        <div>
          {/* <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" className="overflow-hidden"
        /> */}
          <Hero />
          <ChooseUs />
          <Categories />
          <Courses />
          <Faq />
          <Testimonial />
          <Newsletter />
          {/* <div className="h-[100vh]"></div> */}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Home;
