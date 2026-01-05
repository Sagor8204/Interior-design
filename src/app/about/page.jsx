"use client";

import Link from "next/link";

import about2 from "@/images/About-2.jpg";
import about4 from "@/images/About-4.jpg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import timeline1 from "@/images/timeline-1.jpg";
import timeline2 from "@/images/timeline-2.jpg";
import timeline3 from "@/images/timeline-3.jpg";
import timeline4 from "@/images/timeline-4.jpg";

const HistoryData = [
  {
    image: timeline1,
    year: "2025",
    text: "We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission",
  },
  {
    image: timeline2,
    year: "2024",
    text: "We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission",
  },
  {
    image: timeline3,
    year: "2023",
    text: "We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission",
  },
  {
    image: timeline4,
    year: "2022",
    text: "We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission",
  },
  {
    image: about2,
    year: "2021",
    text: "We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission",
  },
];

export default function About() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-15">About Us</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">About Us</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3 pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              About Olivion
            </span>
            <h1 className="CalSans pt-8 text-4xl md:text-5xl w-full lg:w-[80%] mb-5">
              We Shape{" "}
              <span className="text-(--prim)">Interior Designs, Crafting</span>{" "}
              Timeless and Inspiring Spaces
            </h1>
            <div className="about-content md:pt-15">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="about-text">
                  <h2 className="text-[10rem] leading-40 GolosText font-bold text-(--prim)">
                    26
                  </h2>
                  <p className="text-2xl lg:px-15 CalSans">
                    Years of experience
                  </p>
                </div>
                <div className="about-image">
                  <Image
                    src={about4}
                    alt="About-image"
                    className="object-cover rounded-2xl h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="about-image md:h-150">
              <Image
                src={about2}
                alt="About-image"
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
            <div className="about-pere pt-10">
              <p className="GolosText text-sm text-gray-500">
                We believe that every space has the power to inspire, and that
                great design brings that inspiration to life. Our mission is to
                craft environments that stir creativity, evoke emotion, and
                reflect the essence of those who inhabit them.
              </p>
              <button className="mt-9 border border-gray500/50 px-5 py-3 rounded-full GolosText font-semibold transition-all duration-300 hover:bg-(--prim) hover:text-white">
                <Link href="/">
                  Learn More <i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="video w-full pb-10">
        <video
          src="/images/Video-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-[8%] lg:px-[12%] pb-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Our History
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Our History{" "}
              <span className="text-(--prim)">Is Full Of Interesting</span>{" "}
              Stages And Events.
            </h1>
          </div>
        </div>

        <div className="history-swiper py-15 pb-0">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoPlay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={200}
            modules={[Autoplay]}
            breakpoints={{
              1199: { slidesPerView: 4 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {HistoryData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="history-card">
                  <Image
                    src={item.image}
                    alt={`history-${item.year}`}
                    className="rounded-2xl w-40 h-40 object-cover"
                  />
                  <div className="history-content py-15">
                    <h2 className="text-3xl CalSans font-bold mb-5">
                      {item.year}
                    </h2>
                    <p className="GolosText text-sm text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] pb-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-7 GolosText uppercase font-bold">
              Award & achievement
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Design That{" "}
              <span className="text-(--prim)">Speaks Our Industry</span> Stages
              Awards
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
