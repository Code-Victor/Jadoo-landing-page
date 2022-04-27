import React from "react";
import { RoundedIcon } from "./RoundedIcon";
import toast, { Toaster } from 'react-hot-toast';

function Subscribe() {
  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Thank you for subscribing!')

  }
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="rounded-tl-[50px] md:rounded-tl-[90px] lg:rounded-tl-[130px] rounded-[20px] bg-indigo-100 py-8 px-2 w-[calc(100%-12px)] md:w-full  relative mt-16">
        <RoundedIcon
          img="./images/send-gr.svg"
          className="bg-gradient-to-tr from-indigo-900 to-indigo-500 w-14 h-14 md:w-16 md:h-16 absolute -right-3 -top-7 md:-right-8 md:-top-8"
        />
        <h4 className="text-center text-[#5E6282] text-semibold text-xl md:text-3xl max-w-[860px] mx-auto mb-10">
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h4>
        <form className="flex flex-col md:flex-row gap-4 justify-center w-full" onSubmit={e=>handleSubmit(e)}>
          <label className="flex pl-4 h-14 md:h-auto items-center bg-white rounded-lg gap-2 w-full max-w-[420px] mx-auto md:mx-0 focus-within:border-2 border-black overflow-clip" >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                stroke="#39425D"
                stroke-linecap="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="20"
                height="17"
                rx="4.5"
                stroke="#39425D"
              />
            </svg>
            <input type="email" placeholder="Your email" className="h-full flex-1 pl-2 focus:outline-none group-focus:border-2 border-black"/>
          </label>
          <button type="submit" className="w-40 mx-auto py-3 md:mx-0 md:w-auto md:px-10 md:py-4 rounded-lg bg-gradient-to-tr from-orange-900 to-orange-500">Subscribe</button>
        </form>
      </div>
      <Toaster position="bottom-center" toastOptions={{success:{duration:3000}}} />
    </div>
  );
}

export default Subscribe;
