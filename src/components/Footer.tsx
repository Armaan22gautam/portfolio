export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Armaan Gautam</h3>
            <p className="text-gray-400">Full-stack developer & AI enthusiast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Armaan22gautam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
                GitHub
              </a>
              <a href="https://linkedin.com/in/armaan-gautam-936a43297/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p>© {currentYear} All rights reserved</p>
          <p className="mt-2">Crafted with ❤️ using Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
