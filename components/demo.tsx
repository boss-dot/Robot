'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any },
  },
};
 
export function SplineSceneBasic({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <Card className={`w-full h-[600px] relative overflow-hidden group transition-all duration-700 ${theme === 'dark' ? 'bg-black border-neutral-800' : 'bg-white border-slate-200 shadow-2xl shadow-slate-200'}`}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={theme === 'dark' ? "white" : "#6366f1"}
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center backdrop-blur-sm md:backdrop-blur-none transition-colors duration-700 ${theme === 'dark' ? 'bg-black/50 md:bg-transparent' : 'bg-white/40 md:bg-transparent'}`}
        >
          <div className="space-y-6">
            <motion.h1 variants={itemVariants} className={`text-5xl md:text-7xl font-bold tracking-tight leading-none bg-clip-text text-transparent transition-all duration-700 ${theme === 'dark' ? 'bg-gradient-to-b from-neutral-50 to-neutral-500' : 'bg-gradient-to-b from-slate-900 to-slate-500'}`}>
              Crafting Spatial <br className="hidden md:block" /> Digital Stories & Experiences
            </motion.h1>
            <motion.p variants={itemVariants} className={`mt-4 text-lg max-w-lg leading-relaxed transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-400' : 'text-slate-600'}`}>
              I am a freelance creative developer specializing in high-fidelity 
              3D web experiences. I bridge the gap between imagination and browser 
              to deliver immersive journeys that convert and captivate.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
               <button className={`px-6 py-3 rounded-full font-semibold transition-all duration-700 ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                 View Portfolio
               </button>
               <button className={`px-6 py-3 rounded-full font-semibold border transition-all duration-700 ${theme === 'dark' ? 'bg-transparent border-neutral-700 text-white hover:bg-neutral-900' : 'bg-transparent border-slate-300 text-slate-700 hover:bg-slate-100'}`}>
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