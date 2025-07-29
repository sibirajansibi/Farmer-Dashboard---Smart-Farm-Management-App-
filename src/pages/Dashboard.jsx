import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Wheat,
  Calendar,
  AlertCircle
} from 'lucide-react';
import '../App.css';

const Dashboard = () => {
  // Mock data based on the UI mockups
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹45,231.89',
      change: '+20.1% from last month',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Workers',
      value: '12',
      change: '+2 from last month',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Current Crops',
      value: '8',
      change: '3 ready for harvest',
      icon: Wheat,
      color: 'text-yellow-600'
    },
    {
      title: 'Pending Payments',
      value: '₹3,240',
      change: '5 payments due',
      icon: AlertCircle,
      color: 'text-red-600'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'payment', description: 'Paid worker wages for week 28', amount: '₹2,400', time: '2 hours ago' },
    { id: 2, type: 'crop', description: 'Corn harvest completed - South Field', amount: '+$15,600', time: '1 day ago' },
    { id: 3, type: 'rental', description: 'Equipment rental payment received', amount: '+₹800', time: '2 days ago' },
    { id: 4, type: 'expense', description: 'Fertilizer purchase for North Field', amount: '-₹1,200', time: '3 days ago' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Wheat harvest - North Field', date: '2025-08-02', priority: 'high' },
    { id: 2, task: 'Worker payment due - Miguel Rodriguez', date: '2025-08-05', priority: 'medium' },
    { id: 3, task: 'Equipment maintenance - Tractor #2', date: '2025-08-08', priority: 'low' },
    { id: 4, task: 'Rental payment due - Land lease', date: '2025-08-10', priority: 'high' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening on your farm.</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Task
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest farm activities and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className={`text-sm font-semibold ${
                    activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {activity.amount}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Important tasks and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.task}</p>
                    <p className="text-xs text-gray-500">{task.date}</p>
                  </div>
                  <Badge 
                    variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Tasks
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks you can perform quickly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Users className="h-6 w-6 mb-2" />
              <span className="text-sm">Add Worker</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <DollarSign className="h-6 w-6 mb-2" />
              <span className="text-sm">Record Payment</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Wheat className="h-6 w-6 mb-2" />
              <span className="text-sm">Plan Crop</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <TrendingUp className="h-6 w-6 mb-2" />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

