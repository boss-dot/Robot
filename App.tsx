{/* deploy-check */}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SplineSceneBasic } from './components/demo';
import { SpotlightInteractive } from './components/ui/spotlight-interactive';
import DisplayCards from './components/ui/display-cards';
import { Sparkles, Code, Globe, Layers, Cpu, Zap, Shield, Music, Activity, Terminal, Sun, Moon } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Kaelen was like glimpsing the future of the web. Our conversion rates spiked after the 3D redesign.",
    author: "Alex Rivera",
    role: "Lead Creative @ Atmos",
    rating: 5
  },
  {
    quote: "Kaelen's ability to translate complex brand identities into spatial dimensions is unparalleled. A master of the stack.",
    author: "Sofia Chen",
    role: "CEO @ Radiant Labs",
    rating: 5
  },
  {
    quote: "The spatial UI Kaelen built for us has set a new standard in our niche. It's not just a site; it's a statement.",
    author: "James Thorne",
    role: "Founder @ Echo spatial",
    rating: 5
  },
  {
    quote: "Precise, creative, and insanely fast. Kaelen is the partner you need for high-end digital architecture.",
    author: "Mark S.",
    role: "Design Director @ Void",
    rating: 5
  }
];

const leftStackCards = [
  {
    icon: <Globe className="size-5 text-indigo-500 dark:text-indigo-300" />,
    title: "Aether Flux",
    description: "Next-gen spatial interface for distributed network monitoring.",
    date: "DEC 2023",
    iconClassName: "bg-indigo-500/10",
    titleClassName: "text-indigo-600 dark:text-indigo-400",
    className: "[grid-area:stack] -translate-x-[90px] -translate-y-[90px] z-[1]",
    skewClassName: "-skew-y-[4deg]"
  },
  {
    icon: <Layers className="size-5 text-purple-500 dark:text-purple-300" />,
    title: "Prism Protocol",
    description: "Real-time WebGL identity visualization system.",
    date: "OCT 2023",
    iconClassName: "bg-purple-500/10",
    titleClassName: "text-purple-600 dark:text-purple-400",
    className: "[grid-area:stack] -translate-x-[60px] -translate-y-[60px] z-[2]",
    skewClassName: "-skew-y-[4deg]"
  },
  {
    icon: <Code className="size-5 text-blue-500 dark:text-blue-300" />,
    title: "Onyx System",
    description: "High-density 3D data visualization for enterprise metrics.",
    date: "AUG 2023",
    iconClassName: "bg-blue-500/10",
    titleClassName: "text-blue-600 dark:text-blue-400",
    className: "[grid-area:stack] -translate-x-[30px] -translate-y-[30px] z-[3]",
    skewClassName: "-skew-y-[4deg]"
  },
  {
    icon: <Cpu className="size-5 text-emerald-500 dark:text-emerald-300" />,
    title: "Nebula OS",
    description: "Conceptual operating system interface for spatial computing.",
    date: "JULY 2023",
    iconClassName: "bg-emerald-500/10",
    titleClassName: "text-emerald-600 dark:text-emerald-400",
    className: "[grid-area:stack] translate-x-[0px] translate-y-[0px] z-[4]",
    skewClassName: "-skew-y-[4deg]"
  },
];

