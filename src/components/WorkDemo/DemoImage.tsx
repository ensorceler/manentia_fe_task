import Image from "next/image";
import {
  FloatingIphone,
  GuyWearingVRGlasses,
  WebsiteMockup,
} from "../../../public/assets";
import { tw } from "@/utils/tw";

interface Props {
  image: "iphone" | "mockup" | "vrglasses";
  className?: string;
}

const DemoImage = ({ image, className }: Props) => {
  return (
    <div className={tw("absolute z-20", className && `${className}`)}>
      {image === "iphone" && (
        <Image
          src={FloatingIphone}
          alt="floating-iphone"
          height={500}
          width={650}
          unoptimized
        />
      )}
      {image === "mockup" && (
        <Image src={WebsiteMockup} alt="website-mockup" unoptimized />
      )}
      {image === "vrglasses" && (
        <Image
          src={GuyWearingVRGlasses}
          alt="guy-wearing-glasses"
          height={800}
          width={800}
          unoptimized
        />
      )}
    </div>
  );
};

export default DemoImage;
