import { tw } from "@/utils/tw";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary"; // buttons can be primary/secondary
}
const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <button
      className={tw(
        `bg-primaryBlue text-white text-sm px-6 rounded-md py-2 active:scale-95`,
        type === "secondary" &&
          `bg-white border border-primaryBlue text-primaryBlue`,
        className && `${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
