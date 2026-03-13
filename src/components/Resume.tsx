export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Download My <span className="text-cyan-400">Resume</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Resume Preview */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-center justify-center h-96">
            <div className="text-center text-gray-400">
              <p className="text-lg mb-4">Resume Preview</p>
              <p className="text-sm">(Add your resume image here)</p>
            </div>
          </div>

          {/* Resume Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Professional Journey</h3>
              <p className="text-gray-300 mb-6">
                I&apos;ve worked on diverse projects across web development, backend systems, and AI solutions. My resume details my experience, skills, and contributions to various organizations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <p className="text-gray-300">Full-stack development experience</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <p className="text-gray-300">Leadership and team collaboration</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <p className="text-gray-300">Continuous learning and growth</p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition"
            >
              📥 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
