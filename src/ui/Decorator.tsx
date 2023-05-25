import Image from "next/image";
import { LeftSideVector, RightSideVector } from "../../public/assets";
import { tw } from "@/utils/tw";

interface Props {
  variant: "left" | "right";
  className?: string;
}

const Decorator = ({ variant, className }: Props) => {
  if (variant === "left")
    return (
      <div className={tw(`absolute`, className)}>
        <Image src={LeftSideVector} alt="left decorator" />
      </div>
    );
  else {
    return (
      <div className={tw(`absolute`, className)}>
        <Image src={RightSideVector} alt="left decorator" />
      </div>
    );
  }
};

export default Decorator;
