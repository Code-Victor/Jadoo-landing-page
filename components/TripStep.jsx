import React from "react";

function TripStep({ headText, paragraph, icon, background }) {
  function className() {
    let name = `w-10 h-10 rounded-lg grid place-items-center  bg-${background}`;
    return <div className={name}>{icon}</div>;
  }
  return (
    <div className="flex gap-5 w-full mb-12 mt-4">
      <div className={`min-w-[40px] h-[40px] flex justify-center items-center rounded-lg ${"bg-"+background}`}>
        {icon}
      </div>
      <div className="flex flex-col text-[#5E6282] gap-1 max-w-[400px]">
        <h1 className="font-bold">{headText}</h1>
        <p>{paragraph}</p>
      </div>
      {/* <div className="bg-icons-1 bg-icons-2 bg-icons-3"></div> */}
    </div>
  );
}

export default TripStep;
