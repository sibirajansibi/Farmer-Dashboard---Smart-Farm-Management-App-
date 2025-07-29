import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Plus,
  Users,
  Clock,
  DollarSign,
  Calendar,
  Download
} from 'lucide-react';
import '../App.css';

const WorkerPayments = () => {
  const [activeTab, setActiveTab] = useState('pending');

  // Mock data based on the UI mockup
  const paymentStats = {
    totalWorkers: 4,
    pendingPayments: 3830,
    paidThisMonth: 2984,
    avgHourlyRate: 17
  };

  const pendingPayments = [
    {
      id: 1,
      worker: {
        name: 'Miguel Rodriguez',
        role: 'Field Supervisor',
        initials: 'MR'
      },
      period: 'Jan 1-15, 2025',
      task: 'Winter Wheat Maintenance',
      hours: 80,
      rate: 18,
      amount: 1440,
      dueDate: '2025-01-20'
    },
    {
      id: 2,
      worker: {
        name: 'Sarah Johnson',
        role: 'Equipment Operator',
        initials: 'SJ'
      },
      period: 'Jan 1-15, 2025',
      task: 'Tractor Operations',
      hours: 75,
      rate: 16,
      amount: 1200,
      dueDate: '2025-01-20'
    },
    {
      id: 3,
      worker: {
        name: 'Carlos Martinez',
        role: 'General Farm Worker',
        initials: 'CM'
      },
      period: 'Jan 1-15, 2025',
      task: 'Field Preparation',
      hours: 85,
      rate: 14,
      amount: 1190,
      dueDate: '2025-01-20'
    }
  ];

  const paidPayments = [
    {
      id: 4,
      worker: {
        name: 'Miguel Rodriguez',
        role: 'Field Supervisor',
        initials: 'MR'
      },
      period: 'Dec 16-31, 2024',
      task: 'Crop Planning',
      hours: 72,
      rate: 18,
      amount: 1296,
      paidDate: '2025-01-05'
    },
    {
      id: 5,
      worker: {
        name: 'Sarah Johnson',
        role: 'Equipment Operator',
        initials: 'SJ'
      },
      period: 'Dec 16-31, 2024',
      task: 'Equipment Maintenance',
      hours: 68,
      rate: 16,
      amount: 1088,
      paidDate: '2025-01-05'
    }
  ];

  const workers = [
    {
      id: 1,
      name: 'Miguel Rodriguez',
      role: 'Field Supervisor',
      initials: 'MR',
      hourlyRate: 18,
      totalHours: 152,
      totalEarnings: 2736,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Equipment Operator',
      initials: 'SJ',
      hourlyRate: 16,
      totalHours: 143,
      totalEarnings: 2288,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Carlos Martinez',
      role: 'General Farm Worker',
      initials: 'CM',
      hourlyRate: 14,
      totalHours: 170,
      totalEarnings: 2380,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      role: 'Administrative Assistant',
      initials: 'LC',
      hourlyRate: 15,
      totalHours: 120,
      totalEarnings: 1800,
      status: 'Active'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Worker Payments</h1>
          <p className="text-gray-600">Manage worker payments and track wages</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Worker
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Workers</CardTitle>
            <Users className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{paymentStats.totalWorkers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{formatCurrency(paymentStats.pendingPayments)}</div>
            <p className="text-xs text-gray-600 mt-1">3 payments due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Paid This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(paymentStats.paidThisMonth)}</div>
            <p className="text-xs text-gray-600 mt-1">2 payments made</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg. Hourly Rate</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₹{paymentStats.avgHourlyRate}</div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending Payments ({pendingPayments.length})</TabsTrigger>
          <TabsTrigger value="paid">Paid Payments ({paidPayments.length})</TabsTrigger>
          <TabsTrigger value="workers">Workers ({workers.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="space-y-4">
            {pendingPayments.map((payment) => (
              <Card key={payment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 bg-green-100">
                        <AvatarFallback className="text-green-700 font-semibold">
                          {payment.worker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{payment.worker.name}</h3>
                        <p className="text-sm text-gray-600">{payment.worker.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{formatCurrency(payment.amount)}</div>
                      <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Period</p>
                      <p className="font-medium">{payment.period}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Task</p>
                      <p className="font-medium">{payment.task}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Hours</p>
                      <p className="font-medium">{payment.hours} hrs</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rate</p>
                      <p className="font-medium">₹{payment.rate}/hr</p>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Mark as Paid
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="paid" className="space-y-4">
          <div className="space-y-4">
            {paidPayments.map((payment) => (
              <Card key={payment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 bg-gray-100">
                        <AvatarFallback className="text-gray-700 font-semibold">
                          {payment.worker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{payment.worker.name}</h3>
                        <p className="text-sm text-gray-600">{payment.worker.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{formatCurrency(payment.amount)}</div>
                      <p className="text-sm text-green-600">Paid: {payment.paidDate}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Period</p>
                      <p className="font-medium">{payment.period}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Task</p>
                      <p className="font-medium">{payment.task}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Hours</p>
                      <p className="font-medium">{payment.hours} hrs</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rate</p>
                      <p className="font-medium">₹{payment.rate}/hr</p>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm">
                      Download Receipt
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="workers" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workers.map((worker) => (
              <Card key={worker.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10 bg-green-100">
                        <AvatarFallback className="text-green-700 font-semibold">
                          {worker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{worker.name}</CardTitle>
                        <CardDescription>{worker.role}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">{worker.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Hourly Rate</p>
                      <p className="font-medium text-lg">₹{worker.hourlyRate}/hr</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Hours</p>
                      <p className="font-medium text-lg">{worker.totalHours}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-600">Total Earnings</p>
                      <p className="font-medium text-xl text-green-600">{formatCurrency(worker.totalEarnings)}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View History
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit Worker
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkerPayments;

