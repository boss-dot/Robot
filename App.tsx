import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SplineSceneBasic } from './components/demo';
import { SpotlightInteractive } from './components/ui/spotlight-interactive';

const testimonials = [
  {
    quote: "Working with Kaelen felt like seeing the future of design. Our product launch was a massive success thanks to the 3D vision.",
    author: "Alex Rivera",
    role: "Lead Creative @ Atmos",
    rating: 5
  },
  {
    quote: "Kaelen's ability to visualize complex data in spatial dimensions is unparalleled. A true master of the modern web stack.",
    author: "Sofia Chen",
    role: "CEO @ Radiant Labs",
    rating: 5
  },
  {
    quote: "The spatial UI Kaelen built for us has set a new standard in our industry. It's not just a website; it's an experience.",
    author: "James Thorne",
    role: "Founder @ Echo spatial",
    rating: 5
  },
  {
    quote: "Precision, creativity, and speed. Kaelen is the freelance partner you dream of finding for high-end digital work.",
    author: "Mark S.",
    role: "Design Director @ Void",
    rating: 5
  }
];

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const SectionBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div
      animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-[150px]"
    />
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0.1 + Math.random() * 0.1 }}
        animate={{ y: ["-10%", "110%"], rotate: 360 }}
        transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear", delay: -Math.random() * 20 }}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{ filter: 'blur(1px)' }}
      />
    ))}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
  </div>
);

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SpotlightInteractive />
      </div>

      <header className="relative z-50 container mx-auto px-6 py-8 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
             <div className="w-4 h-4 bg-black rotate-45" />
           </div>
           <span className="font-bold text-xl tracking-wider uppercase">Kaelen.Dev</span>
        </motion.div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          {['Philosophy', 'Works', 'Testimonials', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-all text-sm font-medium border border-white/10">
          Book a Session
        </motion.button>
      </header>

      <main className="relative z-10">
        <motion.section initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }} className="container mx-auto px-6 pt-4 pb-24">
          <SplineSceneBasic />
        </motion.section>

        <motion.section id="philosophy" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative container mx-auto px-6 py-32 border-t border-neutral-900/50">
          <SectionBackground />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <motion.h2 variants={textItem} className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold italic">My Philosophy</motion.h2>
            <motion.h3 variants={textContainer} className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
              {"Building immersive bridges between human & machine.".split(" ").map((word, i) => (
                <motion.span key={i} variants={textItem} className="inline-block mr-3">{word}</motion.span>
              ))}
            </motion.h3>
            <motion.p variants={textItem} className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              I don't just build websites; I design digital sculptures that respond to touch, sound, and sight. My goal is to make the internet feel tangible again.
            </motion.p>
          </div>
        </motion.section>

        <motion.section variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative bg-neutral-950/50 py-20 border-y border-neutral-900">
          <SectionBackground />
          <div className="relative z-10 container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-widest text-neutral-600 mb-12">I've partnered with visionary teams at</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {['RADIANT', 'ATMOS', 'ECHO', 'VOID', 'CYPHER'].map((brand) => (
                <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-300 cursor-default">{brand}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="works" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative container mx-auto px-6 py-32">
          <SectionBackground />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold">Selected Works</h2>
              <h3 className="text-5xl font-bold italic">The Art of the Code</h3>
            </div>
            <p className="text-neutral-500 max-w-xs">A collection of experiments and commissioned pieces exploring spatial interfaces.</p>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Aether Flux", category: "3D Interaction / Spatial UI", image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1200&auto=format&fit=crop" },
              { title: "Prism Protocol", category: "WebGL / Motion Identity", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" },
              { title: "Onyx System", category: "Data Architecture / 3D", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200&auto=format&fit=crop" },
              { title: "Velvet UI", category: "Micro-Interactions / iOS", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" }
            ].map((work, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} transition={{ duration: 0.4 }} className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="p-8 space-y-2">
                  <span className="text-xs text-neutral-500 font-mono">{work.category}</span>
                  <h4 className="text-2xl font-bold">{work.title}</h4>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="testimonials" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative py-32 container mx-auto px-6 overflow-hidden">
          <SectionBackground />
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold italic">Partners</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter">Voices of Collaboration.</h3>
          </div>

          <div className="relative z-10 h-[450px] md:h-[350px] max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 rounded-[2.5rem] bg-neutral-900/40 backdrop-blur-xl border border-white/5 shadow-2xl text-center"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-indigo-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl md:text-4xl font-medium leading-tight text-neutral-200 italic mb-8">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-xl font-bold tracking-tight text-white">{testimonials[activeTestimonial].author}</p>
                  <p className="text-neutral-500 font-mono text-sm uppercase">{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setActiveTestimonial(idx)} className={`h-1.5 transition-all duration-500 rounded-full ${activeTestimonial === idx ? 'w-12 bg-white' : 'w-4 bg-neutral-800 hover:bg-neutral-600'}`} />
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative container mx-auto px-6 py-40">
          <SectionBackground />
          <div className="relative z-10 overflow-hidden rounded-[3rem] bg-neutral-900 border border-neutral-800 p-12 md:p-24 flex flex-col items-center text-center space-y-10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 opacity-50" />
            <h2 className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter max-w-4xl leading-[0.9]">
              LET'S BUILD SOMETHING EXTRAORDINARY.
            </h2>
            <p className="relative z-10 text-xl text-neutral-400 max-w-xl mx-auto">
              I am currently taking on new projects for Q3 and Q4. Let's discuss your vision.
            </p>
            <div className="relative z-10 flex flex-col md:flex-row gap-4 w-full justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black text-xl font-bold py-6 px-12 rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Start a Conversation
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent border border-neutral-700 text-white text-xl font-bold py-6 px-12 rounded-full hover:bg-neutral-800 transition-all">
                Download CV
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-neutral-900 mt-24 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rotate-45" />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">Kaelen Vane</span>
          </div>
          <p className="text-neutral-500 text-sm">&copy; 2024 Kaelen Vane. Built with code & emotion.</p>
          <div className="flex gap-8 text-sm font-medium text-neutral-500">
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
             <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}