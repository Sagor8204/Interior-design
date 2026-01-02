"use client";

import expertise1 from "@/images/expertise1.jpg"
import expertise2 from "@/images/expertise2.jpg"
import expertise3 from "@/images/expertise3.jpg"
import expertise4 from "@/images/expertise4.jpg"
import Image from "next/image";

import expertiseSlider1 from "@/images/banner-slide-1.jpg";
import expertiseSlider2 from "@/images/banner-slide-2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const ExpertiseData = [
    {
        id: 1,
        title: "Renovation and relmodeling",
        desc: "Eget odin non ac mi.",
        image: expertise1
    },
    {
        id: 2,
        title: "Renovation and relmodeling",
        desc: "Eget odin non ac mi.",
        image: expertise2
    },
    {
        id: 3,
        title: "Renovation and relmodeling",
        desc: "Eget odin non ac mi.",
        image: expertise3
    },
    {
        id: 4,
        title: "Renovation and relmodeling",
        desc: "Eget odin non ac mi.",
        image: expertise4
    },
]

export default function Expertise() {
  return (
    <>
      <div className="expertise bg-[#241c18]">
        <div className="px-[8%] lg:px-[12%] md:py-50 pt-10 pb-10 md:pb-[25%] relative">
          <div className="flex flex-col gap-10">
            <div className="w-full pt-8">
              <span className="rounded-full text-white title-span border border-gray-400 px-6 GolosText uppercase font-bold">
                About Olivion
              </span>
            </div>
            <div className="w-full lg:w-2/3">
              <h1 className="CalSans text-white text-4xl md:text-7xl">
                We Shape{" "}
                <span className="text-(--prim)">
                  Interior Designs, Crafting
                </span>{" "}
                Timeless and Inspiring Spaces
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {ExpertiseData.map((item, index) => (
                <div key={index} className="expertise-card" style={{ marginTop: `${index * 40}px`}}>
                    <div className="expertise-image">
                        <Image src={item.image} alt={item.title} className="w-full h-full rounded-2xl" />
                    </div>
                    <div className="expertise-info my-5">
                        <h1 className="text-3xl CalSans text-white border-b border-gray-500/50 pb-5 w-full lg:w-[80%]">
                            {item.title}
                        </h1>
                        <p className="text-gray-400 mt-3">{item.desc}</p>
                    </div>
                </div>
            ))}
          </div>

          <div className="expertise-slider">
            <Swiper slidesPerView={1} spaceBetween={0} loop={true} autoplay={{delay: 1500}} modules={[Autoplay]} speed={2000}>
                <SwiperSlide>
                    <Image src={expertiseSlider1} alt="expertiseSlider1" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={expertiseSlider2} alt="expertiseSlider2" className="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
