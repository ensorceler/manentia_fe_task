import Image from "next/image";
import { HappyIcon } from "../../public/assets";
import { tw } from "@/utils/tw";
import { Typography } from "@/ui";
import DemoImage from "./DemoImage";

interface Props {
  className?: string;
  happyColor?: "green" | "blue" | "purple";
  type: "mobile" | "mockup" | "vr";
}

const DemoInfoCard = ({ className, happyColor = "green", type }: Props) => {
  return (
    <>
      <div className={tw(`absolute max-w-lg `, className && `${className}`)}>
        <div className="flex flex-col gap-10">
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
              <Typography variant="Subheading3">
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography variant="Caption" className="text-[#868686]">
                Lorem Ipsum is simply dummy text
              </Typography>
            </div>
          </div>

          <div>
            <Typography variant="Heading2">
              <span className="text-primaryBlue">Lorem Ipsum</span> is simply
              dummy text of the printing.
            </Typography>
          </div>

          <div className="max-w-md">
            <Typography variant="Paragraph" className="text-[#545454]">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.{" "}
            </Typography>
          </div>
        </div>
      </div>
      {type === "mobile" && (
        <DemoImage image="iphone" className="right-0 top-0" />
      )}

      {type === "mockup" && (
        <DemoImage image="mockup" className="left-0 top-[600px] " />
      )}
      {type === "vr" && (
        <DemoImage
          image="vrglasses"
          className="-bottom-[320px] right-[100px]"
        />
      )}
    </>
  );
};

export default DemoInfoCard;
