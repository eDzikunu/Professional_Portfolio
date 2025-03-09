export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold">
              <span className="text-blue-400">John</span>
              <span>Doe</span>
            </a>
            <p className="text-slate-400 mt-2">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-lg font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://codepen.io" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">CodePen</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <span className="text-slate-600 mx-2">|</span>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