const rightStackCards = [
  {
    icon: <Zap className="size-5 text-amber-500 dark:text-amber-300" />,
    title: "Volt Core",
    description: "High-performance animation engine for dynamic UI components.",
    date: "MAY 2023",
    iconClassName: "bg-amber-500/10",
    titleClassName: "text-amber-600 dark:text-amber-400",
    className: "[grid-area:stack] translate-x-[90px] -translate-y-[90px] z-[1]",
    skewClassName: "skew-y-[4deg]"
  },
  {
    icon: <Shield className="size-5 text-rose-500 dark:text-rose-300" />,
    title: "Cyber Sentinel",
    description: "Advanced threat detection dashboard with 3D link analysis.",
    date: "MAR 2023",
    iconClassName: "bg-rose-500/10",
    titleClassName: "text-rose-600 dark:text-rose-400",
    className: "[grid-area:stack] translate-x-[60px] -translate-y-[60px] z-[2]",
    skewClassName: "skew-y-[4deg]"
  },
  {
    icon: <Music className="size-5 text-sky-500 dark:text-sky-300" />,
    title: "Nova Audio",
    description: "Spatial audio mixing board built for the modern browser.",
    date: "JAN 2023",
    iconClassName: "bg-sky-500/10",
    titleClassName: "text-sky-600 dark:text-sky-400",
    className: "[grid-area:stack] translate-x-[30px] -translate-y-[30px] z-[3]",
    skewClassName: "skew-y-[4deg]"
  },
  {
    icon: <Activity className="size-5 text-lime-500 dark:text-lime-300" />,
    title: "Pulse Health",
    description: "Biometric monitoring suite with interactive health charts.",
    date: "NOV 2022",
    iconClassName: "bg-lime-500/10",
    titleClassName: "text-lime-600 dark:text-lime-400",
    className: "[grid-area:stack] translate-x-[0px] translate-y-[0px] z-[4]",
    skewClassName: "skew-y-[4deg]"
  },
];

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(5px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const SectionBackground = ({ theme }: { theme: 'dark' | 'light' }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div
      animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute top-1/4 -left-20 w-96 h-96 ${theme === 'dark' ? 'bg-indigo-500/5' : 'bg-indigo-500/10'} rounded-full blur-[120px] transition-colors duration-700`}
    />
    <motion.div
      animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] ${theme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-[150px] transition-colors duration-700`}
    />
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: theme === 'dark' ? 0.1 : 0.2 }}
        animate={{ y: ["-10%", "110%"], rotate: 360 }}
        transition={{ duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear", delay: -Math.random() * 20 }}
        className={`absolute w-1 h-1 ${theme === 'dark' ? 'bg-white' : 'bg-neutral-800'} rounded-full transition-colors duration-700`}
        style={{ filter: 'blur(1px)' }}
      />
    ))}
    <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]' : 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_100%)]'} transition-colors duration-700`} />
  </div>
);

const AnimatedHeading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.h3 variants={textContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={textItem} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'} selection:bg-indigo-500/20 overflow-x-hidden`}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SpotlightInteractive theme={theme} />
      </div>

      <header className="relative z-50 container mx-auto px-6 py-8 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
           <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-700 ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}>
             <div className={`w-4 h-4 rotate-45 transition-colors duration-700 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} />
           </div>
           <span className="font-bold text-xl tracking-wider uppercase">KAELEN.DEV</span>
        </motion.div>
        
        <nav className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-400' : 'text-slate-500'}`}>
          {['Philosophy', 'Works', 'Testimonials', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              href={`#${item.toLowerCase()}`} 
              className={`transition-colors hover:${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button 
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className={`p-2.5 rounded-full border transition-all duration-700 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'}`}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </motion.button>
          
          <motion.button initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={`px-5 py-2.5 rounded-md transition-all duration-700 text-sm font-semibold border ${theme === 'dark' ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'}`}>
            Book a Session
          </motion.button>
        </div>
      </header>

      <main className="relative z-10">
        <motion.section initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="container mx-auto px-6 pt-4 pb-24">
          <SplineSceneBasic theme={theme} />
        </motion.section>

        <motion.section id="philosophy" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className={`relative container mx-auto px-6 py-32 border-t transition-colors duration-700 ${theme === 'dark' ? 'border-neutral-900/50' : 'border-slate-200'}`}>
          <SectionBackground theme={theme} />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <motion.h2 variants={textItem} className={`text-sm uppercase tracking-[0.3em] font-semibold italic transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>Digital Philosophy</motion.h2>
            <motion.h3 
              variants={textItem} 
              className={`text-4xl md:text-7xl font-bold leading-tight transition-all duration-700 bg-clip-text text-transparent ${theme === 'dark' ? 'bg-gradient-to-b from-neutral-50 to-neutral-500' : 'bg-gradient-to-b from-slate-900 to-slate-500'}`}
            >
              Architecting fluid interfaces for the spatial web.
            </motion.h3>
            <motion.p variants={textItem} className={`text-xl leading-relaxed max-w-2xl mx-auto transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-400' : 'text-slate-500'}`}>
              I specialize in blurring the lines between static design and interactive art. My mission is to build digital environments that feel as alive as the ideas behind them.
            </motion.p>
          </div>
        </motion.section>

        <motion.section variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`relative py-20 border-y transition-colors duration-700 ${theme === 'dark' ? 'bg-neutral-950/50 border-neutral-900' : 'bg-slate-100 border-slate-200'}`}>
          <SectionBackground theme={theme} />
          <div className="relative z-10 container mx-auto px-6">
            <p className={`text-center text-xs uppercase tracking-widest mb-12 italic transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-600' : 'text-slate-400'}`}>Collaborated with industry-leading brands</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['RADIANT', 'ATMOS', 'ECHO', 'VOID', 'CYPHER'].map((brand) => (
                <span key={brand} className={`text-2xl md:text-3xl font-black tracking-tighter cursor-default transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-300' : 'text-slate-600'}`}>{brand}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="works" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative container mx-auto px-6 py-32">
          <SectionBackground theme={theme} />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4">
              <h2 className={`text-sm uppercase tracking-[0.3em] font-semibold transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>Curation</h2>
              <motion.h3 
                variants={textItem} 
                className={`text-5xl font-bold italic transition-all duration-700 bg-clip-text text-transparent ${theme === 'dark' ? 'bg-gradient-to-b from-neutral-50 to-neutral-500' : 'bg-gradient-to-b from-slate-900 to-slate-500'}`}
              >
                The Art of Motion
              </motion.h3>
            </div>
            <p className={`max-w-xs font-medium transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-500'}`}>A careful selection of high-fidelity projects pushing the limits of WebGL.</p>
          </div>
          
          <div className="relative z-10 py-10 overflow-visible">
            <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-40 lg:gap-56 w-full">
              <DisplayCards cards={leftStackCards} theme={theme} />
              <DisplayCards cards={rightStackCards} theme={theme} />
            </div>
          </div>
        </motion.section>

        <motion.section id="testimonials" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative py-32 container mx-auto px-6 overflow-hidden">
          <SectionBackground theme={theme} />
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className={`text-sm uppercase tracking-[0.3em] font-semibold italic transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>Client Feedback</h2>
            <AnimatedHeading text="Words of Trust" className={`text-5xl md:text-7xl font-black tracking-tighter transition-colors duration-700 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} />
          </div>

          <div className="relative z-10 h-[450px] md:h-[350px] max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial + theme}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
                className={`absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 rounded-[3rem] backdrop-blur-2xl border shadow-3xl text-center transition-all duration-700 ${theme === 'dark' ? 'bg-neutral-900/50 border-white/5' : 'bg-white border-slate-200 shadow-slate-200'}`}
              >
                <div className="flex gap-1.5 mb-8">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 fill-current transition-colors duration-700 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-500'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`text-2xl md:text-4xl font-medium leading-tight italic mb-8 max-w-3xl transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-200' : 'text-slate-800'}`}>
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex flex-col items-center gap-1.5">
                  <p className={`text-xl font-bold tracking-tight transition-colors duration-700 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{testimonials[activeTestimonial].author}</p>
                  <p className={`font-mono text-sm uppercase tracking-widest transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setActiveTestimonial(idx)} className={`h-1.5 transition-all duration-700 rounded-full ${activeTestimonial === idx ? 'w-14 bg-indigo-500' : (theme === 'dark' ? 'w-4 bg-neutral-800 hover:bg-neutral-600' : 'w-4 bg-slate-300 hover:bg-slate-400')}`} />
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative container mx-auto px-6 py-40">
          <SectionBackground theme={theme} />
          <div className={`relative z-10 overflow-hidden rounded-[4rem] border p-12 md:p-28 flex flex-col items-center text-center space-y-12 transition-all duration-700 ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200 shadow-2xl shadow-slate-200'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${theme === 'dark' ? 'from-indigo-500/15 via-transparent to-purple-500/15 opacity-60' : 'from-indigo-100 via-transparent to-purple-100 opacity-40'}`} />
            <AnimatedHeading 
              text="LET'S CRAFT SOMETHING ICONIC TOGETHER." 
              className={`relative z-10 text-5xl md:text-8xl font-black tracking-tighter max-w-5xl leading-[0.85] transition-colors duration-700 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            />
            <p className={`relative z-10 text-xl max-w-2xl mx-auto font-medium transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-400' : 'text-slate-500'}`}>
              Accepting high-impact projects for the upcoming quarter. Let's explore how we can elevate your digital presence.
            </p>
            <div className="relative z-10 flex flex-col md:flex-row gap-5 w-full justify-center">
              <motion.button whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.98 }} className={`text-xl font-bold py-6 px-14 rounded-full transition-all shadow-2xl ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Initialize Consultation
              </motion.button>
              <motion.button whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.98 }} className={`text-xl font-bold py-6 px-14 rounded-full border transition-all ${theme === 'dark' ? 'bg-transparent border-neutral-700 text-white hover:bg-neutral-800' : 'bg-transparent border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
                Download Portfolio
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className={`relative z-10 border-t mt-24 py-16 transition-colors duration-700 ${theme === 'dark' ? 'border-neutral-900' : 'border-slate-200'}`}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className={`w-7 h-7 rounded flex items-center justify-center transition-colors duration-700 ${theme === 'dark' ? 'bg-neutral-800' : 'bg-slate-200'}`}>
              <div className={`w-3.5 h-3.5 rotate-45 transition-colors duration-700 ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
            </div>
            <span className={`font-bold uppercase tracking-[0.2em] text-sm transition-colors duration-700 ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>KAELEN VANE © 2024</span>
          </div>
          <p className={`text-sm font-medium italic transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>Crafted with intentionality & code.</p>
          <div className={`flex gap-10 text-sm font-bold tracking-widest uppercase transition-colors duration-700 ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>
             <a href="#" className={`transition-colors hover:${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>X</a>
             <a href="#" className={`transition-colors hover:${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>GH</a>
             <a href="#" className={`transition-colors hover:${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>DR</a>
             <a href="#" className={`transition-colors hover:${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>LI</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
