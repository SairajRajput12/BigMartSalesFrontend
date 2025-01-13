import React, { useContext, useState } from 'react';
import { DatasetContext } from '../Context/DatasetContext';

export default function Dropdown({ stores }) {
  const [selectedValue, setSelectedValue] = useState('');
  const { dataframe,excelData, setExcelData,uploadStatus, setUploadStatus } = useContext(DatasetContext);

  const fetchChangedData = async (val) => {
    if (!selectedValue) return;
    let rot = 'specific_data'; 
    if(val === 'all'){
      rot = 'preprocess';
    }

    console.log(rot); 

    

    try {
      const response = await fetch(`http://127.0.0.1:5000/${rot}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ store_type: selectedValue, dataframe }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Data processed successfully:', result);
        setUploadStatus('File processed and uploaded successfully!');
        setExcelData(result.data);
        console.log(result.data); 
      } else {
        console.error('Error processing data:', result);
        setUploadStatus('Error processing file.');
      }
    } catch (error) {
      console.error('Error:', error);
      setUploadStatus('An error occurred while fetching data.');
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value); 
    setSelectedValue(event.target.value);
    fetchChangedData(event.target.value);
  };

  return (
    <div
      style={{
        marginLeft: '20px',
        border: '1px solid white',
        borderRadius: '12px',
        width: '240px',
        padding: '12px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'rgba(245, 245, 245, 0.306)',
        textAlign: 'center',
      }}
    >
      <label
        htmlFor="dropdown"
        style={{ color: 'white', fontWeight: 'bold', marginBottom: '8px' }}
      >
        Choose an option:
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        style={{
          marginTop: '12px',
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <option value='all'>
          All
        </option>
        {stores &&
          stores.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
      {uploadStatus && <p style={{ color: 'red', marginTop: '10px' }}>{uploadStatus}</p>}
    </div>
  );
}
