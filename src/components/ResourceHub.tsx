
import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Image, 
  FileCheck, 
  Search, 
  Filter, 
  Plus, 
  Download,
  Share2,
  MoreHorizontal,
  Video
} from 'lucide-react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const ResourceHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock resource data
  const resources = [
    { 
      id: 1, 
      title: "Algebra Fundamentals", 
      type: "Worksheet", 
      icon: <FileText className="w-5 h-5" />, 
      category: "Math",
      date: "Mar 15, 2023",
      downloads: 128
    },
    { 
      id: 2, 
      title: "Photosynthesis Diagram", 
      type: "Image", 
      icon: <Image className="w-5 h-5" />, 
      category: "Science",
      date: "Feb 22, 2023",
      downloads: 89
    },
    { 
      id: 3, 
      title: "Literary Devices", 
      type: "Presentation", 
      icon: <FileText className="w-5 h-5" />, 
      category: "English",
      date: "Apr 3, 2023",
      downloads: 201
    },
    { 
      id: 4, 
      title: "World War II Timeline", 
      type: "Document", 
      icon: <FileText className="w-5 h-5" />, 
      category: "History",
      date: "Jan 12, 2023",
      downloads: 156
    },
    { 
      id: 5, 
      title: "Cell Division Process", 
      type: "Video", 
      icon: <Video className="w-5 h-5" />, 
      category: "Science",
      date: "Mar 28, 2023",
      downloads: 73
    },
    { 
      id: 6, 
      title: "Geometry Basics Quiz", 
      type: "Assessment", 
      icon: <FileCheck className="w-5 h-5" />, 
      category: "Math",
      date: "Apr 10, 2023",
      downloads: 65
    },
  ];

  // Resource categories
  const categories = [
    "All",
    "Math",
    "Science",
    "English",
    "History",
    "Languages",
    "Art",
    "PE"
  ];

  // Resource types
  const types = [
    "All Types",
    "Worksheet",
    "Presentation",
    "Assessment",
    "Video",
    "Image",
    "Document"
  ];

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getResourceColor = (type: string) => {
    switch(type) {
      case "Worksheet": return "bg-edu-blue text-white";
      case "Image": return "bg-edu-purple text-white";
      case "Presentation": return "bg-edu-orange text-white";
      case "Document": return "bg-edu-green text-white";
      case "Video": return "bg-edu-teal text-white";
      case "Assessment": return "bg-edu-pink text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Resource Hub</h1>
          <p className="text-muted-foreground">Discover, share, and organize teaching materials</p>
        </div>
        <Button className="bg-edu-blue hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Resource
        </Button>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search resources..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Category
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {types.map((type) => (
                <DropdownMenuItem key={type}>
                  {type}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Resource grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className={`${getResourceColor(resource.type)} p-4`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{resource.type}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="mr-2 h-4 w-4" />
                        <span>Share</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="h-16 flex items-center justify-center mt-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    {resource.icon}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.category}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Added: {resource.date}</span>
                  <span className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    {resource.downloads}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResourceHub;
