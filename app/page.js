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
        <div className="absolute inset-0 flex items-center justify-center bg-themeBrown/50">
          <motion.h1
            className="text-themeBeige text-4xl md:text-6xl lg:text-7xl font-bold text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Initiative towards Skill India
          </motion.h1>
        </div>
      </div>

      {/* Gallery Section */}

      <section className="bg-themeBeige text-themeBrown body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap overflow-hidden">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-themeBrown lg:w-1/3 lg:mb-0 mb-4">
              Carving the Future of India
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-themeBrown">
              We focus on enhancing the skills of every individual, empowering
              them with the tools, knowledge, and opportunities needed to excel
              in their chosen fields. By fostering growth, creativity, and
              innovation, we aim to unlock their full potential and enable them
              to contribute meaningfully to a brighter, more prosperous, and
              inclusive future.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <motion.div
                className="md:p-2 p-1 w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                // viewport={{amount: "all"}}
              >
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-4 border-themeGold rounded-lg"
                  src="/gallery1.jpg"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="md:p-2 p-1 w-1/2"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-4 border-themeGold rounded-lg"
                  src="/gallery2.jpg"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="md:p-2 p-1 w-full"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block border-4 border-themeGold rounded-lg"
                  src="/gallery3.jpg"
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <motion.div
                className="md:p-2 p-1 w-full"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block border-4 border-themeGold rounded-lg"
                  src="/gallery4.jpg"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="md:p-2 p-1 w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-4 border-themeGold rounded-lg"
                  src="/gallery5.jpg"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="md:p-2 p-1 w-1/2"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-4 border-themeGold rounded-lg"
                  src="/gallery6.jpg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-themeBeige text-themeBrown body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <motion.img
              src="gallery7.jpg"
              alt="About Image"
              className="object-cover object-center w-full h-64 md:h-96 rounded-lg shadow-lg border-4 border-themeGold"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-12">
            <motion.h2
              className="text-3xl font-medium text-themeBrown mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About Us
            </motion.h2>
            <p className="leading-relaxed text-lg mb-6 text-themeBrown">
              We are a passionate team committed to bringing innovative
              solutions and services. Our goal is to create an impactful user
              experience and build products that improve lives.
            </p>
            <p className="leading-relaxed text-lg mb-6 text-themeBrown">
              Our journey started with a vision to revolutionize the industry,
              and through hard work and dedication, we’ve been able to make it a
              reality. We believe in delivering excellence and continuously
              improving our services to meet the needs of our users.
            </p>
            <motion.a
              href="#"
              className="text-themeGold inline-flex items-center mt-4"
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
      <section className="bg-themeBeige text-themeBrown body-font">
        <div className="container px-5 py-24 mx-auto overflow-hidden">
          <div className="flex flex-wrap -m-4">
            {/* Course 1 */}
            <motion.div
              className="p-4 lg:w-1/3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-themeGold bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-themeBrown mb-1">
                  COURSE
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-themeBrown mb-3">
                  SAMPLING TAILOR COURSE
                </h1>
                <p className="leading-6 text-justify text-themeBrown mb-3">
                  This comprehensive Sampling Tailor Course is designed for
                  individuals who wish to specialize in creating garment samples
                  for the fashion industry. Participants will learn the
                  fundamentals of pattern making, fabric selection, and garment
                  construction, equipping them with the skills needed to create
                  high-quality sample garments. The curriculum covers essential
                  techniques in precision cutting, stitching, and fitting to
                  ensure garments meet industry standards.
                </p>
                <div className="text-center mt-1 leading-none flex justify-center absolute bottom-0 left-0 w-full py-2">
                  <span className="text-themeBrown mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
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

            {/* Course 2 */}
            <motion.div
              className="p-4 lg:w-1/3"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-themeGold bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-themeBrown mb-1">
                  COURSE
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-themeBrown mb-3">
                  SCRIPT WRITING COURSE
                </h1>
                <p className="leading-6 text-justify text-themeBrown mb-3">
                  This course is designed to equip aspiring writers with the
                  essential skills required for crafting compelling scripts
                  across various media platforms, including film, television,
                  and digital content. Participants will learn the key elements
                  of storytelling, such as plot structure, character
                  development, and dialogue writing. The curriculum also
                  emphasizes genre-specific writing techniques, enabling
                  students to explore a variety of formats, including drama,
                  comedy, thriller, and more.
                </p>
                <div className="text-center mt-1 leading-none flex justify-center absolute bottom-0 left-0 w-full py-2">
                  <span className="text-themeBrown mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
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

            {/* Course 3 */}
            <motion.div
              className="p-4 lg:w-1/3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-themeGold bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-themeBrown mb-1">
                  COURSE
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-themeBrown mb-3">
                  ELECTRICIAN COURSES
                </h1>
                <p className="leading-6 text-justify text-themeBrown mb-3">
                  This comprehensive Electrician Course is designed to equip
                  students with the essential skills needed to pursue a career
                  as a certified electrician. The course covers fundamental
                  electrical theory, safety standards, and hands-on training in
                  wiring, installation, and troubleshooting electrical systems.
                  Participants will learn to work with a variety of electrical
                  components, including circuit breakers, transformers, and
                  wiring systems, and will gain practical experience in both
                  residential and commercial electrical work.
                </p>
                <div className="text-center mt-1 leading-none flex justify-center absolute bottom-0 left-0 w-full py-2">
                  <span className="text-themeBrown mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
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
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="text-themeBrown body-font relative bg-themeBeige">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-themeBrown">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-themeBrown">
              Kindly fill the form to contact Us!!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-themeBrown"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-themeGold bg-opacity-50 rounded border border-themeBrown focus:border-themePrimary focus:bg-white focus:ring-2 focus:ring-themePrimaryLight text-base outline-none text-themeBrown py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-themeBrown"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-themeGold bg-opacity-50 rounded border border-themeBrown focus:border-themePrimary focus:bg-white focus:ring-2 focus:ring-themePrimaryLight text-base outline-none text-themeBrown py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-themeBrown"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-themeGold bg-opacity-50 rounded border border-themeBrown focus:border-themePrimary focus:bg-white focus:ring-2 focus:ring-themePrimaryLight h-32 text-base outline-none text-themeBrown py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto w-full text-white justify-center bg-themeGold border-0 py-2 px-8 focus:outline-none hover:bg-themePrimary rounded text-lg transition-all duration-200 ease-in-out">
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
