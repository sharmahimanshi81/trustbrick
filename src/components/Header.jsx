
import React from 'react'
import Navbar from './navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='relative min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/mainpg.jpeg')" }} id='Header'>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar on top */}
      <Navbar />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative z-10 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
      >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]'>
          Explore homes that fit your dreams
        </h2>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded bg-white/10 backdrop-blur-sm hover:bg-white/20'>Projects</a>
          <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded hover:bg-blue-600'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
