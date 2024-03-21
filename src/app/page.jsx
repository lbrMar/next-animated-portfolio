"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full w-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row lg:mt-6 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
        {/* IMAGE CONTAINER */}
        <div className="w-3/4 h-1/3 sm:w-1/2 md:w-2/5 lg:w-1/2 pb-14">
          <img 
            src="/hero.png" 
            alt="hero" 
            className="object-contain" 
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:w-1/2 flex flex-col gap-4 items-center jsutify-center p-2">
          <h1 className="text-3xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          <p className="md:text-lg">            
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          <div className="flex gap-4">
            <Link 
              className="rounded bg-black text-white p-2 text-sm"
              href="/portfolio"
            >
              View My Work
            </Link>
            <Link 
              className="rounded bg-white ring-1 p-2 text-sm"
              href="/contact"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
