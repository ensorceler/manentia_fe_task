import Image from "next/image";
import {
  BoneoShop,
  Caspio,
  HyperGrid,
  Leotrippi,
} from "../../public/assets/images";

export default function Sponsors() {
  return (
    <div className="flex justify-center items-center px-10 py-20 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p className="text-center font-semibold tracking-wide">
            You will be in good company
          </p>
        </div>
        {/** companies */}
        <div className="flex flex-row items-center gap-28">
          <Image src={BoneoShop} alt="boneoshop" height={150} width={150} />
          <Image src={Caspio} alt="boneoshop" height={150} width={150} />
          <Image src={HyperGrid} alt="boneoshop" height={150} width={150} />
          <Image src={Leotrippi} alt="boneoshop" height={150} width={150} />
        </div>
      </div>
    </div>
  );
}
