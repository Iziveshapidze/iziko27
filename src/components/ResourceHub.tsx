
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
      title: "ალგებრის საფუძვლები", 
      type: "სამუშაო ფურცელი", 
      icon: <FileText className="w-5 h-5" />, 
      category: "მათემატიკა",
      date: "15 მარტი, 2023",
      downloads: 128
    },
    { 
      id: 2, 
      title: "ფოტოსინთეზის დიაგრამა", 
      type: "სურათი", 
      icon: <Image className="w-5 h-5" />, 
      category: "ბუნებისმეტყველება",
      date: "22 თებერვალი, 2023",
      downloads: 89
    },
    { 
      id: 3, 
      title: "ლიტერატურული ხერხები", 
      type: "პრეზენტაცია", 
      icon: <FileText className="w-5 h-5" />, 
      category: "ქართული",
      date: "3 აპრილი, 2023",
      downloads: 201
    },
    { 
      id: 4, 
      title: "მეორე მსოფლიო ომის ქრონოლოგია", 
      type: "დოკუმენტი", 
      icon: <FileText className="w-5 h-5" />, 
      category: "ისტორია",
      date: "12 იანვარი, 2023",
      downloads: 156
    },
    { 
      id: 5, 
      title: "უჯრედის დაყოფის პროცესი", 
      type: "ვიდეო", 
      icon: <Video className="w-5 h-5" />, 
      category: "ბუნებისმეტყველება",
      date: "28 მარტი, 2023",
      downloads: 73
    },
    { 
      id: 6, 
      title: "გეომეტრიის საფუძვლების ტესტი", 
      type: "შეფასება", 
      icon: <FileCheck className="w-5 h-5" />, 
      category: "მათემატიკა",
      date: "10 აპრილი, 2023",
      downloads: 65
    },
  ];

  // Resource categories
  const categories = [
    "ყველა",
    "მათემატიკა",
    "ბუნებისმეტყველება",
    "ქართული",
    "ისტორია",
    "უცხო ენები",
    "ხელოვნება",
    "სპორტი"
  ];

  // Resource types
  const types = [
    "ყველა ტიპი",
    "სამუშაო ფურცელი",
    "პრეზენტაცია",
    "შეფასება",
    "ვიდეო",
    "სურათი",
    "დოკუმენტი"
  ];

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getResourceColor = (type: string) => {
    switch(type) {
      case "სამუშაო ფურცელი": return "bg-[#8b634a] text-white";
      case "სურათი": return "bg-[#5e4835] text-white";
      case "პრეზენტაცია": return "bg-[#c24e2c] text-white";
      case "დოკუმენტი": return "bg-[#607744] text-white";
      case "ვიდეო": return "bg-[#a57659] text-white";
      case "შეფასება": return "bg-[#b25d50] text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-georgian">რესურსების ცენტრი</h1>
          <p className="text-muted-foreground font-georgian">აღმოაჩინეთ, გააზიარეთ და ორგანიზება გაუკეთეთ სასწავლო მასალებს</p>
        </div>
        <Button className="bg-[#8b634a] hover:bg-[#a57659] font-georgian">
          <Plus className="w-4 h-4 mr-2" />
          რესურსის დამატება
        </Button>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="რესურსების ძიება..."
            className="pl-10 font-georgian"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 font-georgian">
                <Filter className="h-4 w-4" />
                კატეგორია
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category} className="font-georgian">
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 font-georgian">
                <Filter className="h-4 w-4" />
                ტიპი
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {types.map((type) => (
                <DropdownMenuItem key={type} className="font-georgian">
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
                  <span className="text-sm font-medium font-georgian">{resource.type}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="font-georgian">
                        <Download className="mr-2 h-4 w-4" />
                        <span>ჩამოტვირთვა</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="font-georgian">
                        <Share2 className="mr-2 h-4 w-4" />
                        <span>გაზიარება</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="font-georgian">რედაქტირება</DropdownMenuItem>
                      <DropdownMenuItem className="font-georgian">წაშლა</DropdownMenuItem>
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
                <h3 className="font-semibold mb-1 font-georgian">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 font-georgian">{resource.category}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="font-georgian">დამატებულია: {resource.date}</span>
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
