import React from "react";

const cards = [
  {
    className:
      " h-12 w-12 bg-orange-100 rounded-tl-lg rounded-br-3xl absolute -z-10 right-[32%] bottom-[15%]",
    img: "./images/satellite-dish.svg",
    head: "calculated weather",
    content: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    className:
      " h-12 w-12 bg-orange-100 rounded-tl-sm rounded-tr-xl rounded-bl-3xl absolute -z-10 left-[33%] top-[35%]",
    img: "./images/plane.svg",
    head: "best flight",
    content: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    className:
      " h-12 w-12 bg-orange-100 rounded-tl-sm  rounded-tr-3xl absolute -z-10 right-[32%] top-[15%]",
    img: "./images/mic.png",
    head: "local events",
    content:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    className:
      " h-12 w-12 bg-orange-100 rounded-tr-lg rounded-bl-3xl absolute -z-10 right-[32%] bottom-[15%]",
    img: "./images/setting.svg",
    head: "customization",
    content: "We deliver outsourced aviation services for military customers",
  },
];
const Category = () => {
  return (
    <div className="grid px-8 md:px-4 container grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto mb-20">
      {cards.map((card,index) => {
        return <CategoryCards {...card} key={index} />;
      })}
    </div>
  );
};

function CategoryCards({ className, img, head, content }) {
  return (
    <div className="relative group">
      <div className="px-10 py-5 rounded-3xl text-center flex flex-col gap-4 group-hover:shadow-2xl h-full re z-10 group-hover:bg-white transition-all">
        <div className="h-[50%] grid place-items-center rounded-tl relative z-10">
          <img src={img} alt={head} className="mx-auto" />
          <div className={className}></div>
        </div>
        <h1 className="text-lg capitalize font-bold">{head}</h1>
        <p className="font-semibold text-[#5E6282]">{content}</p>
      </div>
      <div className="absolute -bottom-10 -left-10 -z-10 bg-orange-900 h-16 w-16 rounded-tl-3xl rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default Category;
