import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  RevenueExpenseChart,
  MonthlyIncomeChart,
  WorkerWagesChart,
  CropRevenueChart,
  RentalIncomeChart,
  ExpenseCategoriesChart,
  CropProgressChart
} from '../components/Charts';
import '../App.css';

const Analytics = () => {
  // Mock data for charts
  const revenueExpenseData = [
    { month: 'Jan', revenue: 45000, expenses: 18000 },
    { month: 'Feb', revenue: 52000, expenses: 22000 },
    { month: 'Mar', revenue: 48000, expenses: 19000 },
    { month: 'Apr', revenue: 61000, expenses: 25000 },
    { month: 'May', revenue: 55000, expenses: 21000 },
    { month: 'Jun', revenue: 67000, expenses: 28000 }
  ];

  const monthlyIncomeData = [
    { month: 'Jan', income: 27000 },
    { month: 'Feb', income: 30000 },
    { month: 'Mar', income: 29000 },
    { month: 'Apr', income: 36000 },
    { month: 'May', income: 34000 },
    { month: 'Jun', income: 39000 }
  ];

  const workerWagesData = [
    { worker: 'Miguel R.', wages: 2736 },
    { worker: 'Sarah J.', wages: 2288 },
    { worker: 'Carlos M.', wages: 2380 },
    { worker: 'Lisa C.', wages: 1800 }
  ];

  const cropRevenueData = [
    { name: 'Wheat', value: 28800 },
    { name: 'Corn', value: 160000 },
    { name: 'Soybeans', value: 45000 },
    { name: 'Barley', value: 22000 }
  ];

  const rentalIncomeData = [
    { property: 'North Field', income: 1500 },
    { property: 'South Field', income: 2200 },
    { property: 'Harvester', income: 800 },
    { property: 'Tractor', income: 1200 },
    { property: 'Irrigation', income: 600 }
  ];

  const expenseCategoriesData = [
    { name: 'Labor', value: 8500 },
    { name: 'Equipment', value: 4200 },
    { name: 'Supplies', value: 3100 },
    { name: 'Fuel', value: 1800 },
    { name: 'Maintenance', value: 850 }
  ];

  const cropProgressData = [
    { crop: 'Winter Wheat', progress: 65 },
    { crop: 'Corn', progress: 40 },
    { crop: 'Soybeans', progress: 25 },
    { crop: 'Spring Wheat', progress: 100 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600">Comprehensive financial and operational insights</p>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="financial" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="financial">Financial Analytics</TabsTrigger>
          <TabsTrigger value="operations">Operations Analytics</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue vs Expenses */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
                <CardDescription>Monthly comparison of income and costs</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueExpenseChart data={revenueExpenseData} />
              </CardContent>
            </Card>

            {/* Monthly Income Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Income Trend</CardTitle>
                <CardDescription>Net income progression over time</CardDescription>
              </CardHeader>
              <CardContent>
                <MonthlyIncomeChart data={monthlyIncomeData} />
              </CardContent>
            </Card>

            {/* Crop Revenue Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Crop Revenue Distribution</CardTitle>
                <CardDescription>Revenue breakdown by crop type</CardDescription>
              </CardHeader>
              <CardContent>
                <CropRevenueChart data={cropRevenueData} />
              </CardContent>
            </Card>

            {/* Expense Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
                <CardDescription>Cost breakdown by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseCategoriesChart data={expenseCategoriesData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Worker Wages */}
            <Card>
              <CardHeader>
                <CardTitle>Worker Wages Distribution</CardTitle>
                <CardDescription>Total wages paid to each worker</CardDescription>
              </CardHeader>
              <CardContent>
                <WorkerWagesChart data={workerWagesData} />
              </CardContent>
            </Card>

            {/* Rental Income */}
            <Card>
              <CardHeader>
                <CardTitle>Rental Income by Property</CardTitle>
                <CardDescription>Income generated from land and equipment rentals</CardDescription>
              </CardHeader>
              <CardContent>
                <RentalIncomeChart data={rentalIncomeData} />
              </CardContent>
            </Card>

            {/* Crop Progress */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Crop Growth Progress</CardTitle>
                <CardDescription>Current growth status of all active crops</CardDescription>
              </CardHeader>
              <CardContent>
                <CropProgressChart data={cropProgressData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Key Performance Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">58.2%</div>
                <p className="text-xs text-gray-600 mt-1">+5.4% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">24.7%</div>
                <p className="text-xs text-gray-600 mt-1">+2.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">87%</div>
                <p className="text-xs text-gray-600 mt-1">+3% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Cost per Acre</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">$156</div>
                <p className="text-xs text-gray-600 mt-1">-$8 from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
              <CardDescription>Key insights and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800">Strong Revenue Growth</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Revenue has increased by 32% compared to the same period last year, primarily driven by corn and wheat sales.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800">Efficient Cost Management</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Operating expenses have been well-controlled, maintaining a healthy profit margin of 58.2%.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800">Optimization Opportunity</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Consider diversifying crop portfolio to reduce dependency on corn revenue and improve risk management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;

