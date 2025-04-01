
import Navigation from "@/components/Navigation";
import PerformanceTracker from "@/components/PerformanceTracker";

const PerformancePage = () => {
  return (
    <div className="min-h-screen bg-[#f9f3e9] georgian-pattern">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <PerformanceTracker />
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
