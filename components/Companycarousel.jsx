import React from "react";
const companyLogos = [
  "./images/image 27.png",
  "./images/image 28.png",
  "./images/image 29.png",
  "./images/image 30.png",
  "./images/image 31.png",
];
function Companycarousel() {
  return (
    <div className="container mx-auto mt-2 md:mt-4 px-4 lg:px-0 flex w-full justify-around flex-wrap">
      {companyLogos.map((logo, i) => {
        return (
          <div key={i} className="grid place-items-center h-14 bg-white rounded-lg filter-hover " >
            <img src={logo} alt="company" />
          </div>
        );
      })}
    </div>
  );
}

export default Companycarousel;
