import React, { useContext } from 'react';
import './Second.css'; 
import PieChart from '../visualComponents/Pie';
import AreaC from '../visualComponents/AreaChart';
import { DatasetContext } from '../Context/DatasetContext';
import HorizontalBarChart from '../visualComponents/HorizontalBarChart';

export default function Second() {
  const { excelData } = useContext(DatasetContext); 

  const outletTypes = excelData?.outlet_type_per_sales ? Object.keys(excelData.outlet_type_per_sales) : []; 
  const outletSales = excelData?.outlet_type_per_sales ? Object.values(excelData.outlet_type_per_sales) : []; 
  const years = excelData?.year_total_sales ? Object.keys(excelData.year_total_sales) : []; 
  const year_total_sales = excelData?.year_total_sales ? Object.values(excelData.year_total_sales): []; 
  
  console.log(outletTypes); 
  console.log(outletSales); 

  let item_costs_data = [...excelData.items_cost_per_item]; 
  const topCostItems = item_costs_data.sort((a, b) => b.cost - a.cost).slice(0, 5);
  console.log(topCostItems);

  let topItems = [] 
  let topCost = []
  if(topCostItems){
    for(let i = 0; i < topCostItems.length; i ++){
      topItems.push(topCostItems[i].name); 
      topCost.push(topCostItems[i].cost); 
    }
  }

  console.log(topItems); 
  console.log(topCost);
  

  return (
    <div className='second'>
        <HorizontalBarChart title='Item Cost Per Type' labels={topItems} data_to_show={topCost} />
        <PieChart outletTypes={outletTypes} outletSales={outletSales} title='Sales By Each Stores' />
        <AreaC title='Sales of Item during each year' labels={years} sales={year_total_sales} />
    </div>
  );
}
