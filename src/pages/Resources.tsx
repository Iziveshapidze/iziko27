
import Navigation from "@/components/Navigation";
import ResourceHub from "@/components/ResourceHub";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <ResourceHub />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
