import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Revenue vs Expenses Chart
export const RevenueExpenseChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
        <Legend />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#10b981"
          fill="#10b981"
          fillOpacity={0.6}
          name="Revenue"
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stackId="2"
          stroke="#ef4444"
          fill="#ef4444"
          fillOpacity={0.6}
          name="Expenses"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// Monthly Income Trend Chart
export const MonthlyIncomeChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Income']} />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Worker Wages Distribution Chart
export const WorkerWagesChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="worker" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Wages']} />
        <Bar dataKey="wages" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Crop Revenue Pie Chart
export const CropRevenueChart = ({ data }) => {
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
      </PieChart>
    </ResponsiveContainer>
  );
};

// Rental Income Chart
export const RentalIncomeChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="property" type="category" width={100} />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Income']} />
        <Bar dataKey="income" fill="#06b6d4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Expense Categories Chart
export const ExpenseCategoriesChart = ({ data }) => {
  const COLORS = ['#ef4444', '#f59e0b', '#8b5cf6', '#06b6d4', '#10b981'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
      </PieChart>
    </ResponsiveContainer>
  );
};

// Crop Growth Progress Chart
export const CropProgressChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="crop" />
        <YAxis domain={[0, 100]} />
        <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />
        <Bar dataKey="progress" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  );
};

