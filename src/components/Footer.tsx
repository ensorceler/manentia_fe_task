import { Typography } from "@/ui";
import SocialIconButton from "@/ui/SocialIconButton";
import { TypePredicateKind } from "typescript";

export default function Footer() {
  return (
    <div className="h-[382px] w-full">
      <div className="h-full w-full flex justify-center items-center">
        <div className="max-w-7xl flex flex-row gap-12">
          <div className="flex flex-col gap-8 w-[372px]">
            <Typography
              variant="Subheading3"
              className="font-bold text-[#00329B]"
            >
              LOGO
            </Typography>
            <Typography variant="Paragraph" className="text-[#515151]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Typography variant="Paragraph" className="text-[#515151]">
              @Lorem
            </Typography>
          </div>

          <div className="flex flex-col gap-6 w-[200px]">
            <Typography variant="Paragraph" className="font-medium text-black">
              About Us
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="Paragraph" className="text-[#515151]">
                Lorem
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                Portfolio
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                Careers
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                Contact Us
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[282px]">
            <Typography variant="Paragraph" className="font-medium text-black">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-5">
              <Typography variant="Paragraph" className="text-[#515151]">
                Lorem Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                +908 89097 890
              </Typography>
            </div>
          </div>
          {/** social media icons */}
          <div className="flex flex-col justify-end">
            <div className="flex flex-row items-center gap-4">
              <SocialIconButton social="fb" />
              <SocialIconButton social="insta" />
              <SocialIconButton social="twitter" />
              <SocialIconButton social="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-t-[#D2D2D2] flex justify-center items-center py-8">
        <Typography variant="Caption" className="text-[#686868]">
          Copyright ® 2021 Lorem All rights Received
        </Typography>
      </div>
    </div>
  );
}
