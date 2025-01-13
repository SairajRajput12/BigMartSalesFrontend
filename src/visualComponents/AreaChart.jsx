import { autoType } from 'd3';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import './Area.css'; 


const AreaChart = ({labels,sales,title}) => {
  // Define the data for the chart
  const series = [
    {
      name: title,
      data: sales,
    },
  ];

  // Define the options for the chart
  const options = {
    chart: {
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Area Chart',
      align: 'left',
    },
    xaxis: {
      categories: labels,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['rgb(41, 54, 197)'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: false // Disable grid lines
    },
  };

  return (
    <div className='area-chart'>
      <ApexCharts options={options} series={series} type="area" width="100%" height="100%"  />
    </div>
  );
};

export default AreaChart;
