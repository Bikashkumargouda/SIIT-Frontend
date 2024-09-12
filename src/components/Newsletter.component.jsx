import { IoIosSend } from "react-icons/io";

export const Newsletter = () => {


  const handleInput = () =>{
    document.getElementById("emailInput").value = "";
  }

  return (
    <div className=" bg-text_color3 mt-10">
      <section>
        <div className="md:flex justify-between items-center gap-5 md:p-10 p-3 md:py-20 ">
          <div className="">
            <h1 className="md:text-3xl text-lg font-bold text-white">
              Newsletter - Stay tune and get the latest <br /> update
            </h1>
          </div>
          <div className="md:w-[30%] mt-3">
            <div className="flex justify-between px-3 relative items-center bg-white">
              <input
                className="w-[70%] float-right md:p-3 p-2 outline-none"
                id="emailInput"
                type="email"
                placeholder="Enter Email Address"
              />
              <button onClick={handleInput}>
              <IoIosSend  className="text-3xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
