import { Button, Typography } from "@/ui";
import { tw } from "@/utils/tw";
import Image from "next/image";

interface Props {
  variant: number;
}

const PricingPlanCard = ({ variant }: Props) => {
  return (
    <div
      className={tw(
        "relative bg-[#F4F4F4] p-12 rounded-2xl h-[459px] w-[572px] flex justify-center items-center",
        variant === 2 && "bg-primaryBlue"
      )}
    >
      <div className="flex flex-col gap-9 items-center">
        <div className="max-w-xs">
          <Typography
            variant="Subheading1"
            className={tw("text-center", variant === 2 && "text-white")}
          >
            Lorem Ipsum is simply dummy text.
          </Typography>
        </div>
        <Typography
          variant="Paragraph"
          className={tw(
            "text-center text-[#545454]",
            variant === 2 && "text-white"
          )}
        >
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </Typography>
        <div>
          <Button type={variant === 1 ? "primary" : "secondary"}>
            View More
          </Button>
        </div>
      </div>
      {variant === 2 && (
        <div className="absolute -right-6 -top-14 ">
          <Image
            src={"./assets/svgs/bell.svg"}
            height={120}
            width={120}
            alt="pricing_plan"
            unoptimized
          />
        </div>
      )}
    </div>
  );
};

export default PricingPlanCard;
