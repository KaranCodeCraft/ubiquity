"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/images/team/chairmar.webp";
import PageLinks from "@/components/common/pageLink";

const ChairmanMessagePage = () => {
  return (
    <>
      <PageLinks
        title="Chairman's Message"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Chairman's Message", link: "/chairman-message" },
        ]}
      />

      {/* Chairman's Message Section */}
      <div className="container mx-auto w-full px-4 py-5">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative  m-7">
            <Image
              src={img}
              alt="Chairman"
              width={300}
              height={300}
              className="rounded-lg  shadow-lg md:h-72 h-52 w-full object-cover"
            />
            {/* <div className="absolute -bottom-7 -right-5 bg-red text-white py-3 px-6 rounded-lg text-lg font-bold shadow-md">
              <p className="border-4 border-white border-dashed p-3 font-extrabold tracking-wide">
                15 Years
              </p>
            </div> */}
          </div>

          <div className="w-full lg:w-2/3 text-gray-800  h-full">
            <p className="mb-4 leading-relaxed">
              {`Education is essential for the growth and development of a country, but with skilled specific education it adds to the overall socio-economic and human resource development of the nation.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`We have been working on empowering youth through imparting various skill training programs along with NSQF/SSC aligned courses since 2008 and contributing towards ‘Viksit Bharat (Progressive India)’ and ‘Akhand Bharat (One India)’ to fulfill the vision of our Hon’ble Prime Minister Shri Narendra Modi of making India the ‘Skill Capital of the World’.  Over the years, we have had affiliations and partnerships with various Indian Government Organizations and Ministries such as Ministry of Rural Development (MoRD), State Skill Development Missions such asMoMA, UPSDM, MPSSDEGB, PBSSD, GNULM, RSLDC etc., Sector Skill Councils (SSC) and many other Internationalas well as corporate organizations. `}
            </p>
          </div>
        </div>
        <p className="mb-4 leading-relaxed">
          {`Over the years, we have received 11 awards with 2 being International awards.Our associates and competitors alike recognize us today as a pioneer in bridging the gap between the industry requirements and the skill set of the aspirants by upskilling them in accordance with the present needs of various industries. I believe them that hard work, sincerity and determination have made us stand firm despite all the challenges that we have faced all these years.`}
        </p>
        <p className="mb-4 leading-relaxed">
          {`Skilling is the essential ingredient that keeps the wheels of progress and development of a person running smoothly. The primary aim of skill development is to help the youth recognize their potential so as to maximize their contribution in nation building. The youth of a nation are the future leaders. We have always focused on doing right things and doing things right which I feel is a balancing act, and requires the development of good strategic operations to deliver the services in the most effective and efficient way possible.`}
        </p>
        <p className="mb-4 leading-relaxed">
          {`In our pursuit of excellence, we have embarked on a journey to shape the future of education and inspire a new generation of innovative thinkers, problem solvers, and compassionate leaders by coming up with a State Private University, namely, Sikkim Global Technical University (SGTU) located in the beautiful valleys of Sikkim, known as Gateways of the Himalayas. We strive to uphold the values of integrity, ethics, and social responsibility to ensure our contribution in SDG 4 and Viksit and Akhand Bharat.`}
        </p>

        <p className="mb-4 leading-relaxed">
          {`Let us use our knowledge and skills for the betterment of society and to address the pressing challenges faced by humanity. We visualize making the world a better place by educating people and making them aware of their own conscience as well as working towards a sustainable and progressive future for generations to come.`}
        </p>

        {/* Signature Section */}
        <div className="mt-6">
          <p className="text-lg font-bold text-gray-900">Chairman - IGCSM</p>
          <span className="text-2xl font-semibold text-gray-900">
            Dr. Saurabh Singhal
          </span>
        </div>
      </div>
    </>
  );
};

export default ChairmanMessagePage;
