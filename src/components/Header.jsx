const Header = () => {
  return (
      <div className="flex flex-row space-x-4 w-full items-end justify-end">
          <div>
              <a
                  href="/src/components/About.jsx"
                  className="text-white hover:underline hover:text-white mb-4"
              >
                  About
              </a>
          </div>
          <div>
              <a
                  href="/src/components/Projects.jsx"
                  className="text-white hover:underline hover:text-white mb-4"
              >
                  Projects
              </a>
          </div>
          <div>
              <a
                  href="/src/components/Resume.jsx"
                  className="text-white hover:underline hover:text-white mb-4"
              >
                  Resume
              </a>
          </div>
          <div>
              <a
                  href="/src/components/Resume.jsx"
                  className="text-white hover:underline hover:text-white mb-4"
              >
                  Contact
              </a>
          </div>
      </div>
  );
};

export default Header