import { color } from 'chart.js/helpers';
import React from 'react';
import ApexCharts from 'react-apexcharts';

const style = {
  backgroundColor: 'rgba(245, 245, 245, 0.306)',
  marginLeft: '24px',
  paddingLeft: '20px',
  paddingRight: '10px',
  paddingTop: '10px',
  border: '1px solid white',
  borderRadius: '12px',
  width: '45%',
  height: '275px',
};

export default function HorizontalChart({title,labels,data}) {
  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%', 
      },
    },
    grid: {
      show: false, 
    },
    dataLabels: {
      enabled: true, 
      style: {
        color: 'white',
      },
    },
    xaxis: {
      categories: labels, 
      axisTicks: {
        show: false, 
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      style:{
          color:'white'
      }
    },
    yaxis: {
      labels: {
        style: {
          color: 'white', 
        },
      },
    },
  };

  const series = [
    {
      name: title,
      data: data, 
    },
  ];

  return (
    <div style={style} className="horizontal-chart-container">
      <ApexCharts
        options={options}
        series={series}
        type="bar"
        height="100%"
      />
    </div>
  );
}
