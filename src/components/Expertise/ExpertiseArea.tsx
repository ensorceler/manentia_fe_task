import ExpertiseBox from "./ExpertiseBox";

export default function ExpertiseArea() {
  return (
    <div className="w-full py-10 border border-b-neutral-200 flex justify-center items-center ">
      <div className="flex flex-row items-center gap-6">
        <ExpertiseBox type="web" />
        <ExpertiseBox type="seo" />
        <ExpertiseBox type="ar/vr" />
        <ExpertiseBox type="mobile" />
      </div>
    </div>
  );
}
