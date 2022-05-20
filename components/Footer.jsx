import React from "react";
import { Facebook, Instagram, Logo2, Twitter } from "./icons";
import { RoundedIcon } from "./RoundedIcon";

const FooterLinks = [
  {
    head: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    head: "Contact",
    links: ["Help/FAQ", "Press", "Affiliates"],
  },
  {
    head: "More",
    links: ["Airliefees", "Airline", "Low fare tips"],
  },
];
function Footer() {
  return (
    <div className="container mx-auto grid md:grid-cols-10 md:grid-rows-2 md:items-start mt-20 md:mt-28 lg:mt-40">
      <div className="md:col-span-4 lg:col-span-3">
        <Logo2 className="mx-auto md:mx-0" />
        <p className="text-sm mt-2 md:mt-8 text-center md:text-left">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div className="md:col-span-5 md:row-span-2 lg:col-span-4 flex flex-col md:flex-row items-center justify-around mb-2">
        {FooterLinks.map((link,i) => {
          return (
            <div className="text-center md:text-left" key={i}>
              <h1 className="font-bold">{link.head}</h1>
              <div className="flex flex-col gap-2 mt-4">
                {link.links.map((link,index) => {
                  return (
                    <a href="#" className="font-light " key={index}>
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center md:col-span-4  md:block lg:col-span-3">
        <div className="flex gap-2">
          <div className="w-10 h-10 shadow-md bg-white grid place-items-center rounded-full">
            <Facebook />
          </div>
          <div className="w-10 h-10 shadow-md angular grid place-items-center rounded-full">
            <Instagram />
          </div>
          <div className="w-10 h-10 shadow-md bg-white grid place-items-center rounded-full">
            <Twitter />
          </div>
        </div>
        <h1 className="text-lg">Discover our app</h1>
        <div className="flex gap-4">
          <StoreBtn
            Icon={<PlayStore className="w-6 h-6" />}
            headText="get it on"
            footText="google play"
          />
          <StoreBtn
            Icon={<AppleStore className="w-6 h-6" />}
            headText="Available on the"
            footText="Apple Store"
            play={false}
          />
        </div>
      </div>
    </div>
  );
}
function PlayStore({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_521)">
        <path
          d="M11.5073 10.0018L1.46381 19.673C0.993483 19.3516 0.714243 18.817 0.719181 18.2473V1.75626C0.714243 1.18663 0.993483 0.65199 1.46381 0.330566L11.5073 10.0018Z"
          fill="#2196F3"
        />
        <path
          d="M15.0217 6.62364L11.5074 10.0018L1.46387 0.330532C1.50171 0.301203 1.54113 0.273918 1.58191 0.248803C2.11272 -0.0729183 2.77574 -0.0833047 3.31639 0.22156L15.0217 6.62364Z"
          fill="#4CAF50"
        />
        <path
          d="M19.2807 10.0017C19.2873 10.6447 18.9379 11.2387 18.3727 11.5454L15.0218 13.3798L11.5074 10.0017L15.0218 6.62354L18.3727 8.45788C18.9379 8.76462 19.2873 9.3586 19.2807 10.0017Z"
          fill="#F0BB1F"
        />
        <path
          d="M15.0217 13.3798L3.31639 19.7819C2.77455 20.0821 2.11404 20.0717 1.58191 19.7547C1.54113 19.7296 1.50171 19.7023 1.46387 19.6729L11.5074 10.0017L15.0217 13.3798Z"
          fill="#F15A2B"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_521">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function AppleStore({className = ""}) {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.78926 15.9998C2.40798 15.9861 0.438232 11.1251 0.438232 8.64954C0.438232 4.60566 3.47183 3.72035 4.64095 3.72035C5.16783 3.72035 5.73042 3.92725 6.22664 4.11035C6.57364 4.23807 6.93251 4.36991 7.13211 4.36991C7.25158 4.36991 7.53311 4.25775 7.78167 4.15935C8.31176 3.94832 8.97139 3.68604 9.73951 3.68604C9.74089 3.68604 9.74273 3.68604 9.74408 3.68604C10.3176 3.68604 12.0567 3.81191 13.1022 5.38204L13.3471 5.75007L12.9947 6.01604C12.4911 6.39597 11.5724 7.08904 11.5724 8.46188C11.5724 10.0878 12.6129 10.7132 13.1128 11.0139C13.3334 11.1467 13.5618 11.2835 13.5618 11.5829C13.5618 11.7784 12.0018 15.9756 9.7363 15.9756C9.18195 15.9756 8.79011 15.809 8.44448 15.662C8.09476 15.5133 7.79308 15.3851 7.29458 15.3851C7.04189 15.3851 6.72236 15.5046 6.38408 15.6314C5.9218 15.8039 5.39855 15.9998 4.80483 15.9998H4.78926Z"
        fill="white"
      />
      <path
        d="M9.97954 0C10.0385 2.12737 8.51713 3.60325 6.9975 3.51069C6.74709 1.81297 8.51694 0 9.97954 0Z"
        fill="white"
      />
    </svg>
  );
}
function StoreBtn({ Icon, headText, footText, play = true }) {
  return (
    <div className="rounded-3xl bg-black text-white flex py-1 px-3 items-center gap-0.5">
      {Icon}
      <div className="flex flex-col">
        <h3 className={`${play ? "uppercase text-bold text-xs" : "text-xs font-bold"}`}>
          {headText}
        </h3>
        <h2 className={`${play ? "font-light text-xs" : "font-bold text-xs"}`}>
          {footText}
        </h2>
      </div>
    </div>
  );
}
export default Footer;
