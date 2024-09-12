import React from "react";
import ProductSlider from "./product-slider";
import Image from "next/image";

export default function Products() {
  return (
    <section className="container mr-0 relative z-20 ">
      <Image
        className="absolute -top-44 left-0 z-10"
        alt="leaves"
        src="/assets/landing-page/leaves.png"
        width={319}
        height={319}
      />
      <div>
        <h1 className="text-[#D29A5A] text-[38px] ml-[65px] mt-[129px]">
          CHEF MATT PRODUCTS
        </h1>
        <div className="ml-[65px] border-b-4 border-[#D29A5A] w-[572px]"></div>
        <p className="ml-[65px] w-[572px] mt-[31px] text-lg">
          Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
          yourself and Thank us later.
        </p>
        <ProductSlider />
      </div>
    </section>
  );
}
