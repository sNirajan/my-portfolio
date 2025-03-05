"use client";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Add animation class after a short delay
    const timer = setTimeout(() => setAnimationClass("animate-fade-in"), 200);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <section className="hero-section bg-white text-center py-16">
      {/* Add spacing above */}
      <div className={`pt-16 ${animationClass}`}>
        <h1 className="text-5xl font-bold mt-10 mb-6">
          Hi, I&apos;m
          <span className="gradient-text"> Nirajan Shah</span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Full-Stack Developer
        </p>
        <a
          href="/resume"
          className="mt-6 inline-block bg-darkGreen text-white px-6 py-2 rounded shadow hover:bg-justGreen transition duration-300 animate-shimmer"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
