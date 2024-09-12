import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../App";
import { IoClose } from "react-icons/io5";

const EnrolePopup = () => {

  const form = useRef();
  const { showPopup, setShowPopup } = useContext(UserContext);

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
        //   form.current.reset();
        setShowPopup(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong ⚠️");
        }
      );
  };

  return (
    <div className="absolute top-0 z-20 w-full h-screen bg-[#00000090] grid">
      <Toaster />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col py-6 px-7 rounded-lg animate-fadeIn-Anim transition-[0.5s]"
      >
        <div onClick={()=>setShowPopup(false)} className="absolute top-2 right-2  cursor-pointer">
          <IoClose className="text-3xl" />
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="">
            <label htmlFor="" className="block text-black font-extrabold">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="exampl@gmail.com"
              className="rounded h-11 w-full outline-none bg-transparent text-lg text-footer_text_color1 pl-4"
            />
          </div>
          <div className="">
            <label htmlFor="" className="block  text-black font-extrabold">
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
          <label htmlFor="" className="block  text-black font-extrabold">
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
          <label htmlFor="" className="block  text-black font-extrabold">
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
  );
};

export default EnrolePopup;
