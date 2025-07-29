import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus,
  Building,
  Wrench,
  DollarSign,
  Calendar,
  AlertCircle
} from 'lucide-react';
import '../App.css';

const Rentals = () => {
  const [activeTab, setActiveTab] = useState('active');

  // Mock data
  const rentalStats = {
    totalRentals: 8,
    monthlyIncome: 4200,
    pendingPayments: 1800,
    activeRentals: 5
  };

  const activeRentals = [
    {
      id: 1,
      type: 'land',
      itemName: 'North Field - 50 acres',
      renterName: 'Johnson Farming Co.',
      renterContact: 'john@johnsonfarm.com',
      amount: 1500,
      period: 'Monthly',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      paymentDue: '2025-02-01',
      status: 'active',
      paymentStatus: 'pending'
    },
    {
      id: 2,
      type: 'equipment',
      itemName: 'John Deere Harvester',
      renterName: 'Smith Agriculture',
      renterContact: 'mike@smithag.com',
      amount: 800,
      period: 'Weekly',
      startDate: '2025-01-15',
      endDate: '2025-02-15',
      paymentDue: '2025-01-22',
      status: 'active',
      paymentStatus: 'paid'
    },
    {
      id: 3,
      type: 'land',
      itemName: 'South Field - 75 acres',
      renterName: 'Green Valley Farms',
      renterContact: 'sarah@greenvalley.com',
      amount: 2200,
      period: 'Monthly',
      startDate: '2024-06-01',
      endDate: '2025-05-31',
      paymentDue: '2025-02-01',
      status: 'active',
      paymentStatus: 'overdue'
    },
    {
      id: 4,
      type: 'equipment',
      itemName: 'Irrigation System',
      renterName: 'Davis Crop Solutions',
      renterContact: 'tom@daviscrop.com',
      amount: 600,
      period: 'Monthly',
      startDate: '2024-03-01',
      endDate: '2025-02-28',
      paymentDue: '2025-02-01',
      status: 'active',
      paymentStatus: 'pending'
    },
    {
      id: 5,
      type: 'equipment',
      itemName: 'Tractor - Case IH',
      renterName: 'Wilson Brothers Farm',
      renterContact: 'bob@wilsonbros.com',
      amount: 1200,
      period: 'Monthly',
      startDate: '2024-08-01',
      endDate: '2025-07-31',
      paymentDue: '2025-02-01',
      status: 'active',
      paymentStatus: 'paid'
    }
  ];

  const expiredRentals = [
    {
      id: 6,
      type: 'equipment',
      itemName: 'Seed Drill',
      renterName: 'Anderson Farms',
      renterContact: 'jim@andersonfarms.com',
      amount: 400,
      period: 'Seasonal',
      startDate: '2024-04-01',
      endDate: '2024-10-31',
      status: 'expired'
    },
    {
      id: 7,
      type: 'land',
      itemName: 'East Field - 30 acres',
      renterName: 'Miller Agriculture',
      renterContact: 'lisa@millerag.com',
      amount: 900,
      period: 'Seasonal',
      startDate: '2024-03-01',
      endDate: '2024-11-30',
      status: 'expired'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'land' ? Building : Wrench;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rental Management</h1>
          <p className="text-gray-600">Manage land and equipment rentals</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Rental
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Rentals</CardTitle>
            <Building className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{rentalStats.totalRentals}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Monthly Income</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(rentalStats.monthlyIncome)}</div>
            <p className="text-xs text-gray-600 mt-1">From active rentals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Payments</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{formatCurrency(rentalStats.pendingPayments)}</div>
            <p className="text-xs text-gray-600 mt-1">Awaiting payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Rentals</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{rentalStats.activeRentals}</div>
          </CardContent>
        </Card>
      </div>

      {/* Rental Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Active Rentals ({activeRentals.length})</TabsTrigger>
          <TabsTrigger value="expired">Expired Rentals ({expiredRentals.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="space-y-4">
            {activeRentals.map((rental) => {
              const Icon = getTypeIcon(rental.type);
              return (
                <Card key={rental.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${rental.type === 'land' ? 'bg-green-100' : 'bg-blue-100'}`}>
                          <Icon className={`h-6 w-6 ${rental.type === 'land' ? 'text-green-600' : 'text-blue-600'}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{rental.itemName}</h3>
                          <p className="text-sm text-gray-600">{rental.renterName}</p>
                          <p className="text-sm text-gray-500">{rental.renterContact}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{formatCurrency(rental.amount)}</div>
                        <p className="text-sm text-gray-600">{rental.period}</p>
                        <div className="flex space-x-2 mt-2">
                          <Badge className={getStatusColor(rental.status)}>
                            {rental.status}
                          </Badge>
                          <Badge className={getPaymentStatusColor(rental.paymentStatus)}>
                            {rental.paymentStatus}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Start Date</p>
                        <p className="font-medium">{rental.startDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-medium">{rental.endDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Payment Due</p>
                        <p className="font-medium">{rental.paymentDue}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      {rental.paymentStatus === 'pending' && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Mark as Paid
                        </Button>
                      )}
                      {rental.paymentStatus === 'overdue' && (
                        <Button size="sm" variant="destructive">
                          Send Reminder
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Edit Rental
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          <div className="space-y-4">
            {expiredRentals.map((rental) => {
              const Icon = getTypeIcon(rental.type);
              return (
                <Card key={rental.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-gray-100">
                          <Icon className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{rental.itemName}</h3>
                          <p className="text-sm text-gray-600">{rental.renterName}</p>
                          <p className="text-sm text-gray-500">{rental.renterContact}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-600">{formatCurrency(rental.amount)}</div>
                        <p className="text-sm text-gray-600">{rental.period}</p>
                        <Badge className={`${getStatusColor(rental.status)} mt-2`}>
                          {rental.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Start Date</p>
                        <p className="font-medium">{rental.startDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-medium">{rental.endDate}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        Renew Contract
                      </Button>
                      <Button variant="outline" size="sm">
                        View History
                      </Button>
                      <Button variant="outline" size="sm">
                        Archive
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Rentals;

