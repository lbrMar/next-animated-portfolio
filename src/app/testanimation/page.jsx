"use client"

import { motion } from "framer-motion"

const TestPage = () => {

  const variants = {
    variant1: {
      x: 400,
      y: 300,
    },
    variant2: {
      x: 200,
      y: -300,
      rotate: 75,
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-64px)]">
      <motion.div 
        className="w-96 h-96 bg-red-400"
        initial={{ x: -100 }}
        animate={variants.variant2}
        transition={{ duration: 1.5 }}
      >
      </motion.div>
    </div>
  )
}

export default TestPage
