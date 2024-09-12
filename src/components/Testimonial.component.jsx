import React from "react";
// import Rating from "react-rating-stars-component";// Adjust the import path as needed
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";



 const Testimonial = () => {
  const testimonials = [
    {
      name: "Raj Kishore Panda",
      profileImage:
        "https://lh3.googleusercontent.com/a/ACg8ocLbM3Bx6dAZJeiJruyRa28hzWV_0frHWq2qRXx9q0Woa-fW1A=w75-h75-p-rp-mo-br100",
      rating: 4.5,
      message:
        "The institute is best institute of our locality. faculities are well behaved and teach well. It is a well maintained institute.",
    },
    {
      name: "Beenapani Nayak",
      profileImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKZ252maztLpoBIpBqZnxStyZeJzugXO6Q9Agd296gCMlYWjaI=w75-h75-p-rp-mo-br100",
      rating: 4.5,
      message:
        "I finished this institution's salesforce course.  it was an excellent organization. The students received excellent instruction from them. The instructor was superb. I appreciate you giving me best coaching and career advice as I start my career...",
    },

    {
      name: "Sukanta Panigrahi",
      profileImage:
        "https://lh3.googleusercontent.com/a/ACg8ocLImTv_aH_9nkX9v5mbQo-Wwy0q9wRUEEMnUVcG6J3loMQxYis=w75-h75-p-rp-mo-br100",
      rating: 4.5,
      message: "Very good institute in our area for computer learning.",
    },
    {
      name: "Uma shankar Panda",
      profileImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjUjMSSqm4NTQ68wtebuRQHvuAJY7KzwWTS4qxwqf2V-1x4gtc8=w75-h75-p-rp-mo-br100",
      rating: 4.5,
      message:
        "This is the best computer institute in sorada,they provide all type of courses there.all the faculty are very helpful.",
    },
    // Add more testimonials as needed
  ];

  return (
    <section>
      <h1 className="text-center my-16 font-bold md:text-5xl text-4xl">
        Student <span className=" text-buttons_1 md:text-5xl text-4xl">Testimonials</span>
      </h1>
      <Swiper
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide>
            <Testimonials key={index} {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};


 const Testimonials = ({ name, profileImage, rating, message }) => {
  return (
    <div className=" text-center items-center flex flex-col shadow-2xl">
      <div className="flex items-center gap-10 ">
        <div className=" w-24 h-24 rounded-full overflow-hidden">
          <img src={profileImage} alt={`${name}'s profile`} />
        </div>
        <div>
          <p className=" text-xl font-bold">{name}</p>
          <span className=" italic text-sm">Student</span>
        </div>
      </div>
      <div className="rating">
        {/* <Rating
          count={5}
          value={rating}
          size={24}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        /> */}
      </div>
      <p className="my-8 pb-5 md:w-96  h-40 px-5">"{message}"</p>
    </div>
  );
};

export default Testimonial