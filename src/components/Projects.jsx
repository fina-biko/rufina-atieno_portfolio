const Projects = () => {
  return (
      <div className="p-6 bg-gray-950 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Sample Projects,
          <a href="/projects" className="text-blue-500 hover:underline ml-2">
            view more
          </a>
        </h2>


        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-grow gap-6">{/* on small screem cols to be 2, medium screens cols to be 3 */}

          {/* Project 1 */}
          <div
              className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <img
                src="public/e_Citizen_krc.png"
                alt="E-Citizen Project"
                className="w-full h-32 rounded-lg shadow-md mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">SSO Login and E-Citizen API Integration</h3>
            <p className="text-gray-300 text-sm text-center mb-4">
              This project involved integrating a payment API into the company's existing website.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Tools:</strong> JavaScript, HTML, CSS
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <strong>Frameworks:</strong> Frontend: Vite.js, Backend: Python
            </p>
            <a
                href="https://github.com/fina-biko/project-ecitizen/blob/master/frontend/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline text-sm">
              View README on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div
              className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-300">Brief description of Project 2 goes here.</p>
          </div>

          {/* Project 3 */}
          <div
              className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-300">Brief description of Project 3 goes here.</p>
          </div>

          {/* Project 4*
        <div
          className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Project 4</h3>
          <p className="text-gray-300">Brief description of Project 4 goes here.</p>
        </div>*/}
        </div>
      </div>
  );
};

export default Projects;
