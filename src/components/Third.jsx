import React, { useContext } from 'react'
import DonutChart from '../visualComponents/DonutChart'
import './Third.css'; 
import HorizontalChart from '../visualComponents/HorizontalBar';
import PieChart from '../visualComponents/Pie';
import { DatasetContext } from '../Context/DatasetContext';


export default function Third() {
  const {excelData} = useContext(DatasetContext); 
  let locations = Object.keys(excelData.location_data); 
  let location_sales = Object.values(excelData.location_data); 
  console.log(locations); 
  console.log(location_sales);

  let item_sales_data = [...excelData.items_sales_per_items]; 
  const total_sales = item_sales_data.sort((a,b) => b.sales-a.sales).slice(0,5); 
  let top_items = []; 
  let top_sales = []; 
  
  if(total_sales){
    for(let i = 0; i < total_sales.length; i ++){
      top_items.push(total_sales[i].item); 
      top_sales.push(total_sales[i].sales); 
    }
  }

  let items = Object.keys(excelData.item_total_visibility); 
  let item_visibility = Object.values(excelData.item_total_visibility); 

  return (
    <div className='third'>
      <DonutChart title='total sales on each location' labels={locations} data={location_sales} />
      <HorizontalChart labels={top_items} data={top_sales} title='Top Items per sales' />
      <PieChart outletTypes={items} outletSales={item_visibility} title='Item Visibility on each item' />
    </div>
  )
}
