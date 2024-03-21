"use client"

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import BrainSvg from "@/components/BrainSvg/BrainSvg";

const PortfolioPage = () => {

  const scrollContainerRef = useRef(null);
  const {scrollYProgress} = useScroll({container: scrollContainerRef});

  return (
    <>
      <motion.div
        className="h-full w-screen"
        initial={{ y: "-200vh" }}
        animate={{ y: "0" }}
        transition={{ duration: 1 }}
       >
        <div className="h-screen w-screen">Hello World</div>
      </motion.div>
      <div className="h-[3000px] w-screen flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 block sticky top-0 h-screen">
          <BrainSvg scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </>
  )
};

export default PortfolioPage
