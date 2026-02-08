
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"

// Added Variants type to containerVariants for better type safety
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Added Variants type and cast the ease array to any to resolve Type 'number[]' is not assignable to type 'Easing'
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    // Use 'as any' for the bezier array to match Framer Motion's internal Easing type expectations in a Variants object
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  },
};
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-black border-neutral-800 relative overflow-hidden group">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
        >
          <div className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              <span className="font-['Dancing_Script'] text-indigo-400 block text-4xl md:text-6xl mb-2 ml-1">Crafting Spatial</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
                Digital Stories <br className="hidden md:block" /> & Interfaces
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 text-neutral-400 text-lg max-w-lg leading-relaxed">
              I am a freelance creative developer specializing in building high-fidelity 
              3D web experiences. I merge art and code to create immersive digital 
              journeys that captivate users across the globe.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
               <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                 View Portfolio
               </button>
               <button className="px-6 py-3 rounded-full bg-transparent border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors">
                 Get in Touch
               </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right content */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 -top-[20%] -bottom-[20%] -right-[30%] -left-[10%] md:-inset-[200px]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
