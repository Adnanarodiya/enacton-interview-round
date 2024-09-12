"use client";
import React, { useRef } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "CINNAMON HONEY",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    imgSrc: "/assets/landing-page/product1.png",
  },
  {
    id: 2,
    name: "COCONUT OIL",
    oldPrice: "$20.00",
    newPrice: "$15.00",
    imgSrc: "/assets/landing-page/product2.png",
  },
  {
    id: 3,
    name: "MANGO HONEY",
    oldPrice: "$9.00",
    newPrice: "$6.00",
    imgSrc: "/assets/landing-page/product3.png",
  },
  {
    id: 4,
    name: "HONEY HABANERO",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    imgSrc: "/assets/landing-page/product4.png",
  },
  {
    id: 5,
    name: "CINNAMON HONEY",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    imgSrc: "/assets/landing-page/product1.png",
  },
  {
    id: 6,
    name: "COCONUT OIL",
    oldPrice: "$20.00",
    newPrice: "$15.00",
    imgSrc: "/assets/landing-page/product2.png",
  },
  {
    id: 7,
    name: "MANGO HONEY",
    oldPrice: "$9.00",
    newPrice: "$6.00",
    imgSrc: "/assets/landing-page/product3.png",
  },
  {
    id: 8,
    name: "HONEY HABANERO",
    oldPrice: "$12.00",
    newPrice: "$9.00",
    imgSrc: "/assets/landing-page/product4.png",
  },
];

export default function ProductSlider() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="swiper-container relative mt-[76px] mb-[129px]">
      <div className="w-[1028px] mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="swiper-box">
              <Image
                className="max-w-[234px]"
                alt="product-img"
                src={product.imgSrc}
                width={234}
                height={234}
              />
              <div className="text-center">
                <h3 className="mt-4 font-semibold text-[#D29A5A] text-lg">
                  {product.name}
                </h3>
                <p className="text-sm">
                  <span className="line-through">{product.oldPrice}</span>{" "}
                  <span className="font-bold">{product.newPrice}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        ref={prevRef}
        className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ml-10"
      >
        <Image
          className="arrow-icon min-w-20"
          alt="prev-arrow"
          src="/assets/landing-page/left_arrow.png"
          width={200}
          height={200}
        />
      </div>
      <div
        ref={nextRef}
        className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer mr-10"
      >
        <Image
          className="arrow-icon min-w-20"
          alt="next-arrow"
          src="/assets/landing-page/right_arrow.png"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
