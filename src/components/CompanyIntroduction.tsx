"use client";
import { Button, GlowEffect } from "@/ui";
import Decorator from "@/ui/Decorator";
import Image from "next/image";

export default function CompanyIntroduction() {
  return (
    <div className="relative w-full bg-primaryBlue/10 px-20">
      <div className="relative max-w-6xl ml-auto mr-auto pt-32 grid grid-cols-2 gap-24">
        <div className="max-w-4xl flex flex-col gap-8">
          <p className="font-semibold text-4xl leading-[60px]">
            Experienced{" "}
            <span className="text-primaryBlue"> mobile and web </span>{" "}
            applications and website builders measuring.
          </p>
          <p className="text-neutral-700 leading-[32px]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
          <div className="flex flex-row items-center gap-2 ">
            <Button>Contact Us</Button>
            <Button type="secondary">View More</Button>
          </div>
        </div>
        <div className="relative h-[600px]">
          <div className="absolute -top-[180px]">
            <Image
              src={"./assets/svgs/BillLaptop.svg"}
              height={100}
              width={450}
              alt="Bill Sitting with Laptop"
              className="z-20"
              unoptimized
            />
          </div>
          <div className="absolute top-[70px] left-[90px]">
            <Image
              src="./assets/svgs/flowertub.svg"
              height={50}
              width={50}
              alt="flower tub"
            />
          </div>
          <div className="absolute bottom-[148px] right-[0px]">
            <Image
              src="./assets/svgs/bigplant.svg"
              height={200}
              width={150}
              alt="big plant"
              unoptimized
            />
          </div>
          <div className="absolute right-[20px] top-[0px]">
            <Image
              src="./assets/svgs/brick.svg"
              height={75}
              width={75}
              alt="brick"
              unoptimized
            />
          </div>
        </div>
        <GlowEffect className="-right-[25px] top-[20px]" />
        <GlowEffect type="Purple" className="-left-[150px] top-[20px]" />
      </div>
      <Decorator variant="left" className="-bottom-[160px] left-[0px]" />
      <Decorator variant="right" className="bottom-[50px] right-[0px]" />
    </div>
  );
}
