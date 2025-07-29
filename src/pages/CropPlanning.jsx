import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus,
  Wheat,
  DollarSign,
  Users,
  Calendar
} from 'lucide-react';
import '../App.css';

const CropPlanning = () => {
  const [activeTab, setActiveTab] = useState('current');

  // Mock data based on the UI mockup
  const cropStats = {
    activeCrops: 2,
    estimatedRevenue: 188800,
    workerCosts: 25200,
    estimatedProfit: 125800
  };

  const currentCrops = [
    {
      id: 1,
      name: 'Winter Wheat',
      variety: 'Hard Red Winter',
      field: 'North Field (120 acres)',
      planted: '2024-10-15',
      harvest: '2025-07-15',
      yield: '4,800 bushels',
      revenue: 28800,
      workerCosts: 7200,
      totalCosts: 18000,
      status: 'Growing',
      progress: 65
    },
    {
      id: 2,
      name: 'Corn',
      variety: 'Field Corn',
      field: 'South Field (200 acres)',
      planted: '2024-05-01',
      harvest: '2025-10-01',
      yield: '32,000 bushels',
      revenue: 160000,
      workerCosts: 18000,
      totalCosts: 45000,
      status: 'Growing',
      progress: 40
    }
  ];

  const plannedCrops = [
    {
      id: 3,
      name: 'Soybeans',
      variety: 'Non-GMO',
      field: 'East Field (150 acres)',
      plannedPlanting: '2025-05-15',
      expectedHarvest: '2025-09-30',
      expectedYield: '6,000 bushels',
      expectedRevenue: 45000,
      status: 'Planned'
    }
  ];

  const completedCrops = [
    {
      id: 4,
      name: 'Spring Wheat',
      variety: 'Hard Red Spring',
      field: 'West Field (100 acres)',
      planted: '2024-04-01',
      harvested: '2024-08-15',
      actualYield: '3,800 bushels',
      actualRevenue: 22800,
      status: 'Completed'
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
      case 'Growing': return 'bg-green-100 text-green-800';
      case 'Planned': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Crop Planning</h1>
          <p className="text-gray-600">Manage your crop planning and track progress</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Plan New Crop
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Crops</CardTitle>
            <Wheat className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{cropStats.activeCrops}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Est. Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(cropStats.estimatedRevenue)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Worker Costs</CardTitle>
            <Users className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{formatCurrency(cropStats.workerCosts)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Est. Profit</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(cropStats.estimatedProfit)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Crop Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">Current Crops ({currentCrops.length})</TabsTrigger>
          <TabsTrigger value="planned">Planned Crops ({plannedCrops.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed Crops ({completedCrops.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentCrops.map((crop) => (
              <Card key={crop.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <CardDescription>{crop.variety}</CardDescription>
                      <CardDescription>{crop.field}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(crop.status)}>
                      {crop.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Growth Progress</span>
                      <span>{crop.progress}%</span>
                    </div>
                    <Progress value={crop.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Planted:</p>
                      <p className="font-medium">{crop.planted}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Harvest:</p>
                      <p className="font-medium">{crop.harvest}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Yield:</p>
                      <p className="font-medium">{crop.yield}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenue:</p>
                      <p className="font-medium text-green-600">{formatCurrency(crop.revenue)}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Worker Costs:</span>
                      <span className="text-red-600">{formatCurrency(crop.workerCosts)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-600">Total Costs:</span>
                      <span className="text-red-600">{formatCurrency(crop.totalCosts)}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Update Progress
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="planned" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {plannedCrops.map((crop) => (
              <Card key={crop.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <CardDescription>{crop.variety}</CardDescription>
                      <CardDescription>{crop.field}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(crop.status)}>
                      {crop.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Planned Planting:</p>
                      <p className="font-medium">{crop.plannedPlanting}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Expected Harvest:</p>
                      <p className="font-medium">{crop.expectedHarvest}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Expected Yield:</p>
                      <p className="font-medium">{crop.expectedYield}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Expected Revenue:</p>
                      <p className="font-medium text-green-600">{formatCurrency(crop.expectedRevenue)}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit Plan
                    </Button>
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      Start Planting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {completedCrops.map((crop) => (
              <Card key={crop.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <CardDescription>{crop.variety}</CardDescription>
                      <CardDescription>{crop.field}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(crop.status)}>
                      {crop.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Planted:</p>
                      <p className="font-medium">{crop.planted}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Harvested:</p>
                      <p className="font-medium">{crop.harvested}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Actual Yield:</p>
                      <p className="font-medium">{crop.actualYield}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Actual Revenue:</p>
                      <p className="font-medium text-green-600">{formatCurrency(crop.actualRevenue)}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Report
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Plan Similar
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

export default CropPlanning;

