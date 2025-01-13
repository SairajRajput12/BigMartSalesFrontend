import React from 'react'
import ApexCharts from 'react-apexcharts';
import './DonutChart.css'; 

export default function DonutChart({labels,data}) {      
      const options = {
        chart: {
          type: 'donut',
        },
        labels: labels,
        legend: {
          position: 'bottom', 
        },
      };
    
      const series = data; 
    
    
  return (
    <div className='donut-chart'>
        <ApexCharts options={options} series={series} type='donut'  />
    </div>
  )
}
