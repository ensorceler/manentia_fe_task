import CompanyIntroduction from "@/components/CompanyIntroduction";
import ExpertiseArea from "@/components/Expertise/ExpertiseArea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import PricingPlan from "@/components/PricingPlans/ PricingPlan";
import Sponsors from "@/components/Sponsors";
import WorkDemo from "@/components/WorkDemo/WorkDemo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CompanyIntroduction />
      <ExpertiseArea />
      <WorkDemo />
      <PricingPlan />
      <Sponsors />
      <NewsLetter />
      <Footer />
    </main>
  );
}
