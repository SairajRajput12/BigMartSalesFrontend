import React, { useContext } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import { DatasetContext } from '../Context/DatasetContext';
import {useNavigate} from 'react-router-dom'; 

export default function ShowDashboard() {
  const {excelData,uploadStatus} = useContext(DatasetContext); 
  console.log(excelData); 

  const navigate = useNavigate(); 
  
  if(uploadStatus === false){
    navigate('/'); 
  }

  return (
    <>
        <First excelData={excelData} />
        <Second />
        <Third />
    </>
  )
}
