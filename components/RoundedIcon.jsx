import React from "react";

export function RoundedIcon({ img, className = "" }) {
  return (
    <div
      className={"rounded-full grid place-items-center " + className}
    >
      <img src={img} alt="" className="" />
    </div>
  );
}
