"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import NavLink from "@/components/NavBar/NavLink/NavLink"

const topMenuVariants = {
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255, 255, 255)",
  },
  closed: {
    rotate: 0,
  },
}

const centerMenuVariant = {
  opened: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
}

const bottomMenuVariants = {
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255, 255, 255)",
  },
  closed: {
    rotate: 0,
  },
}

const listVariants = {
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  closed: {
    x: "100vw",
  },
}

const listItemVariants ={
  opened: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -20,
    opacity: 0,
  },
}

const menuLinks = [
  {
    url: '/',
    title: 'Home',
    key: 0,
  },
  {
    url: '/about',
    title: 'About',
    key: 1,
  },
  {
    url: '/portfolio',
    title: 'Portfolio',
    key: 2, 
  },
  {
    url: '/contact',
    title: 'Contact',
    key: 3,
  }
]

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const onMenuClick = () => {
    setOpen(!open)
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
      {/* LINKS */}
      <div className="hidden md:flex gap-8 w-1/3">
        {menuLinks.map((link) => (
          <NavLink 
            menuLink = {link} 
            key={link.key}
          />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 items-center justify-center">
        <Link 
          className="text-sm bg-black rounded-md px-1 py-1 font-bold flex items-center justify-center"
          href="/"
        >
          <span className="text-white mx-1">LM</span>
          <span className="bg-white rounded-md m-0.5 p-2">mental</span>
        </Link>
      </div>
      {/* SOCIAL MEDIA LINKS */}
      <div className="hidden md:flex items-end justify-end gap-4 w-1/3">
        <Image src="/github.png" alt="github" width={24} height={24} />
        <Image src="/dribbble.png" alt="dribbble" width={24} height={24} />
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
      </div>
      {/* RESPONSIZE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button 
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={onMenuClick}
        >
          <motion.div 
            className="w-10 h-1  rounded bg-black origin-left"
            variants={topMenuVariants}
            animate={
              open ? 'opened' : 'closed'
            }
          >
          </motion.div>
          <div 
            className="w-10 h-1  rounded bg-black"
            variants={centerMenuVariant}
            animate={
              open ? 'opened' : 'closed'
            }
          >
          </div>
          <motion.div 
            className="w-10 h-1  rounded bg-black origin-left"
            variants={bottomMenuVariants}
            animate={
              open ? 'opened' : 'closed'
            }
          >
          </motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div 
            className="z-40 absolute top-0 left-0 flex flex-col items-center justify-center gap-8 w-screen h-[calc(100vh+128px)] bg-black text-2xl text-white"
            variants={listVariants}
            initial="closed"
            animate={
              "opened"
            }
          >
            {menuLinks.map((link) => (
              <motion.div
                key={link.key}
                variants={listItemVariants}
              >
                <Link 
                  href={link.url} 
                  onClick={onMenuClick}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NavBar
