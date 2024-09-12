import { FcGraduationCap, FcManager, FcOnlineSupport } from "react-icons/fc";

export const ChooseUs = () => {
  return (
    <div className=" bg-text_color3 text-white my-10 py-12">
      <section>
        <div className="">
          <div className="text-center">
            <h1 className="md:text-5xl text-4xl mb-3 font-bold">Why Choose Us ?</h1>
            <p className=" py-2 mb-4 text-text_color1 text-lg font-medium">
              SIIT has Modern teaching concepts, methodology & techniques where
              teachers make students computer friendly. <br /> Through
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
                Our team of experienced and passionate instructors are experts
                in their respective fields, providing students with valuable
                insights and real-world knowledge.
              </p>
            </div>

            <div className=" shadow-black shadow-lg rounded-md p-6 text-center bg-twitter my-8">
              <FcGraduationCap className="text-5xl m-auto" />
              <h1 className="text-2xl my-2 font-bold text-white">
                Affordable Education
              </h1>
              <p className=" text-grey">
                Access high-quality education without breaking the bank. Choose
                us for affordable course options that provide exceptional value
                for your investment in education.
              </p>
            </div>

            <div className=" shadow-black shadow-lg rounded-md p-6 text-center bg-buttons_2 my-8">
              <FcOnlineSupport className="text-5xl m-auto" />
              <h1 className="text-2xl my-2 font-bold text-white">
                Supportive Community
              </h1>
              <p className=" text-grey">
                Join a vibrant and supportive learning community where students
                can connect, collaborate, and learn from each other, creating a
                network that extends beyond the classroom."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
