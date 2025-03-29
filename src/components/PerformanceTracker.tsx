
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BookOpen, AlertTriangle, TrendingUp, TrendingDown, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PerformanceTracker = () => {
  // Mock performance data
  const subjectPerformanceData = [
    { name: 'Math', score: 85, previous: 78 },
    { name: 'English', score: 92, previous: 88 },
    { name: 'Science', score: 78, previous: 82 },
    { name: 'History', score: 88, previous: 80 },
    { name: 'Languages', score: 75, previous: 70 },
  ];
  
  const classPerformanceData = [
    { name: 'Class 9A', score: 82, previous: 78 },
    { name: 'Class 9B', score: 79, previous: 81 },
    { name: 'Class 10A', score: 85, previous: 80 },
    { name: 'Class 10B', score: 88, previous: 85 },
    { name: 'Class 11A', score: 76, previous: 79 },
  ];

  const studentDistributionData = [
    { name: 'Excellent', value: 35, color: '#4BB543' },
    { name: 'Good', value: 45, color: '#4C6FFF' },
    { name: 'Average', value: 15, color: '#FFD166' },
    { name: 'Needs Help', value: 5, color: '#FF5A8C' },
  ];

  const alertsData = [
    { id: 1, type: 'regression', subject: 'Science', class: 'Class 9B', change: -8 },
    { id: 2, type: 'improvement', subject: 'Math', class: 'Class 10A', change: 12 },
    { id: 3, type: 'regression', subject: 'History', class: 'Class 11A', change: -6 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded-md border">
          <p className="font-semibold">{label}</p>
          <p className="text-edu-blue">Current: {payload[0].value}%</p>
          <p className="text-gray-500">Previous: {payload[0].payload.previous}%</p>
          <p className={payload[0].value - payload[0].payload.previous > 0 
              ? "text-edu-green font-medium" 
              : "text-edu-pink font-medium"}>
            Change: {payload[0].value - payload[0].payload.previous > 0 ? '+' : ''}
            {(payload[0].value - payload[0].payload.previous).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Performance Tracker</h1>
        <p className="text-muted-foreground">Monitor student progress and identify areas for improvement</p>
      </div>

      <Tabs defaultValue="subjects">
        <TabsList className="mb-4">
          <TabsTrigger value="subjects">By Subject</TabsTrigger>
          <TabsTrigger value="classes">By Class</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subjects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={subjectPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="score" fill="#4C6FFF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={studentDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {studentDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-edu-orange" />
                  Performance Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alertsData.map((alert) => (
                    <div key={alert.id} className="flex items-center p-3 rounded-lg bg-muted/50">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        alert.type === 'regression' ? 'bg-edu-pink/10' : 'bg-edu-green/10'
                      }`}>
                        {alert.type === 'regression' ? (
                          <TrendingDown className="w-5 h-5 text-edu-pink" />
                        ) : (
                          <TrendingUp className="w-5 h-5 text-edu-green" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{alert.subject} in {alert.class}</p>
                        <p className={`text-sm ${
                          alert.type === 'regression' ? 'text-edu-pink' : 'text-edu-green'
                        }`}>
                          {alert.type === 'regression' ? 'Decreased by' : 'Improved by'} {Math.abs(alert.change)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="classes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Class Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={classPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="score" fill="#37B9C5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-edu-purple" />
                  Class Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-edu-green/10 flex items-center justify-center mr-3">
                        <TrendingUp className="w-5 h-5 text-edu-green" />
                      </div>
                      <div>
                        <p className="font-medium">Highest Improvement</p>
                        <p className="text-sm text-muted-foreground">Class 10A</p>
                      </div>
                    </div>
                    <span className="text-edu-green font-medium">+5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-edu-blue/10 flex items-center justify-center mr-3">
                        <BookOpen className="w-5 h-5 text-edu-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Highest Average</p>
                        <p className="text-sm text-muted-foreground">Class 10B</p>
                      </div>
                    </div>
                    <span className="font-medium">88%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-edu-pink/10 flex items-center justify-center mr-3">
                        <TrendingDown className="w-5 h-5 text-edu-pink" />
                      </div>
                      <div>
                        <p className="font-medium">Needs Attention</p>
                        <p className="text-sm text-muted-foreground">Class 11A</p>
                      </div>
                    </div>
                    <span className="text-edu-pink font-medium">-3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'High Attendance', performance: 87, color: '#4BB543' },
                        { name: 'Medium Attendance', performance: 78, color: '#FFD166' },
                        { name: 'Low Attendance', performance: 64, color: '#FF5A8C' },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="performance" radius={[4, 4, 0, 0]}>
                        {[
                          <Cell key="cell-0" fill="#4BB543" />,
                          <Cell key="cell-1" fill="#FFD166" />,
                          <Cell key="cell-2" fill="#FF5A8C" />
                        ]}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceTracker;
