"use client";

import Link from 'next/link'
import React from 'react'

import serviceImg1 from "@/images/service-1.jpg";
import serviceImg2 from "@/images/service-2.jpg";
import serviceImg3 from "@/images/service-3.jpg";
import serviceImg4 from "@/images/service-4.jpg";
import serviceImg5 from "@/images/service-5.jpg";
import serviceImg6 from "@/images/service-6.jpg";
import Newsletter from '@/UI-Components/Index/Newsletter/page';

const ServiceData = [
  {
    id: 1,
    image: serviceImg1,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: 2,
    image: serviceImg2,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: 3,
    image: serviceImg3,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: 4,
    image: serviceImg4,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: 5,
    image: serviceImg5,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: 6,
    image: serviceImg6,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
];

export default function Services() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">Services</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Services</h2>
        </div>
      </div>

      <div className="px-[8%] lg:py-[12%] pt-30 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">
              Our Services
            </span>
          </div>

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl w-full lg:w-[80%] mb-5">
              Explore Our{" "}
              <span className="text-(--prim)">
                Comperhensive Interior Design
              </span>{" "}
              Services
            </h1>
            <p className="text-gray-400 GolosText">
              We specialize in transforming visions into reality. Explore our
              portfolio of innovative architectural and interior design projects
              crafted with precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {ServiceData.map((data, index) => (
            <div key={index} className=''>
              <div className="service-wrap w-full h-full flex flex-col justify-between p-8 rounded-2xl overflow-hidden bg-cover bg-center hover:-translate-y-2 transition-all duration-300" style={{ backgroundImage: `url(${data.image.src})`}}>
                <h2 className="text-white GolosText text-4xl">0{data.id}</h2>
                <div className="flex flex-col">
                  <h2 className="text-white GolosText text-4xl mb-3">{data.title}</h2>
                  <p className="text-gray-300">{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  );
}
