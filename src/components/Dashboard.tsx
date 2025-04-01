
import React from 'react';
import { 
  BookOpen, 
  FileCheck, 
  Users, 
  BarChart3, 
  Bell,
  Calendar,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  // Mock data
  const recentResources = [
    { id: 1, title: "ალგებრის საფუძვლები", type: "სამუშაო ფურცელი", date: "დღეს" },
    { id: 2, title: "მზის სისტემის ტესტი", type: "შეფასება", date: "გუშინ" },
    { id: 3, title: "ლიტერატურული ხერხები", type: "პრეზენტაცია", date: "3 დღის წინ" },
  ];

  const upcomingTasks = [
    { id: 1, title: "მე-10 კლასის ესეების შეფასება", due: "დღეს, 17:00" },
    { id: 2, title: "ფიზიკის ტესტის შექმნა", due: "ხვალ, 9:00" },
    { id: 3, title: "კათედრის შეხვედრა", due: "ოთხშაბათი, 15:30" },
  ];

  const statsCards = [
    { title: "რესურსები", value: "128", icon: <BookOpen className="w-5 h-5 text-[#8b634a]" />, color: "bg-[#8b634a]/10" },
    { title: "დავალებები", value: "42", icon: <FileCheck className="w-5 h-5 text-[#c24e2c]" />, color: "bg-[#c24e2c]/10" },
    { title: "მოსწავლეები", value: "96", icon: <Users className="w-5 h-5 text-[#5e4835]" />, color: "bg-[#5e4835]/10" },
    { title: "ანალიტიკა", value: "12", icon: <BarChart3 className="w-5 h-5 text-[#a57659]" />, color: "bg-[#a57659]/10" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-georgian">მთავარი</h1>
          <p className="text-muted-foreground font-georgian">მოგესალმებით! აქ არის რა ხდება დღეს.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#c24e2c] rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground font-georgian">{card.title}</p>
                  <p className="text-3xl font-bold">{card.value}</p>
                </div>
                <div className={`p-3 rounded-full ${card.color}`}>
                  {card.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-georgian">
              <BookOpen className="w-5 h-5 text-[#8b634a]" />
              ბოლო რესურსები
            </CardTitle>
            <CardDescription className="font-georgian">თქვენი ბოლოს გამოყენებული სასწავლო მასალები</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResources.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#8b634a]/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#8b634a]" />
                    </div>
                    <div>
                      <p className="font-medium font-georgian">{resource.title}</p>
                      <p className="text-sm text-muted-foreground font-georgian">{resource.type}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-georgian">{resource.date}</span>
                  </div>
                </div>
              ))}
              <button className="w-full text-center py-2 text-[#8b634a] hover:underline font-georgian">
                ყველა რესურსის ნახვა
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-georgian">
              <Calendar className="w-5 h-5 text-[#c24e2c]" />
              მომავალი დავალებები
            </CardTitle>
            <CardDescription className="font-georgian">დავალებები და ვადები თქვენს განრიგში</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#c24e2c]/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#c24e2c]" />
                    </div>
                    <div>
                      <p className="font-medium font-georgian">{task.title}</p>
                      <p className="text-sm text-muted-foreground font-georgian">ვადა: {task.due}</p>
                    </div>
                  </div>
                  <button className="h-8 w-8 rounded-md hover:bg-muted-foreground/20 flex items-center justify-center">
                    <FileCheck className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
              <button className="w-full text-center py-2 text-[#c24e2c] hover:underline font-georgian">
                ყველა დავალების ნახვა
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
