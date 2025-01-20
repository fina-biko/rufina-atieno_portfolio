import SkillBar from "./skills_compentency.jsx";

const Skills = () => {
  const skills = [
    { name: "Python", percentage: 97 },
    { name: "JavaScript", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "Machine Learning", percentage: 92 },
      { name: "Frontend Dev", percentage: 92 },
      { name: "Backend dev", percentage: 92 },
      { name: "API intergration", percentage: 92 },
      { name: "SQl", percentage: 92 },

  ];

  return (
    <section className="py-6 bg-gray-900 rounded-lg m-2">
      <h2 className="text-white font-bold mb-4">Skills and Competencies</h2>
      <div className="text-gray-400">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
