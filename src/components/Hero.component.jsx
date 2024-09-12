import hero from "../assets/3dwoman.png"



const Hero = () => {

  

  return (
    <section>
      <div className="w-full flex md:flex-row-reverse flex-col">
        <img src={hero} className="md:h-[700px] md:w-[60%]" />
        <div className="md:mt-[100px] ml-2 text-3xl font-bold">
          <h1 className="md:text-6xl text-4xl">
            <span className="text-buttons_1 md:text-7xl text-5xl">
              Level-Up
            </span>{" "}
            your skills in a new and unique way at{" "}
            <span className="md:text-7xl text-5xl text-[#1c3fbd] font-gelasio">
              S<span className=" text-buttons_1 md:text-7xl text-5xl">i</span>
              <span className=" text-buttons_2 md:text-7xl text-5xl">i</span>
              <span className=" text-twitter md:text-7xl text-5xl">T</span>
            </span>
          </h1>
          <p className="text-text_color2 mt-5">
            Explore a transformative approach to skill development in our
            institution. Uncover a new realm of learning experiences and elevate
            your expertise in unique ways
          </p>
          <button className="btn-dark mt-10">Explore Now →</button>
        </div>
      </div>
      <div className="flex justify-between items-center md:mx-4 mt-4">
        <div className="w-[200px] bg-transparent shadow-xl shadow-dark-grey py-4 text-center">
          <span className="text-2xl text-buttons_2 font-bold">500+</span>
          <br /> Students Certified
        </div>
        <div className="w-[200px] bg-transparent shadow-xl shadow-dark-grey py-4 text-center">
          <span className="text-2xl text-buttons_2 font-bold">100+</span>
          <br /> HAPPY LEARNERS
        </div>
        <div className="w-[200px] bg-transparent shadow-xl shadow-dark-grey py-4 text-center">
          <span className="text-2xl text-buttons_2 font-bold">50+</span>
          <br /> Different Courses
        </div>
      </div>
    </section>
  );
};

export default Hero;
