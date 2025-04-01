
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";

const DashboardPage = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#FFF59D] to-[#81D4FA]">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
