import Image from "next/image";
import { DashedLine } from "../../public/assets";
import DemoInfoCard from "./DemoInfoCard";
import DemoImage from "./DemoImage";
import { GlowEffect } from "@/ui";

export default function WorkDemo() {
  return (
    <div className="relative w-full pt-28 overflow-x-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8  items-center">
          <p className="text-3xl font-semibold tracking-wider text-center">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <div className="max-w-2xl ">
            <p className="text-[#868686] text-lg text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl ml-auto mr-auto mt-32 mb-[550px] ">
        <Image
          src={DashedLine}
          height={800}
          width={850}
          alt="dashed_line"
          className="z-0"
        />
        <DemoInfoCard className="-top-[6px] left-[50px] " />
        <DemoInfoCard className="-right-[30px] top-[700px]" happyColor="blue" />
        <DemoInfoCard
          className="-bottom-[320px] left-[45px]"
          happyColor="purple"
        />
        <DemoImage image="iphone" className="right-0 top-0 " />
        <DemoImage image="mockup" className="left-0 top-[600px] " />
        <DemoImage
          image="vrglasses"
          className="-bottom-[320px] right-[100px]"
        />
        <GlowEffect
          type="Behind VR"
          className="-bottom-[320px] -right-[20px]"
        />
      </div>
      <GlowEffect
        type="Behind VR"
        className="z-20 top-[350px] -right-[150px]"
      />
    </div>
  );
}
