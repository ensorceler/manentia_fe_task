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
        {type === "web" && <p className="font-semibold">Web Application</p>}
        {type === "seo" && <p className="font-semibold">SEO</p>}
        {type === "ar/vr" && <p className="font-semibold">AR/VR Solutions</p>}
        {type === "mobile" && (
          <p className="font-semibold">Mobile Applications</p>
        )}
        <p className="text-[#969696]">Lorem Ipsum is simply</p>
      </div>
    </div>
  );
};

export default ExpertiseBox;
