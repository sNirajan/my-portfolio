import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section
      id="about"
      className="about-section py-16 bg-gradient-to-b from-gray-50 to-green-50"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-darkGreen tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            I am a passionate Web Developer with a knack for
            creating impactful digital solutions. Skilled in full-stack
            development, I aim to bring ideas to life using modern technologies.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* About Me Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-primaryGreen mb-4">
              Who Am I?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I specialize in building responsive websites and applications
              using JavaScript, React, Node.js, and Next.js. My goal is to
              craft intuitive user experiences while constantly learning and
              evolving in this fast-paced tech world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outside of work, you&apos;ll find me exploring new technologies, brainstorming fresh ideas, or contributing to meaningful projects that align with my passion for innovation. I believe strongly in the power of teamwork and continuous growth to achieve great things together.
            </p>
            {/* Reach Me Section */}
            <div className="mt-8 flex items-center space-x-4">
              <p className="text-lg text-gray-700">Reach me at:</p>
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com/in/nirajan-shah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primaryGreen transition"
                >
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a
                  href="https://github.com/snirajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primaryGreen transition"
                >
                  <i className="fab fa-github text-3xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* About Me Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-lg overflow-hidden">
              <img
                src="/Profile.png"
                alt="Nirajan Shah"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primaryGreen opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
