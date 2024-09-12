import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mr-0">
      <div className="flex gap-[74px] justify-center mt-[76px] mb-[70px]">
        <div className="flex items-start gap-[22px] w-fit">
          <Image
            className="object-contain "
            alt="shipping"
            src="/assets/landing-page/shipping.png"
            width={36}
            height={32}
          />
          <div>
            <h1 className="text-[#D29A5A] text-2xl">FREE SHIPPING WORLDWIDE</h1>
            <p>Guaranteed Delivery</p>
          </div>
        </div>
        <div className="flex items-start gap-[22px] w-fit">
          <Image
            className="object-contain "
            alt="shipping"
            src="/assets/landing-page/service.png"
            width={36}
            height={32}
          />
          <div>
            <h1 className="text-[#D29A5A] text-2xl">24/7 CUSTOMER SERVICE</h1>
            <p>Text Us 24/7 at 070-7782-9137</p>
          </div>
        </div>
        <div className="flex items-start gap-[22px] w-fit">
          <Image
            className="object-contain "
            alt="shipping"
            src="/assets/landing-page/shipping.png"
            width={36}
            height={32}
          />
          <div>
            <h1 className="text-[#D29A5A] text-2xl">QUALITY GUARANTEE!</h1>
            <p>Send Within 30 Days</p>
          </div>
        </div>
      </div>
      <div className="border-b-8 border-[#D29A5A] w-full"></div>
      <Image
        className="object-contain my-10 mx-auto "
        alt="shipping"
        src="/assets/landing-page/chef-name.png"
        width={447}
        height={299}
      />
    </footer>
  );
}
