import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import AnimationWrapper from "../common/page-animation";
import hero from "../assets/hero3.jpg";

export const Contact = () => {
  document.title = "SIIT | Contact";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9nal8qq", "template_fe3mysf", form.current, {
        publicKey: "gYKHde-8JGqvxwZKO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong ⚠️");
        }
      );
  };
  return (
    <AnimationWrapper>
      <Toaster />
      <div>
        {/* top comp */}
        <div className="overflow-hidden md:h-[400px] relative">
          <img src={hero} className="w-fit" alt="img" />
          <div className="absolute top-0 left-0 w-full h-full bg-overlay bg-opacity-30 flex flex-col justify-center items-center">
            <h1 className="text-white text-5xl ">Contact Us</h1>
            <p className="text-xl text-white font-bold text-center">
              Don't Hesitate To Connect With Us
            </p>
          </div>
        </div>

        {/* mid comp */}
        <section>
          <div className="md:flex justify-center mt-20">
            <div className=" md:w-[50%]">
              <h1 className=" text-3xl font-bold my-2">Get In Touch</h1>
              <p className="my-6">
                We're here to help and answer any question you might have. If
                you have any questions or concerns, feel free to reach out to
                us.
              </p>

              <div className="flex flex-wrap justify-between py-2 gap-6 pr-3">
                <div className="flex items-center gap-2">
                  <div className=" bg-buttons_1 text-white rounded-md inline-block p-2">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h2 className=" font-bold">Phone</h2>
                    <p className=" text-footer_text_color1">(+91)7873987123</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className=" bg-buttons_1 text-white rounded-md inline-block p-2">
                    <IoMail />
                  </div>
                  <div>
                    <h2 className=" font-bold">Email</h2>
                    <p className=" text-footer_text_color1">
                      siitsurada@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className=" bg-buttons_1 text-white rounded-md inline-block p-2">
                    <IoLocationSharp />
                  </div>
                  <div>
                    <h2 className=" font-bold">Address</h2>
                    <p className=" text-footer_text_color1">
                      Main road Sorada, Ganjam, Odisha
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mr-7">
                  <div className=" bg-buttons_1 text-white rounded-md inline-block p-2">
                    <FaInstagram />
                  </div>
                  <div>
                    <h2 className=" font-bold">Instagram</h2>
                    <p className=" text-footer_text_color1">
                      @oscit_siit_surada
                    </p>
                  </div>
                </div>
              </div>

              <hr className=" h-[1px] w-[70%] my-8" />

              <div className="flex items-center gap-3">
                <h1 className="text-lg font-bold">Social Media</h1>
                <a
                  href="https://www.facebook.com/p/SIIT-100063805190257/"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <FaXTwitter />
                </a>
                <a href="https://www.youtube.com/@SIIT_Surada" target="_blank">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="p-8 bg-overlay rounded-md relative">
              <form ref={form} onSubmit={sendEmail}>
                <div className="md:flex gap-4 mt-2">
                  <div className="">
                    <label htmlFor="" className="block text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="exampl@gmail.com"
                      className="rounded h-11 w-full outline-none text-lg text-footer_text_color1 pl-4"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="" className="block text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="john smith"
                      className="rounded h-11 w-full outline-none text-lg text-footer_text_color1 pl-4"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="block text-white">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="user_phone"
                    placeholder="1234567899"
                    className="rounded h-11 w-full outline-none text-lg text-footer_text_color1 pl-4"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="block text-white">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="hi, Say something..."
                    className=" w-full rounded h-40 outline-none pl-4 pt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-buttons_1 px-4 py-2 rounded outline-none mt-4"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* bottom comp */}
          <div className="my-16 text-center">
            <h1 className="text-2xl my-2">Find Us on Google Maps</h1>
            <div className="rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.8722939592844!2d84.43073917552695!3d19.76057968159013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a22dbe182fed6f5%3A0xe75d12a0f7b85fc5!2sSmart%20Institute%20Of%20Information%20Technology%20(SIIT)!5e0!3m2!1sen!2sin!4v1709897549671!5m2!1sen!2sin"
                width={"100%"}
                height="430"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  );
};
