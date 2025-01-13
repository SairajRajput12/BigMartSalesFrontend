import React, { useContext, useState } from 'react';
import * as XLSX from 'xlsx';
import './UploadDataset.css';
import { DatasetContext } from '../Context/DatasetContext';

export default function UploadDataset() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { excelData, uploadStatus, setExcelData, setUploadStatus, setDataframe } = useContext(DatasetContext);

  // Required columns to check in the dataset
  const requiredColumns = [
    'Item_Identifier', 'Item_Weight', 'Item_Fat_Content', 'Item_Visibility', 
    'Item_Type', 'Item_MRP', 'Outlet_Identifier', 'Outlet_Establishment_Year', 
    'Outlet_Size', 'Outlet_Location_Type', 'Outlet_Type', 'Item_Outlet_Sales'
  ];

  const preprocessData = async (jsonData) => {
    // Check if the dataset contains all required columns
    const missingColumns = requiredColumns.filter(col => !jsonData[0].hasOwnProperty(col));

    if (missingColumns.length > 0) {
      setUploadStatus(`Error: Missing columns - ${missingColumns.join(', ')}`);
      return;
    }

    setDataframe(jsonData);
    try {
      const response = await fetch('http://127.0.0.1:5000/preprocess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dataframe: jsonData }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Data processed successfully:', result);
        setUploadStatus('File processed and uploaded successfully!');
        console.log(result.data);
        setExcelData(result.data);
        setUploadStatus('data uploaded succesfully !');
      } else {
        console.error('Error processing data:', result);
        setUploadStatus('Error processing file.');
      }
    } catch (error) {
      console.error('Error encountered:', error);
      setUploadStatus('Error encountered while uploading file.');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus('');

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });

        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        console.log(jsonData);
        preprocessData(jsonData);
      };

      reader.onerror = (e) => {
        console.error('Error reading file:', e.target.error);
        setUploadStatus('Error reading the file.');
      };

      reader.readAsBinaryString(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    setTimeout(() => {
      setUploadStatus(`File "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <div className="upload-dataset-container">
      <h2>Upload Dataset</h2>
      <p className="instruction-text">
        1. Please ensure your dataset contains the following columns:
        <ul>
          {requiredColumns.map((col, index) => (
            <li key={index}>{col}</li>
          ))}
        </ul>

        2. You will be unable to access another tab until you upload dataset and got validation message. 
        <br />
        3. This is secure you are free to use it. 
      </p>
      <div className="upload-area">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-button">
          Upload
        </button>
      </div>

      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
}
