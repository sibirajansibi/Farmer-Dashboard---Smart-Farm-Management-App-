import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download
} from 'lucide-react';
import '../App.css';

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock data
  const transactionStats = {
    totalIncome: 45231.89,
    totalExpenses: 18450.32,
    netIncome: 26781.57,
    transactionCount: 24
  };

  const transactions = [
    {
      id: 1,
      type: 'income',
      category: 'Crop Sales',
      description: 'Wheat harvest sale - North Field',
      amount: 15600,
      date: '2025-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'expense',
      category: 'Equipment',
      description: 'Tractor maintenance and repairs',
      amount: 2400,
      date: '2025-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'income',
      category: 'Rental',
      description: 'Land rental payment - Johnson Farm',
      amount: 3200,
      date: '2025-01-12',
      status: 'completed'
    },
    {
      id: 4,
      type: 'expense',
      category: 'Labor',
      description: 'Worker wages - Week 2',
      amount: 1800,
      date: '2025-01-10',
      status: 'completed'
    },
    {
      id: 5,
      type: 'income',
      category: 'Crop Sales',
      description: 'Corn sale - South Field',
      amount: 8900,
      date: '2025-01-08',
      status: 'completed'
    },
    {
      id: 6,
      type: 'expense',
      category: 'Supplies',
      description: 'Fertilizer purchase',
      amount: 1200,
      date: '2025-01-05',
      status: 'completed'
    },
    {
      id: 7,
      type: 'expense',
      category: 'Fuel',
      description: 'Diesel fuel for equipment',
      amount: 850,
      date: '2025-01-03',
      status: 'completed'
    },
    {
      id: 8,
      type: 'income',
      category: 'Equipment Rental',
      description: 'Harvester rental income',
      amount: 2400,
      date: '2025-01-01',
      status: 'completed'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const getTransactionIcon = (type) => {
    return type === 'income' ? TrendingUp : TrendingDown;
  };

  const getTransactionColor = (type) => {
    return type === 'income' ? 'text-green-600' : 'text-red-600';
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || transaction.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600">Track your farm's financial transactions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(transactionStats.totalIncome)}</div>
            <p className="text-xs text-gray-600 mt-1">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{formatCurrency(transactionStats.totalExpenses)}</div>
            <p className="text-xs text-gray-600 mt-1">+5.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Net Income</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(transactionStats.netIncome)}</div>
            <p className="text-xs text-gray-600 mt-1">+32.4% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Transactions</CardTitle>
            <Filter className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{transactionStats.transactionCount}</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="income">Income Only</SelectItem>
                <SelectItem value="expense">Expenses Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => {
              const Icon = getTransactionIcon(transaction.type);
              return (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                      <Icon className={`h-4 w-4 ${getTransactionColor(transaction.type)}`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Badge variant="outline">{transaction.category}</Badge>
                        <span>•</span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-semibold ${getTransactionColor(transaction.type)}`}>
                      {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredTransactions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No transactions found matching your criteria.</p>
            </div>
          )}
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline">
              Load More Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;

