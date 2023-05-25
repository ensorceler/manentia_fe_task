import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";
import {
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../public/assets";

interface Props {
  social: "fb" | "insta" | "twitter" | "linkedin";
}

export default function SocialIconButton({ social }: Props) {
  return (
    <button className="h-9 w-9 rounded-full flex justify-center items-center bg-white shadow-lg shadow-neutral-400/50">
      {social === "fb" && (
        <Image
          src={FacebookIcon}
          height={16}
          width={16}
          alt="facebook icon"
          className=""
        />
      )}
      {social === "insta" && (
        <Image
          src={InstaIcon}
          height={16}
          width={16}
          alt="insta icon"
          className=""
        />
      )}
      {social === "twitter" && (
        <Image
          src={TwitterIcon}
          height={16}
          width={16}
          alt="twitter icon"
          className=""
        />
      )}
      {social === "linkedin" && (
        <Image
          src={LinkedinIcon}
          height={16}
          width={16}
          alt="linkedin icon"
          className=""
        />
      )}
    </button>
  );
}
