import React from "react";

export default function Advertisment() {
  return (
    <section className="container mr-0  bg-[url('/assets/landing-page/promotion.png')] w-full h-[400px] bg-cover text-white">
      <div className="ml-[65px] pt-[139px]">
        <h1 className="text-[38px] w-fit border-b-2">
          SIGN UP SPECIAL PROMOTIONS
        </h1>
        <p className="text-lg mt-[31px]">
          Get exclusive deals you won&rsquo;t find anywhere else straight to
          your inbox!
        </p>
        <div className="flex gap-4 mt-[31px]">
          <input
            type="email"
            placeholder="Enter email address"
            className="border border-white w-[516px] placeholder-white text-white bg-white/15 p-2 outline-none "
          />
          <button className="p-2 bg-[#D29A5A] w-[188px] h-[43px] text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
