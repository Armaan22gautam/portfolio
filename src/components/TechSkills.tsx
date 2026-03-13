export default function TechSkills() {
  const skills = {
    "Programming Languages": {
      items: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "Python" },
      ],
      description: "Comfortable with JS/TS for the web, Java for OOP-heavy backend work, and Python for scripting and ML tasks.",
    },
    "Frameworks & Libraries": {
      items: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Spring Boot" },
      ],
      description: "Shipped full-stack apps using React on the front, Node/Express for REST APIs, and Spring Boot for structured Java backends.",
    },
    "Databases": {
      items: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
      ],
      description: "Used relational DBs (MySQL, PostgreSQL) and NoSQL (MongoDB) depending on the project, with Redis for caching.",
    },
    "Cloud & DevOps": {
      items: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "Git" },
        { name: "Linux" },
      ],
      description: "Deployed to AWS, containerized apps with Docker, managed repos with Git, and automated pipelines with CI/CD.",
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          What I <span className="text-cyan-400">Build With</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{category}</h3>
              <p className="text-gray-300 text-sm">{data.description}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                {data.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-slate-800 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition"
                  >
                    {skill.name}
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
