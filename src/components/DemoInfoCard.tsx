import Image from "next/image";
import { HappyIcon } from "../../public/assets";
import { tw } from "@/utils/tw";

interface Props {
  className?: string;
  happyColor?: "green" | "blue" | "purple";
}

const DemoInfoCard = ({ className, happyColor = "green" }: Props) => {
  return (
    <div className={tw(`absolute max-w-lg `, className && `${className}`)}>
      <div className="flex flex-col gap-12">
        {/** header portion */}
        <div className="flex flex-row items-center gap-6">
          <div
            className={tw(
              "h-14 w-14 rounded-full bg-[#08D3BB] flex justify-center items-center",
              happyColor === "blue" && `bg-primaryBlue`,
              happyColor === "purple" && `bg-[#9208D3]`
            )}
          >
            <Image src={HappyIcon} alt="happy-icon" height={26} width={26} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-normal text-[17px]">
              Lorem Ipsum is simply dummy text
            </p>
            <p className="">Lorem Ipsum is simply dummy text</p>
          </div>
        </div>

        <div>
          <p className="text-3xl leading-[51px] font-semibold">
            <span className="text-primaryBlue">Lorem Ipsum</span> is simply
            dummy text of the printing.
          </p>
        </div>
        <div>
          <p className="text-base">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoInfoCard;
