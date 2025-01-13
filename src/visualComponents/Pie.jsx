import React from "react"; // Import the necessary library such as React for now.
import Chart from "chart.js/auto"; // Import the Chart.js library.
import { Pie } from "react-chartjs-2"; // In the react-chartjs-2 library, import the Pie component.
import './Pie.css';

const options = {
  plugins: {
    legend: {
      labels: {
        color: "white", 
        font: {
          size: 14,
          family: "Arial",
        },
      },
    },
  },
  layout: {
    padding: {
      bottom: 20, 
      left: 30,
    }
  },
};

const PieChart = ({ title, outletTypes, outletSales }) => {
  // Create a new data object to avoid modifying the original one
  const getRandomColors = (arr,n) => {
    let shuffled = arr.slice(); 
    for(let i = arr.length-1; i >= 0; i --)
    {
      const j = Math.floor(Math.random()*(i+1)); 
      [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]]; 
    }

    return shuffled.slice(0,n); 
  }


  let backgroundColor = [
    "#003f5c", // Dark blue
    "#2f4b7c", // Blue-gray
    "#665191", // Purple-blue
    "#a05195", // Pinkish blue
    "#d45087", // Light red-blue
    "#f95d6a", // Coral blue
    "#ff7c43", // Orange-blue
    "#ffa600", // Yellow-blue
    "#1f77b4", // Blue
    "#2775b6", // Bright blue
    "#33a6cc", // Teal blue
    "#2a9df4", // Sky blue
    "#6c9eeb", // Light blue
    "#a6d3f7", // Pale blue
    "#c9f2fa", // Very light blue
    "#b5e5f7", // Ice blue
    "#d3e8fd", // Powder blue
    "#8bbde2", // Soft blue
    "#92b8e0", // Slate blue
    "#5f9ea0", // Cadet blue
  ];
  
  const chartData = {
    labels: outletTypes, 
    datasets: [
      {
        // label: outletTypes,
        backgroundColor: outletTypes ? getRandomColors(backgroundColor, outletTypes.length) : [
          "#00A6B4",
          "#2E4057",
          "#FFD662",
          "#DD1C1A",
        ],
        borderColor: "white",
        borderWidth: 1,
        hoverBackgroundColor: [
          "#003e4f",
          "#4c5b5c",
          "#946c2f",
          "#6b0f12",
          // "#b25800",
          // "#041f2b",
        ],
        hoverBorderColor: "#000",
        data: outletSales, 
      },
    ],
  };

  return (
    <div className="pie-chart">
      <h3>{title}</h3>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
