import SocialIconButton from "@/ui/SocialIconButton";

export default function Footer() {
  return (
    <div className="h-[382px] w-full">
      <div className="h-full w-full flex justify-center items-center">
        <div className="max-w-7xl flex flex-row gap-12">
          <div className="flex flex-col gap-6 w-[372px]">
            <p className="font-[800] text-lg text-[#00329B]">LOGO</p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>@Lorem</p>
          </div>

          <div className="flex flex-col gap-6 w-[200px]">
            <p className="font-semibold">About Us</p>
            <div className="flex flex-col gap-2">
              <p>Lorem</p>
              <p>Portfolio</p>
              <p>Careers</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[282px]">
            <p className="font-semibold">Contact Us</p>
            <div className="flex flex-col gap-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>+908 89097 890</p>
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
        <p className="tracking-wide text-[#686868]">
          Copyright ® 2021 Lorem All rights Received
        </p>
      </div>
    </div>
  );
}
