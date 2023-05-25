import { Button } from "@/ui";
import Image from "next/image";

export default function PricingPlan() {
  return (
    <div className="grid grid-cols-2 gap-[50px] max-w-6xl ml-auto mr-auto">
      <div className="bg-[#F4F4F4] p-12 rounded-2xl h-[459px] w-[572px] flex justify-center items-center">
        <div className="flex flex-col gap-9 items-center">
          <div className="max-w-xs">
            <p className="text-2xl text-center font-semibold">
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
          <p className="text-base text-center text-[#545454]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
          <div>
            <Button>View More</Button>
          </div>
        </div>
      </div>
      <div className="relative bg-primaryBlue p-12 rounded-2xl h-[459px] w-[572px] flex justify-center items-center">
        <div className="flex flex-col gap-9 items-center">
          <div className="max-w-xs">
            <p className="text-2xl text-center font-semibold text-white">
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
          <p className="text-base text-center text-white">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
          <div>
            <Button type="secondary">View More</Button>
          </div>
        </div>
        <div className="absolute -right-6 -top-14 ">
          <Image
            src={"./assets/svgs/bell.svg"}
            height={120}
            width={120}
            alt="pricing_plan"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
