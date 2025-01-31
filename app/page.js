"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";



export default function Home() {
  
  return (
    <>
      <div className="relative overflow-hidden max-h-screen">
        <Image
          src="/1.png"
          width={200}
          height={200}
          alt="Hero Banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <motion.h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Initiative towards Skill India
          </motion.h1>
        </div>
      </div>

      {/* Gallery Section */}

      <section className="bg-white text-gray-700 body-font overflow-hidden">
        {" "}
        {/* White background, dark gray text */}
        <div className="container px-5 py-24 mx-auto">
          {" "}
          {/* Removed overflow-hidden for better image handling */}
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-700 lg:w-1/3 lg:mb-0 mb-4">
              Carving the Future of India
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              {" "}
              {/* Text color inherited from parent */}
              We focus on enhancing the skills of every individual, empowering
              them with the tools, knowledge, and opportunities needed to excel
              in their chosen fields. By fostering growth, creativity, and
              innovation, we aim to unlock their full potential and enable them
              to contribute meaningfully to a brighter, more prosperous, and
              inclusive future.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {" "}
            {/* Simplified margin handling */}
            {[1, 2, 3, 4, 5, 6].map(
              (
                index // Use a map to reduce repetitive code
              ) => (
                <motion.div
                  key={index} // Add a key for React to efficiently render list items
                  className={`md:p-2 p-1 w-1/2 md:w-1/3 ${
                    index === 2 || index === 3 ? "w-full" : ""
                  }`} // Dynamic width for larger images
                  initial={{
                    opacity: 0,
                    y: index > 3 ? 100 : 0,
                    x: index % 2 === 0 ? 100 : -100,
                  }} // Staggered entrance animation
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }} // Reduced scale slightly for a more subtle effect
                >
                  <Image
                    width={500} // Increased default image size
                    height={300} // Maintain aspect ratio
                    alt={`gallery ${index}`}
                    className="w-full object-cover h-full object-center block rounded-lg" // Removed border, consider adding a subtle shadow
                    src={`/gallery${index}.jpg`}
                    loading="lazy"
                    style={{ aspectRatio: "5/3" }}
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 relative">
            {" "}
            {/* Added relative for better image positioning */}
            <motion.img
              src="gallery7.jpg"
              alt="About Image"
              className="object-cover object-center w-full h-64 md:h-96 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 z-10"></div>{" "}
            {/* Overlay for better text contrast */}
          </div>
          <div className="lg:w-1/2 w-full lg:pl-12">
            <motion.h2
              className="text-3xl font-medium text-green-700 mb-4" // Green heading text
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About Us
            </motion.h2>
            <p className="leading-relaxed text-lg mb-6">
              We are a passionate team committed to bringing innovative
              solutions and services. Our goal is to create an impactful user
              experience and build products that improve lives.
            </p>
            <p className="leading-relaxed text-lg mb-6">
              Our journey started with a vision to revolutionize the industry,
              and through hard work and dedication, we’ve been able to make it a
              reality. We believe in delivering excellence and continuously
              improving our services to meet the needs of our users.
            </p>
            <motion.a
              href="#"
              className="text-green-700 inline-flex items-center mt-4 hover:text-green-500" // Green link and hover color
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-white text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          {" "}
          {/* Removed overflow-hidden */}
          <div className="flex flex-wrap -m-4">
            {[
              {
                title: "SAMPLING TAILOR COURSE",
                description:
                  "This comprehensive Sampling Tailor Course is designed for individuals who wish to specialize in creating garment samples for the fashion industry. Participants will learn the fundamentals of pattern making, fabric selection, and garment construction, equipping them with the skills needed to create high-quality sample garments. The curriculum covers essential techniques in precision cutting, stitching, and fitting to ensure garments meet industry standards.",
              },
              {
                title: "SCRIPT WRITING COURSE",
                description:
                  "This course is designed to equip aspiring writers with the essential skills required for crafting compelling scripts across various media platforms, including film, television, and digital content. Participants will learn the key elements of storytelling, such as plot structure, character development, and dialogue writing. The curriculum also emphasizes genre-specific writing techniques, enabling students to explore a variety of formats, including drama, comedy, thriller, and more.",
              },
              {
                title: "ELECTRICIAN COURSES",
                description:
                  "This comprehensive Electrician Course is designed to equip students with the essential skills needed to pursue a career as a certified electrician. The course covers fundamental electrical theory, safety standards, and hands-on training in wiring, installation, and troubleshooting electrical systems. Participants will learn to work with a variety of electrical components, including circuit breakers, transformers, and wiring systems, and will gain practical experience in both residential and commercial electrical work.",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="p-4 lg:w-1/3 w-full"
                initial={{
                  opacity: 0,
                  y: index === 2 ? 100 : 0,
                  x: index === 0 ? -100 : index === 1 ? 100 : 0,
                }} // Improved entrance animation
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full bg-green-100 px-8 pt-16 pb-24 rounded-lg text-center relative shadow-md hover:shadow-lg transition duration-300">
                  {" "}
                  {/* Green background, subtle shadow, hover effect */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-green-700 mb-1">
                    COURSE
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-800 mb-3">
                    {course.title}
                  </h1>
                  <p className="leading-6 text-justify mb-3">
                    {course.description}
                  </p>
                  <div className="text-center mt-1 leading-none flex justify-center absolute bottom-0 left-0 w-full py-2 bg-green-500 bg-opacity-20">
                    {" "}
                    {/* Subtle background for the view count */}
                    <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-white text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-700">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Kindly fill the form to contact Us!!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto w-full text-white justify-center bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transition-all duration-200 ease-in-out">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
