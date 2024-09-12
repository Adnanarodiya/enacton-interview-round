import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <section className="container mr-0">
      <div className="flex gap-0">
        <Image
          alt="img"
          src="/assets/landing-page/card1.png"
          width={641}
          height={230}
        />
        <Image
          alt="img"
          src="/assets/landing-page/card2.png"
          width={641}
          height={230}
        />
      </div>
      <div className="flex gap-0">
        <Image
          alt="img"
          src="/assets/landing-page/card3.png"
          width={641}
          height={230}
        />
        <Image
          alt="img"
          src="/assets/landing-page/card4.png"
          width={641}
          height={230}
        />
      </div>
    </section>
  );
}
