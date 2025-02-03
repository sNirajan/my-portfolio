"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-primaryGreen mt-10 mb-4">
          Nirajan Shah
        </h1>
        <p className="text-lg text-gray-700">
          Passionate About Solving Real-World Problems | Team Player
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-darkGreen mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-darkGreen">JavaScript</h3>
            <p className="text-gray-600">
              Proficient in ES6+, DOM manipulation, and APIs
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-darkGreen">React.js</h3>
            <p className="text-gray-600">
              Experienced in building SPAs with React
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-darkGreen">Node.js</h3>
            <p className="text-gray-600">
              Backend development with Express and PostgreSQL
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-darkGreen mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 0.95 }}
          >
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-darkGreen mb-2">
                Backend Developer 
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                KSVA Tech Solutions (Startup) | Remote |{" "}
                <span className="text-gray-500">Jan 2024 – Present</span>
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Built and maintained backend systems using{" "}
                  <strong>Node.js</strong>, integrating seamlessly with a{" "}
                  <strong>Next.js</strong>-powered front end.
                </li>
                <li>
                  Designed RESTful APIs, optimized database queries, and
                  improved performance by implementing efficient coding
                  practices.
                </li>
                <li>
                  Collaborated with the team to brainstorm and implement
                  scalable, robust solutions.
                </li>
                <li>
                  Contributed to the successful deployment of a feature-rich
                  application, enhancing usability and performance.
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-darkGreen mb-2">
                Full-Stack Developer (Project-Based)
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Web Bot Chat Application |{" "}
                <span className="text-gray-500"></span>
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Designed and developed a{" "}
                  <span className="font-semibold">
                    real-time chat application
                  </span>{" "}
                  using
                  <span className="font-semibold"> Node.js</span>,{" "}
                  <span className="font-semibold">Express</span>, and
                  <span className="font-semibold"> React.js</span>.
                </li>
                <li>
                  Implemented secure user authentication and role-based access
                  control to enhance application security.
                </li>
                <li>
                  Developed RESTful APIs and integrated WebSocket for seamless
                  real-time messaging between users.
                </li>
                <li>
                  Optimized database queries using{" "}
                  <span className="font-semibold">PostgreSQL</span> to improve
                  app performance and scalability.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-darkGreen mb-8">
          Education
        </h2>
        <div className="space-y-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-darkGreen">
              BSc. in Applied Computer Science
            </h3>
            <p className="text-gray-600">
              University of Winnipeg, Winnipeg, MB
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-12">
        <Link
          href="/"
          className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-darkGreen rounded-lg shadow-md overflow-hidden group"
        >
          {/* Animated Glow Effect */}
          <span className="absolute w-0 h-0 bg-gradient-to-r from-primaryGreen to-lime-500 rounded-full group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></span>

          {/* Text Layer */}
          <span className="relative z-10 group-hover:text-darkGreen transition-all duration-300 ease-out">
            Back to Home
          </span>

          {/* Border Animation */}
          <span className="absolute inset-0 rounded-lg border-2 border-primaryGreen opacity-100 group-hover:scale-110 group-hover:opacity-50 transition-transform duration-500 ease-out"></span>
        </Link>
      </section>
    </div>
  );
};

export default Resume;
