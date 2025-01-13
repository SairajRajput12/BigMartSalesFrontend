import React,{useState,createContext} from 'react';  

export const DatasetContext = createContext(); 

export const DatasetProvider = ({ children }) => {
    const [excelData, setExcelData] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(false);
    const [dataframe,setDataframe] = useState(); 
  
    return (
      <DatasetContext.Provider value={{ excelData, setExcelData, uploadStatus, setUploadStatus, dataframe,setDataframe}}>
        {children}
      </DatasetContext.Provider>
    );
};