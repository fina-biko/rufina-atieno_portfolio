import SkillBar from "./skills_compentency.jsx";

const Skills = () => {
  const skills = [
    { name: "Python"  },
    { name: "JavaScript"},
    { name: "CSS" },
    { name: "Machine Learning" },
      { name: "Frontend Dev" },
      { name: "Backend dev" },
      { name: "API intergration" },
      { name: "SQl" },

  ];

  return (
    <section className="py-6 bg-gray-900 rounded-lg m-2">
      <h2 className="text-white font-bold mb-4">Skills and Competencies</h2>
      <div className="text-gray-400">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name}  />
        ))}
      </div>
    </section>
  );
};

export default Skills;
