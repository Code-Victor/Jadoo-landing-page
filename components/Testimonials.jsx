import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";

const Testimonies = [
  {
    name: "Mike Taylor",
    city: "Lahore, Pakistan",
    testimony:
      "On the Windows talking painted pasture yet its express parties use.Sure last upon he same as knew next. Of believed or diverted no.",
    img: "images/ava1.png",
  },
  {
    name: "John Ross",
    city: "London, UK",
    testimony:
      "On the Windows talking painted pasture yet its express parties use.Sure last upon he same as knew next. Of believed or diverted no.",
    img: "images/ava2.png",
  },
  {
    name: "Sydney Wills",
    city: "Washighton, DC",
    testimony:
      "On the Windows talking painted pasture yet its express parties use.Sure last upon he same as knew next. Of believed or diverted no.",
    img: "images/ava3.png",
  },
];
function getNextNo(no) {
  if (no === Testimonies.length - 1) {
    return 0;
  }
  return no + 1;
}
function getPrevNo(no) {
  if (no === 0) {
    return Testimonies.length - 1;
  }
  return no - 1;
}
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(0);
  const [increased, setIncreased] = useState(false);
  const TestimonyCards = Testimonies.map((test, i) => {
    return <TestimonyCard index={i} increased={increased} key={i} />;
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto container px-4 mt-8">
      <Section
        title={"TESTIMONIALS"}
        headText="What People Say About Us."
        className="lg:col-span-2 "
        textAlign="left"
      >
        <Loader index={testimonials} className=" pt-20 justify-center lg:justify-start lg:pt-40"/>
      </Section>

      <div className="lg:col-span-3 pt-6 pl-6 flex flex-col md:flex-row my-auto ">
        <div className="lg:flex-1">
            {TestimonyCards[testimonials]}
        </div>
        <div className="flex justify-center items-center gap-4  md:block md:space-y-4 md:my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              " h-6 w-6  -rotate-90 md:rotate-0" 
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              setTestimonials((testimonials) => {
                setIncreased(false);
                return getPrevNo(testimonials);
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
          "h-6 w-6 -rotate-90 md:rotate-0"
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              setTestimonials((testimonials) => {
                setIncreased(true);
                return getNextNo(testimonials);
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

function TestimonyCard({ index, increased }) {
  if (increased) {
    return (
      <div className="w-[85%] -mb-24 md:h-full" key={index}>
        <motion.div
          className="filter rounded-[10px] bg-white px-3 md:px-8 w-full  max-w-[600px] pb-2 md:pb-9 border  z-10 relative "
          initial={{ x: 50, y: 80,zIndex:1 }}
          animate={{ x: 0, y: 0 ,zIndex:10}}
          exit={{ x: -226, opacity: 0 }}
        >
          <Avatar
            img={Testimonies[index].img}
            className="-ml-14 -mt-6 w-14 h-14"
          />
          <p className="font-medium mb-9">&quot;{Testimonies[index].testimony}&quot;</p>
          <div>
            <h1 className="font-bold mb-1">{Testimonies[index].name}</h1>
            <p className="font-medium text-sm">{Testimonies[index].city}</p>
          </div>
        </motion.div>
        <motion.div
          className=" rounded-[10px] bg-white px-3 md:px-8 w-full max-w-[600px] pb-2 md:pb-9 border border-gray-600 relative lead"
          initial={{ x: 0, y: -200,zIndex:10 }}
          animate={{ x: 50, y: -146,zIndex:1 }}
        >
          <Avatar
            img={Testimonies[getNextNo(index)].img}
            className="-ml-14 -mt-6 w-14 h-14"
          />
          <p className="font-medium mb-9">
          &quot;{Testimonies[getNextNo(index)].testimony}&quot;
          </p>
          <div>
            <h1 className="font-bold mb-1">
              {Testimonies[getNextNo(index)].name}
            </h1>
            <p className="font-medium text-sm">
              {Testimonies[getNextNo(index)].city}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="w-[85%] -mb-24"key={index}>
      <motion.div
        className="filter rounded-[10px] bg-white px-3 md:px-8 max-w-[600px] pb-2 md:pb-9 border  z-10 relative lead "
        initial={{ x: 10, y: 10,zIndex:0 }}
        animate={{ x: 0, y: 0 ,zIndex:10}}
      >
        <Avatar
          img={Testimonies[index].img}
          className="-ml-14 -mt-6 w-14 h-14"
        />
        <p className="font-medium mb-9">&quot;{Testimonies[index].testimony}&quot;</p>
        <div>
          <h1 className="font-bold mb-1">{Testimonies[index].name}</h1>
          <p className="font-medium text-sm">{Testimonies[index].city}</p>
        </div>
      </motion.div>
      <motion.div
        className=" rounded-[10px] bg-white px-3 md:px-8 max-w-[600px] pb-2 md:pb-9 border border-gray-600 relative trail"
        initial={{ x: 0, y: -226 ,zIndex:10}}
        animate={{ x: 50, y: -146,zIndex:0 }}
        
      >
        <Avatar
          img={Testimonies[getNextNo(index)].img}
          className="-ml-14 -mt-6 w-14 h-14"
        />
        <p className="font-medium mb-9">
        &quot;{Testimonies[getNextNo(index)].testimony}&quot;
        </p>
        <div>
          <h1 className="font-bold mb-1">
            {Testimonies[getNextNo(index)].name}
          </h1>
          <p className="font-medium text-sm">
            {Testimonies[getNextNo(index)].city}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Loader({ index ,className=''}) {
  return (
    <motion.div className={"flex gap-4 items-center justify-items-center "+className } layout>
      {Testimonies.map((_, i) => {
        if (i === index) {
          return (
            
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full bg-gray-900"
                layout
              />
          );
        }
        return (
          <motion.div
            className={"bg-gray-300 h-4 w-4 rounded-full"}
            key={i}
            layout
          ></motion.div>
        );
      })}
    </motion.div>
  );
}
export default Testimonials;
