"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BannerSlider() {
  const slides = Array(4).fill(null);

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="custom-banner-swiper"
    >
      {slides.map((_, index) => (
        <SwiperSlide key={index}>
          <Image
            className="relative z-10"
            alt="img"
            src="/assets/landing-page/banner-img.png"
            width={1282}
            height={383}
          />
          <div className="absolute inset-0 flex justify-center items-center z-30 flex-col text-black text-center">
            <h1 className="text-center text-[38px]">ONLINE ONLY</h1>
            <div className="border-b-4 border-black w-[78px] mt-5"></div>
            <p className="text-[22px] w-[455px] mt-5">
              GET 20% OFF YOUR ORDER OF $50 OR MORE Use code{" "}
              <span className="font-bold">“Chef20”</span>
            </p>
            <button className="w-[300px] py-4 border-2 border-black z-20 text-2xl font-semibold mt-[39px]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
