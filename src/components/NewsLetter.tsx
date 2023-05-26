import { Button, Typography } from "@/ui";
import Input from "@/ui/Input";
import Image from "next/image";
import { PieChart, Star } from "../../public/assets";

export default function NewsLetter() {
  return (
    <div className="relative w-full h-[534px] bg-bgLightBlue flex justify-center items-center">
      <div className="relative flex flex-col gap-20 items-center">
        <div className="max-w-lg">
          <Typography variant="Heading2" className="text-center">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Input />
          <Button className="bg-black text-white px-8 py-5 font-medium">
            SUBSCRIBE
          </Button>
        </div>
        <div className="absolute -top-[55px] right-[20px]">
          <Image src={PieChart} alt="pie " />
        </div>
      </div>

      <div className="absolute -top-[48px] left-[230px]">
        <Image src={Star} alt="Star" />
      </div>
    </div>
  );
}
