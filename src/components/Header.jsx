import React from "react";
import { MdNavigateNext } from "react-icons/md";
import "../App.css";

export const Header = () => {
  return (
    <>
      <div className=" md:h-[500px] py-5 md:p-0">
        <div className="  flex  justify-evenly items-center flex-col md:flex-row  ">
          <div className="  flex items-end">
            <h1
              className="flex text-3xl text-start flex-col md:text-4xl font-[400]   mt-20 animation"
              style={{ lineHeight: "40px" }}
            >
              Find the Best <span>Activity For your </span>
              <span className="flex justify-between items-center">
                Child!
                <div className=" w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center mb-2 mt-5 ">
                  <MdNavigateNext className="w-full " />
                </div>
              </span>
            </h1>
          </div>
          <div className="  flex justify-center items-center animationRight">
            <img
              src="https://t4.ftcdn.net/jpg/02/14/23/63/360_F_214236353_pEeWTiAK3VSaPxE1cOUwmGualuNRVp4A.jpg"
              alt="image"
              className="w-[70%] bg-white"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 flex-col md:flex-row text-white font-bold mt-20">
          <button className="bg-yellow-400 rounded-half  px-20 py-3 md:px-12 md:py-2 rounded-2xl buttonAnimation hover:bg-yellow-500 hover:text-gray-800 transition-colors duration-300">
            For Academies
          </button>
          <button className="bg-yellow-400 rounded-half  px-14 py-3 md:px-8 md:py-2 rounded-2xl animationRight hover:bg-yellow-500 hover:text-gray-800 transition-colors duration-300">
            SpArts in your Home
          </button>
        </div>
      </div>
    </>
  );
};
