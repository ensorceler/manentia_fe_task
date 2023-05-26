import { tw } from "@/utils/tw";

interface Props {
  variant:
    | "Heading1"
    | "Heading2"
    | "Subheading1"
    | "Subheading2"
    | "Subheading3"
    | "Paragraph"
    | "Caption";
  className?: string;
  children: React.ReactNode;
}

const Typography = ({ children, variant, className }: Props) => {
  return (
    <p
      className={tw(
        `text-black `,
        variant === "Heading1" && `text-4xl font-semibold leading-[60px] `,
        variant === "Heading2" && `text-3xl font-semibold leading-[48px] `,
        variant === "Subheading1" && `text-2xl font-semibold leading-[40px]`,
        variant === "Subheading2" && `text-xl font-medium`,
        variant === "Subheading3" && `text-lg leading-[30px] font-medium`,
        variant === "Paragraph" &&
          `text-base font-normal text-[#5C5C5C] leading-[30px]`,
        variant === "Caption" &&
          `text-sm font-normal text-[#5C5C5C] leading-[24px]`,
        className && `${className}`
      )}
    >
      {children}
    </p>
  );
};

export default Typography;
