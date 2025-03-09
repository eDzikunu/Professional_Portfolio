import { motion } from "framer-motion";
import { FrontEndSkills, BackEndSkills, OtherSkills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            I've worked with a variety of technologies and frameworks. Here's my tech stack and tools I use daily.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {FrontEndSkills.map((skill, index) => (
                <span key={index} className="skill-badge px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm transition-transform hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Backend */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {BackEndSkills.map((skill, index) => (
                <span key={index} className="skill-badge px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm transition-transform hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Other */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tools & Other</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {OtherSkills.map((skill, index) => (
                <span key={index} className="skill-badge px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm transition-transform hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
