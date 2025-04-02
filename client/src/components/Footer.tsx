export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 relative">
      {/* Web Dev Image in bottom left corner */}
      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 overflow-hidden opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-blue-400"
        >
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold">
              <span className="text-blue-400">Edem</span>
              <span className="text-white">Dzikunu</span>
            </a>
            <p className="text-slate-400 dark:text-slate-300 mt-2">
              Building exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-lg font-medium mb-3 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3 text-white">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/eDzikunu"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/edemdzikunu/"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/GrindAndCode"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io"
                    className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodePen
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 dark:text-slate-300 text-sm">
            &copy; {new Date().getFullYear()} Edem Dzikunu. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 dark:text-slate-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600 mx-2">|</span>
            <a
              href="#"
              className="text-slate-400 dark:text-slate-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
