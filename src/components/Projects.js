const projects = [
  {
    title: "Web Bot Chat App",
    description:
      "A full-stack project using Node.js, Express, and React.js to create real-time chat communication features.",
    link: "https://github.com/sNirajan/Chat-App",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and visually appealing personal portfolio website using Next.js.",
    link: "#",
  },
  {
    title: "Campus Food Ordering System",
    description:
      "A project to simplify food ordering within campus premises using HTML, CSS, and JavaScript.",
    link: "https://github.com/sNirajan/CFOS",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-darkGreen mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-darkGreen mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primaryGreen hover:text-darkGreen font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
