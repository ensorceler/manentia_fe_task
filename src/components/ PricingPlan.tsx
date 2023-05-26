import PricingPlanCard from "./PricingPlanCard";

export default function PricingPlan() {
  return (
    <div className="grid grid-cols-2 gap-[50px] max-w-6xl ml-auto mr-auto">
      <PricingPlanCard variant={1} />
      <PricingPlanCard variant={2} />
    </div>
  );
}
