const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-16 px-4 bg-gray-950 rounded-lg shadow-lg">
      {/* Text Section  hapa*/}
      <div className="text-white w-full md:w-2/3 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">Hello, Welcome to Rufina's Portfolio!</h1>
        <p className="text-lg leading-relaxed">
          Rufina is a passionate Data Scientist with expertise in data analysis, machine learning, AI Engineering, deep learning, automation, and web scraping.
          She has  earned certifications in these fields and have hands-on experience applying her knowledge to real-world problems.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex w-full md:w-1/3">
        <img
          src="public/linkedin_photo.jpeg"
          alt="Rufina Atieno"
          className="w-full h-auto rounded-full shadow-lg border-4 border-gray-600"
        />
      </div>
    </div>
  );
};

export default About;
