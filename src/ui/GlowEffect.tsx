import { tw } from "@/utils/tw";
import styles from "../styles/custom.module.css";

interface Props {
  type?: "Behind Bill" | "Purple";
  className?: string;
}

const GlowEffect = ({ type = "Behind Bill", className }: Props) => {
  if (type === "Purple") {
    return <div className=""></div>;
  }
  return (
    <div
      className={tw(
        `absolute -z-10 h-[450px] w-[450px] 
    `,
        `${styles.glow_gradient}`,
        className && `${className}`
      )}
    >
      <div
        className={tw(`${styles.glow_gradient_yellow}`, `w-full h-full`)}
      ></div>
    </div>
  );
};

export default GlowEffect;
