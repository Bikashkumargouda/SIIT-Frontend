import { FcGraduationCap, FcManager, FcOnlineSupport } from "react-icons/fc";

import AnimationWrapper from "../common/page-animation";
import hero from "../assets/hero4.jpg"
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import join_us from "../assets/join_us.jpg" // adapted from Vernon Adams's code snippet

export const About = () => {
  document.title = "SIIT | About"
    return (
      <AnimationWrapper>
        <div>
          {/* top comp */}
          <div className="overflow-hidden md:h-[400px] relative">
            <img src={hero} className="w-fit" alt="img" />
            <div className=" absolute top-0 left-0 w-full h-full bg-overlay bg-opacity-30 flex flex-col justify-center items-center">
              <h1 className="text-white text-5xl ">About Us</h1>
              {/* <p className="text-xl text-white font-bold text-center">
                Don't Hesitate To Connect With Us
              </p> */}
            </div>
          </div>

          {/* mid-1 comp */}
          <section>
            <div className=" my-20">
              <div className="text-center">
                <h1 className="text-5xl mb-3 font-bold">Why Choose Us ?</h1>
                <p className=" py-2 mb-4 text-text_color1 text-lg font-medium">
                  SIIT has Modern teaching concepts, methodology & techniques
                  where teachers make students computer friendly. <br /> Through
                  audio-visuals & multimedia, learning becomes easy, enjoyable &
                  playful.
                </p>
              </div>
              <div className="md:flex gap-7">
                <div className=" shadow-black shadow-lg rounded-md p-6 text-center bg-buttons_1 my-8">
                  <FcManager className="text-5xl m-auto" />
                  <h1 className="text-2xl my-2 font-bold text-white">
                    Expert Instructors
                  </h1>
                  <p className=" text-grey">
                    Our team of experienced and passionate instructors are
                    experts in their respective fields, providing students with
                    valuable insights and real-world knowledge.
                  </p>
                </div>

                <div className=" shadow-black shadow-lg rounded-md p-6 text-center bg-twitter my-8">
                  <FcGraduationCap className="text-5xl m-auto" />
                  <h1 className="text-2xl my-2 font-bold text-white">
                    Affordable Education
                  </h1>
                  <p className=" text-grey">
                    Access high-quality education without breaking the bank.
                    Choose us for affordable course options that provide
                    exceptional value for your investment in education.
                  </p>
                </div>

                <div className=" shadow-black shadow-lg rounded-md p-6 text-center bg-buttons_2 my-8">
                  <FcOnlineSupport className="text-5xl m-auto" />
                  <h1 className="text-2xl my-2 font-bold text-white">
                    Supportive Community
                  </h1>
                  <p className=" text-grey">
                    Join a vibrant and supportive learning community where
                    students can connect, collaborate, and learn from each
                    other, creating a network that extends beyond the
                    classroom."
                  </p>
                </div>
              </div>
            </div>
            {/* mid-2 comp our mission */}

            <div className="md:flex gap-10 m-5">
              <div className="md:w-[50%] rounded-xl overflow-hidden">
                <img src={about1} alt="img" />
              </div>
              <div className="md:w-[50%]">
                <h1 className="text-3xl font-bold my-4">
                  Our <span className="text-4xl text-buttons_1">Mission</span>
                </h1>
                <p className="md:text-xl text-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-3xl text-text_color3 font-bold">A</span>
                  t SIIT, our mission is to empower students with knowledge,
                  skills, and values that prepare them to thrive in a rapidly
                  changing world. We strive to create a vibrant learning
                  community that promotes academic excellence, creativity, and
                  social responsibility.
                </p>
              </div>
            </div>

            {/* mid-3 Academic Programs  */}

            <div className="md:flex gap-10 m-5 my-16">
              <div className="md:w-[50%]">
                <h1 className="text-4xl font-bold my-4 ">
                  Academic{" "}
                  <span className="text-3xl text-buttons_1">Programs</span>
                </h1>
                <p className="md:text-xl text-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-3xl text-text_color3 font-bold">A</span>
                  t SIIT, we offer a comprehensive range of academic programs
                  designed to cater to the diverse interests and aspirations of
                  our students. From rigorous academic courses to enriching
                  extracurricular activities, our programs are tailored to
                  nurture the holistic development of each individual. Our
                  curriculum is designed to be dynamic and relevant, integrating
                  interdisciplinary approaches and real-world applications to
                  ensure that students are well-equipped to meet the challenges
                  of the 21st century. Whether pursuing traditional subjects or
                  exploring emerging fields, students at SIIT are encouraged to
                  think critically, communicate effectively, and pursue their
                  passions with enthusiasm and dedication.
                </p>
              </div>
              <div className="md:w-[50%] rounded-xl overflow-hidden">
                <img src={about2} alt="img" />
              </div>
            </div>
            <div className="md:flex gap-10 m-5 my-16 ">
              <div className=" md:w-[100%] rounded-xl overflow-hidden">
                <img src={join_us} alt="img" />
              </div>
              <div className="">
                <h1 className="text-4xl font-bold my-4 ">Join Us</h1>
                <p className="md:text-xl text-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-2xl font-bold text-text_color3">W</span>
                  hether you are a prospective student, parent, educator, or
                  community member, we invite you to join us in our journey of
                  learning, growth, and discovery. Together, let us inspire
                  minds, ignite imaginations, and build a brighter future for
                  generations to come. Welcome to SIIT – where every individual
                  has the opportunity to shine.
                </p>
              </div>
            </div>
          </section>
        </div>
      </AnimationWrapper>
    );
}