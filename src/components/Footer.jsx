import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className=" h-[300px] bg-yellow-500 pb-10 pt-10">
        <div className="flex flex-col justify-center items-center text-white ">
          <p className="font-bold text-2xl space-x-2 tracking-wide">
            Stay Updated
          </p>
          <p className="text-[14px]">
            Get the latest update on academies near you!{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-16">
          <input
            type="email"
            placeholder="E-mail"
            className="pl-2 rounded-lg pt-1 pb-1 md:w-[250px] w-[300px]"
          />
          <button className="px-6 py-2 bg-sky-500 rounded-lg w-[300px] md:w-[200px] text-white hover:bg-sky-600 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </footer>
    </>
  );
};
