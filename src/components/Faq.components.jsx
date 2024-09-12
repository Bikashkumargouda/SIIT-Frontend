import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export const Faq = () => {
  const data = [
    {
      title: "What is SIIT?",
      para: "Smart institute of information technology(SIIT) is a computer educational Institute provide various Technology courses with Ceritfication ",
    },
    {
      title: "What is OS-CIT?",
      para: "OS-CIT is an Information Technology (IT) literacy course started by OKCL in the year 2011. To Conduct IT Literacy Course recognized by Government of Odisha.",
    },
    {
      title: "How do I know the right courses for me?",
      para: "Make contact with SIIT staff for better Knowledge ",
    },
    {
      title: "Do I get a Certificate for every course I take?",
      para: " Yes, If you secure minimum 20 marks out of 50 marks in the internal Exam.",
    },
    {
      title: "What are the requirements to start?",
      para: " If you have 10th or Higher Qualification then you can start.",
    },
    {
      title: "Are the course notes available in a digital format?",
      para: " Yes, All the notes are available",
    },
  ];

  const [toggle, setToggle] = useState(Array(data.length).fill(true));

  const handleToggle = (index) => {
    const newToggle = [...toggle];
    newToggle[index] = !newToggle[index];
    setToggle(newToggle);
  };

  

  return (
    <section>
      <h1 className="text-center font-semibold md:text-5xl text-4xl my-16">
        Frequently{" "}
        <span className="text-buttons_1 md:text-5xl text-4xl"> Asked Questions</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <article
            key={index}
            className="flex p-8 items-center gap-5 h-fit bg-text_color3 text-white cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div>
              {toggle[index] ? (
                <FaPlus className="text-xl" />
              ) : (
                <FaMinus className="self-start text-xl" />
              )}
            </div>
            <div>
              <h1 className="md:text-xl">{item.title}</h1>
              <p className={`mt-3 ${toggle[index] ? "hidden" : "block"}`}>
                {item.para}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

