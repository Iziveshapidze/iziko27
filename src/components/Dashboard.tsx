
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
    { id: 1, title: "Algebra Fundamentals", type: "Worksheet", date: "Today" },
    { id: 2, title: "Solar System Quiz", type: "Assessment", date: "Yesterday" },
    { id: 3, title: "Literary Devices PowerPoint", type: "Presentation", date: "3 days ago" },
  ];

  const upcomingTasks = [
    { id: 1, title: "Grade 10th Grade Essays", due: "Today, 5:00 PM" },
    { id: 2, title: "Create Physics Quiz", due: "Tomorrow, 9:00 AM" },
    { id: 3, title: "Department Meeting", due: "Wed, 3:30 PM" },
  ];

  const statsCards = [
    { title: "Resources", value: "128", icon: <BookOpen className="w-5 h-5 text-edu-blue" />, color: "bg-edu-blue/10" },
    { title: "Assignments", value: "42", icon: <FileCheck className="w-5 h-5 text-edu-orange" />, color: "bg-edu-orange/10" },
    { title: "Students", value: "96", icon: <Users className="w-5 h-5 text-edu-purple" />, color: "bg-edu-purple/10" },
    { title: "Insights", value: "12", icon: <BarChart3 className="w-5 h-5 text-edu-teal" />, color: "bg-edu-teal/10" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-edu-orange rounded-full border-2 border-white"></span>
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
                  <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
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
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-edu-blue" />
              Recent Resources
            </CardTitle>
            <CardDescription>Your most recently accessed teaching materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResources.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-edu-blue/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-edu-blue" />
                    </div>
                    <div>
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-sm text-muted-foreground">{resource.type}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {resource.date}
                  </div>
                </div>
              ))}
              <button className="w-full text-center py-2 text-edu-blue hover:underline">
                View All Resources
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-edu-orange" />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>Tasks and deadlines on your schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-edu-orange/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-edu-orange" />
                    </div>
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">Due: {task.due}</p>
                    </div>
                  </div>
                  <button className="h-8 w-8 rounded-md hover:bg-muted-foreground/20 flex items-center justify-center">
                    <FileCheck className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
              <button className="w-full text-center py-2 text-edu-orange hover:underline">
                View All Tasks
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
