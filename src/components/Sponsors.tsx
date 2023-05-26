import Image from "next/image";
import {
  BoneoShop,
  Caspio,
  HyperGrid,
  Leotrippi,
} from "../../public/assets/images";
import { Typography } from "@/ui";

export default function Sponsors() {
  return (
    <div className="flex justify-center items-center px-10 py-20 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <Typography
            variant="Subheading1"
            className="text-center font-medium leading-[38px]"
          >
            You will be in good Company
          </Typography>
        </div>
        {/** companies */}
        <div className="flex flex-row items-center gap-28">
          <Image src={BoneoShop} alt="boneoshop" height={185} width={185} />
          <Image src={Caspio} alt="boneoshop" height={185} width={185} />
          <Image src={HyperGrid} alt="boneoshop" height={185} width={185} />
          <Image src={Leotrippi} alt="boneoshop" height={185} width={185} />
        </div>
      </div>
    </div>
  );
}
