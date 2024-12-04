import React, { createContext, useState } from 'react';

// Create a context for reports
export const ReportsContext = createContext();

export const ReportsProvider = ({ children }) => {
    const [reports, setReports] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);

  const addReport = (report) => {
    setReports((prevReports) => [...prevReports, report]);
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport, uploadedImage, setUploadedImage }}>
      {children}
    </ReportsContext.Provider>
  );
};