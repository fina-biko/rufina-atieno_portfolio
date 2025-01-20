import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/skills.jsx";
import Languages from "./components/languages.jsx";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col" >
      {/* Parent section with two child sections (1/3 and 2/3 width) */}
      <section className="flex w-full h-full">

        {/* First section (1/3 width) */}
        <section className="w-1/3 bg-gray-950 flex flex-col m-2 p-4 rounded-lg shadow-md">

          {/* About */}
          <section className=" py-4 bg-gray-900 rounded-lg m-2">
            <div className="flex w-full md:w-1/3">
              <img
                  src="public/linkedin_photo.jpeg"
                  alt="Rufina Atieno"
                  className="w-full h-auto rounded-full shadow-lg border-4 border-gray-600"
              />
            </div>
            <p className="text-gray-400 mb-6">Data Analyst| Data scientist| ML engineer| AI engineer .</p>
          </section>


          {/* skills and competencies section Section */}
          <section className=" flex flex-row">
            <section id="skills" className="m-1">
              <Skills/>
            </section>

            <section id="skills" className="m-1">
              <Skills/>
            </section>


          </section>


          {/* Languagest*/}
          <section className=" bg-gray-900 rounded-lg">

              <Languages/>

          </section>





        </section>

        {/* Second section (2/3 width) */}
        <section className="w-2/3 flex flex-col mt-2">

          {/* Header Section */}
          <section className="w-full h-16 flex items-center justify-between bg-gray-950 rounded-lg shadow-md p-4">
            <Header />
          </section>

          {/* About Section */}
          <section id="about" className="pt-4 bg-gray-950 m-1 rounded-lg shadow-md">
            <About />
          </section>

          {/* Projects Section */}
          <section id="projects" className="pt-4 bg-gray-950 m-1 rounded-lg shadow-md">
            <Projects />
          </section>

        </section>


      </section>


{/* Footer Section */}
          <section id="footer" className=" flex flex-col text-white mt-auto bg-gray-900 rounded-lg">
            <Footer/>
          </section>
    </div>
  );
};

export default App;
