import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow container mx-auto p-4 md:p-8 lg:p-16 md:m-6 m-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              About <span className="text-pink-700">Us):</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Welcome to our company! We are dedicated to providing the best
              services and solutions to our clients. Our team of experts is
              passionate about delivering high-quality work and exceeding your
              expectations. Whether it's technology, design, or customer
              service, we strive to be the best in everything we do.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Our mission is to create innovative solutions that drive success
              for our clients. We believe in the power of collaboration and work
              closely with our clients to understand their needs and deliver
              tailored solutions. Our goal is to build lasting relationships
              based on trust and mutual respect.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Team
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Our team is composed of skilled professionals from diverse
              backgrounds, bringing together a wealth of experience and
              expertise. We are committed to continuous learning and staying
              up-to-date with the latest trends and technologies to ensure that
              we deliver the best possible results for our clients.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
