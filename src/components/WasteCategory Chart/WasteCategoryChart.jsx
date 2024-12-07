// src/components/WasteCategoryDoughnutChart.jsx
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ReportsContext } from '../../Store/ReportsContext';
import './WasteCategoryChart.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; // Colors for the chart segments

const WasteCategoryChart = () => {
  const { reports } = useContext(ReportsContext);

  // Prepare data for the chart
  const categoryCounts = {
    Regular: 0,
    Urgent: 0,
    Occasional: 0,
  };

  // Count the occurrences of each waste category
  reports.forEach(report => {
    if (categoryCounts.hasOwnProperty(report.wasteCategory)) {
      categoryCounts[report.wasteCategory]++;
    }
  });

  // Convert the counts object to an array for Recharts
  const data = Object.keys(categoryCounts).map((key) => ({
    name: key,
    value: categoryCounts[key],
  }));

  return (
    <div className='pie-chart-container'>
      <PieChart width={300} height={250} className='pie-chart'> {/* Increased width and height */}
        <Pie
          data={data}
          cx="50%" // Center X position relative to the PieChart
          cy="40%" // Center Y position relative to the PieChart
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend className='legendName'/>
      </PieChart>
    </div>
  );
};

export default WasteCategoryChart;