"use client"

import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full w-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen w-screen">Hello World</div>
    </motion.div>
  )
};

export default ContactPage
