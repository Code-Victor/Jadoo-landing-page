import React from "react";
import NavBar from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="">
      <div className="w-[500px] h-[500px] rounded-full bg-indigo-300 absolute top-0 -left-[400px] blur-3xl -z-10"></div>
      <img
        src="./images/Decore.svg"
        className="absolute top-0 right-0 w-[42%] min-w-[240px] max-w-[600px]  -z-10"
        alt=""
      />
      <NavBar />
      <div className="container mx-auto grid md:grid-cols-2 items-center px-4 mt-4" >
        <motion.div className=" " initial={{x:-100,opacity:0}} transition={{duration: 1 }} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <h3 className="text-orange-900 text-sm md:text-base uppercase font-bold mb-1 md:mb-4 lg:mb-6">
            best destinations around the world
          </h3>
          <h1 className="text-4xl md:text-5xl w-[80%] md:w-full lg:text-[84px] font-bold font-serif mb-7">
            Travel,
            <span className="relative inline-block ">
              <h1 className="z-1 block enjoy">enjoy</h1>
            </span>{" "}
            <br className="md:hidden" />
            and enjoy and live a new and full life
          </h1>
          <p className="font-medium mb-8">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex gap-4 items-center">
            <motion.button whileTap={{scale:0.9}}  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-6 rounded-lg">
              Find out more
            </motion.button>
            <div className="flex items-center gap-3">
              <motion.button whileTap={{scale:0.9}} className="px-4 py-4 bg-orange-900 rounded-full ">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                    fill="white"
                  />
                </svg>
              </motion.button>
              Play Demo
            </div>
          </div>
        </motion.div>
        <motion.div initial={{x:100,opacity:0}} transition={{delay:1, duration: 1 }} whileInView={{opacity:1,x:0}}  className="h-full w-[80%] mx-auto md:w-full md:h-auto lg:w-full">
          <Image
            src="/images/Traveller 1.png"
            height={764}
            width={765}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
