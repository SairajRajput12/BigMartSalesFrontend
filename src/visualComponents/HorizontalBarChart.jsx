import React from "react";
import './Bar.css'; 
import { Bar } from "react-chartjs-2";

const HorizontalBarChart = ({labels,data_to_show,title}) => {

  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        backgroundColor: "rgb(41, 54, 197)",
        margin:0, 
        data: data_to_show,
        barPercentage: 0.9, 
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    layout: {
    padding: {
        top: 20,    
        right: 20,  
        bottom: 20, 
        left: 20,   
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgba(246, 246, 246, 0.8)", 
          font: {
            size: 17, 
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "rgba(246, 246, 246, 0.8)", 
        bodyColor: "rgba(246, 246, 246, 0.8)",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: "rgba(246, 246, 246, 0.8)",
          font: {
            size: 12, 
          },
        },
      },
      y: {
        display:false,
        grid: {
          display:false,
        },
        ticks: {
          color: "rgba(246, 246, 246, 0.8)", 
          font: {
            size: 12,
          },
          stepSize: 10, 
        },
      },
    },
    animation: {
      duration: 1500, 
      easing: "easeOutBounce",
    },
  };





  return (
    <div className="bar-chart" >
      <Bar options={options}  data={data} />
    </div>
  );
};

export default HorizontalBarChart;
