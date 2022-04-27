import React from "react";

export function Avatar({ img ,className=""}) {
  return <img src={img} alt="" className={"w-12 h-12 rounded-full "+className} />;
}
