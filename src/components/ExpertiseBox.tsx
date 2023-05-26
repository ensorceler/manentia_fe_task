import Typography from "@/ui/Typography";
import Image from "next/image";

interface ExpertiseBoxProps {
  type: "web" | "seo" | "ar/vr" | "mobile";
}

const ExpertiseBox = ({ type }: ExpertiseBoxProps) => {
  return (
    <div className="flex flex-row items-center gap-3 ">
      {type === "web" && (
        <div className="p-5 rounded-[20px] bg-[#EFEAFF]">
          <Image
            src={"./assets/svgs/web_application.svg"}
            height={36}
            width={36}
            alt="web application"
          />
        </div>
      )}
      {type === "seo" && (
        <div className="p-5 rounded-[20px] bg-[#ECFFDA]">
          <Image
            src={"./assets/svgs/seo_tag.svg"}
            height={36}
            width={36}
            alt="web application"
          />
        </div>
      )}
      {type === "ar/vr" && (
        <div className="p-5 rounded-[20px] bg-[#DAE6FF]">
          <Image
            src={"./assets/svgs/vr.svg"}
            height={36}
            width={36}
            alt="web application"
          />
        </div>
      )}
      {type === "mobile" && (
        <div className="p-5 rounded-[20px] bg-[#FFE5DA]">
          <Image
            src={"./assets/svgs/coding.svg"}
            height={36}
            width={36}
            alt="web application"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        {type === "web" && (
          <Typography variant="Subheading2">Web Application</Typography>
        )}
        {type === "seo" && <Typography variant="Subheading2">SEO</Typography>}
        {type === "ar/vr" && (
          <Typography variant="Subheading2">AR/VR Solutions</Typography>
        )}
        {type === "mobile" && (
          <Typography variant="Subheading2">Mobile Applications</Typography>
        )}
        <Typography variant="Paragraph" className="text-[#969696]">
          Lorem Ipsum is simply
        </Typography>
      </div>
    </div>
  );
};

export default ExpertiseBox;
