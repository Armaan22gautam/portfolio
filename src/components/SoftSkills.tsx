export default function SoftSkills() {
  const softSkills = [
    {
      number: "01",
      title: "Task Ownership",
      description: "I don't wait to be told what's broken. If I spot a bug in shared code, I fix it and open a PR. Deadlines are commitments, not suggestions.",
      tags: ["Self-directed", "Accountable", "Proactive"],
    },
    {
      number: "02",
      title: "Clear Communication",
      description: "I've explained complex technical concepts to non-technical teammates and written docs people actually read. Clarity over cleverness, every time.",
      tags: ["Documentation", "Async-first", "Straightforward"],
    },
    {
      number: "03",
      title: "Efficient Problem Solving",
      description: "I know when to Google, when to ask, and when to just try it. I use AI as a force multiplier — to move faster, not to skip thinking.",
      tags: ["Resourceful", "Focused", "Low-overhead"],
    },
  ];

  return (
    <section id="soft-skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          <span className="text-cyan-400">Soft Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softSkills.map((skill) => (
            <div
              key={skill.number}
              className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition"
            >
              <div className="text-5xl font-bold text-cyan-400 mb-4">{skill.number}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-gray-300 mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-slate-800 text-cyan-400 rounded-full border border-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
