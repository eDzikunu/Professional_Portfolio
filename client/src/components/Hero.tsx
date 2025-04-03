import { motion } from "framer-motion";
import ProfilePic from "../assets/Edem_Dzikunu_Profile_Pic.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 order-1 md:order-1 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden shadow-lg flex items-center justify-center">
            <img
              src={ProfilePic}
              alt="My Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 order-2 md:order-2 mt-12 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="block">Hi, I'm Edem Dzikunu</span>
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-gray-700 dark:text-slate-300 text-lg md:text-xl mb-8 max-w-lg">
            I'm a full-stack developer who loves building seamless, user-focused
            applications — from responsive frontends to solid backend systems. I
            enjoy creating accessible, high-performing experiences that scale
            and make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors text-center font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md transition-colors text-center font-medium dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
