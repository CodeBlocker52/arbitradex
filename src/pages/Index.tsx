import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarketTicker from "@/components/MarketTicker";
import StatsCards from "@/components/StatsCards";
import OpportunitiesTable from "@/components/OpportunitiesTable";
import AnalyticsCharts from "@/components/AnalyticsCharts";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarketTicker />
      <StatsCards />
      <OpportunitiesTable />
      <AnalyticsCharts />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
