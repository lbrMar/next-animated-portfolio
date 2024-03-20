"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

import NavBar from "@/components/NavBar/NarvBar"

const TransitionProvider = ({ children }) => {

  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div 
        key={pathName}
        className="w-screen h-full overflow-x-hidden bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div 
          className="w-screen h-screen bg-black fixed rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        />
        <motion.div
          className="m-auto w-fit h-fit fixed top-0 bottom-0 right-0 left-0 z-50 text-2xl sm:text-4xl md:text-8xl font-bold text-white cursor-default"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ 
            delay: 0.5,
            duration: 1,
            ease: "easeInOut"
          }}
        >
          {pathName === "/" ? "HOME" : pathName.slice(1).toUpperCase()}
        </motion.div>
        <motion.div 
          className="w-screen h-screen bg-black fixed rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ 
            height: "0vh", 
            transition: { delay: 0.8 } 
          }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh - 96px)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
