import Lottie from "react-lottie";

import React, { useState } from "react";
import animationData from "./ham.json";
function Hamburger() {
  const [clicked, setClicked] = useState(false);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendeer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "bg-indigo-900 ml-auto",
    },
  };

  return (
    <div
      onClick={() => {
        setClicked(!clicked);
        console.log()
      }}
    >
      <Lottie
        options={defaultOptions}
        height={90}
        width={90}
        isStopped={clicked}
        direction={clicked? 1:-1}
      />
    </div>
  );
}

export default Hamburger;
