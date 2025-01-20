import CircularProgress from "./circular_progress.jsx";

const Languages = () => {
  const languages = [
    { name: "English", percentage: 100, color: "green" },

  ];

  return (
    <section className=" bg-gray-900 rounded-lg ">
      <h2 className="text-white font-bold mb-4">Languages</h2>
      <div className="flex flex-wrap justify-center">
        {languages.map((lang) => (
          <CircularProgress
            key={lang.name}
            language={lang.name}
            percentage={lang.percentage}
            color={lang.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Languages;
