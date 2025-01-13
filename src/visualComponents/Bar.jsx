import React from "react";
import './Bar.css';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  const options = {
    series: [{
      name: 'Sales',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
      type: 'bar',
      height: '100%',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea', 'Canada', 'United Kingdom',
        'Netherlands', 'Italy', 'France',
        'Japan', 'United States', 'China', 'Germany'
      ],
      // labels: {
      //   style: {
      //     colors: 'white', // Set x-axis label color to white
      //     fontSize: '12px'
      //   }
      // },
      labels:{
        show:false
      },
      axisTicks: { show: false }, // Hide x-axis ticks
      axisBorder: { show: false }, // Hide x-axis border
    },
    yaxis: {
      labels: {
        show: true ,// Hide y-axis labels 
        style:{
           colors:'white', 
           fontSize:'12px'
        }
      }
    },
    grid: {
      show: false // Disable grid lines
    },
  };

  return (
    <div className="bar-chart">
      <ApexCharts type="bar" options={options} series={options.series} width="100%" height="100%" />
    </div>
  );
};

export default BarChart;

