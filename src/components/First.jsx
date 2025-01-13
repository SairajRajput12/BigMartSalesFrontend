import React from 'react';
import Card from '../visualComponents/card';
import './First.css'; 
import TimeRangeSlider from '../visualComponents/Slider';
import Dropdown from '../visualComponents/DropDown';
import Heading from './Heading';

export default function First({ excelData }) {
  const calculateSum = (sum) => {
    // if (!arr || arr.length === 0) return '0';
    
    // const sum = arr.reduce((total, current) => total + current, 0);
    if (sum >= 1_000_000) {
      return `${(sum / 1_000_000).toFixed(1)}M`; 
    } else if (sum >= 1_000) {
      return `${(sum / 1_000).toFixed(1)}k`;
    }
    return sum.toString(); 
  };

  return (
    <div className='first'>
      <Heading />
      <Card
        className='card'
        title='Sales'
        // value={calculateSum(excelData?.Item_Outlet_Sales || [])} 
        value={calculateSum(excelData?.sum_sales || [])} 
      />
      <Card
        className='card'
        title='Total MRP'
        // value={calculateSum(excelData?.Item_MRP || [])}
        value={calculateSum(excelData?.sum_mrp || [])}
      />
      <TimeRangeSlider max_year={excelData.max_year} min_year={excelData.min_year} />
      <Dropdown stores={excelData.Unique_Outlet_Type} />
    </div>
  );
}
