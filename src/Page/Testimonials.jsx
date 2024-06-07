import React from "react";
// import { Slider } from "../Components/Slider";
import { SliderTestimonial } from "../components/Slider2";

export const Testomonial = () => {
  return (
    <>
      <div className=" h-[450px]  pt-10 pb-14">
        <div className=" flex justify-end items-end text-end mr-5 md:mr-10 ml-5">
          <div className=" w-36">
            <h1 className="text-yellow-400 font-bold text-lg ">
              Happy Kids, Satisfied Parents
            </h1>
          </div>
        </div>
        <div className="flex justify-start mt-5">
          <SliderTestimonial />
        </div>
      </div>
    </>
  );
};
