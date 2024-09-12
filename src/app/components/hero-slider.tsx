"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSlider() {
  const slides = Array(4).fill(null);

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides.map((_, index) => (
        <SwiperSlide>
          <Image
            className="w-screen h-screen object-fill relative z-10"
            alt="chef-img"
            src="/assets/landing-page/chef.png"
            width={1000}
            height={959}
          />
          <button className="absolute w-[359px] py-[22.5px] border border-white z-20 text-white bottom-[163px] right-[447px]">
            Meet Chef Matt
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
