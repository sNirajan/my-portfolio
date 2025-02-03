"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_pwqbwx9",
        "template_g8z0nbd",
        formData,
        "doNqFc23ACrQf_Pef"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-t from-green-50 to-white"
    >
      <div className="container mx-auto text-center">
       
        <h2 className="text-4xl font-bold text-darkGreen mb-6">Contact Me</h2>
       
        <p className="text-lg text-darkGreen mb-10">
          Feel free to reach out to me. I&apos;m open to discussing new
          projects, collaborations, or opportunities.
        </p>
        <form
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primaryGreen"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-darkGreen text-white px-6 py-3 rounded hover:bg-primaryGreen transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
