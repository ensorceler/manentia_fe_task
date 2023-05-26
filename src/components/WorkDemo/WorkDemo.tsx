import Image from "next/image";
import { DashedLine } from "../../../public/assets";
import DemoInfoCard from "./DemoInfoCard";
import { GlowEffect, Typography } from "@/ui";

export default function WorkDemo() {
  return (
    <div className="relative w-full pt-28 overflow-x-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8  items-center">
          <Typography variant="Heading2">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>

          <div className="max-w-2xl">
            <Typography
              variant="Subheading3"
              className="text-[#868686] text-center font-normal"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl ml-auto mr-auto mt-32 mb-[550px] ">
        {/** Long Bent dashed line */}
        <Image
          src={DashedLine}
          height={800}
          width={850}
          alt="dashed_line"
          className="z-0"
        />
        <DemoInfoCard type="mobile" className="-top-[6px] left-[50px] " />
        <DemoInfoCard
          type="mockup"
          className="-right-[30px] top-[700px]"
          happyColor="blue"
        />
        <DemoInfoCard
          type="vr"
          className="-bottom-[350px] left-[50px]"
          happyColor="purple"
        />
        {/** Purple Glow Effect Behind The guy with VR Glasses */}
        <GlowEffect
          type="Behind VR"
          className="-bottom-[360px] -right-[10px]"
        />
      </div>

      {/** Purple Glow Effect Right side to Iphone */}
      <GlowEffect
        type="Behind VR"
        className="z-20 top-[450px] -right-[150px]"
      />
    </div>
  );
}
