import React, { createContext, useState, useEffect } from 'react';

// Maximum image size (2MB) and report count limit (100)
const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
const MAX_REPORTS = 100; // Max number of reports in localStorage

export const ReportsContext = createContext();

export const ReportsProvider = ({ children }) => {
  const [reports, setReports] = useState(() => {
    // Initialize state from localStorage, or use an empty array
    const savedReports = localStorage.getItem('reports');
    return savedReports ? JSON.parse(savedReports) : [];
  });

  const [uploadedImage, setUploadedImage] = useState(null);

  // Function to convert image file to base64 string
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > MAX_IMAGE_SIZE) {
        reject('File size exceeds the limit of 2MB');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); // base64 string
      reader.onerror = (error) => reject(error);
    });
  };

  // Function to add a new report
  const addReport = async (report) => {
    let reportWithImage = { ...report };

    // If there's an image, convert it to base64 before storing
    if (report.image && report.image.file) {
      try {
        const base64Image = await fileToBase64(report.image.file);
        reportWithImage = {
          ...report,
          image: { ...report.image, base64: base64Image }, // Store base64 image string
        };
      } catch (error) {
        console.error('Error converting image to base64:', error);
      }
    }

    // Add the new report to the array of reports
    const updatedReports = [...reports, reportWithImage];

    // If the number of reports exceeds the limit, remove the oldest one
    if (updatedReports.length > MAX_REPORTS) {
      updatedReports.shift(); // Remove the oldest report
    }

    setReports(updatedReports);

    // Save to localStorage
    localStorage.setItem('reports', JSON.stringify(updatedReports));
  };

  // Function to approve a report (mark it as completed)
  const approveReport = (index) => {
    const updatedReports = [...reports];
    updatedReports[index] = {
      ...updatedReports[index],
      status: 'Completed', // Change status to "Completed"
    };
    setReports(updatedReports);
    localStorage.setItem('reports', JSON.stringify(updatedReports));
  };

  // Function to reject a report (remove it from the list)
  const rejectReport = (index) => {
    const updatedReports = reports.filter((_, i) => i !== index); // Remove the report at index
    setReports(updatedReports);
    localStorage.setItem('reports', JSON.stringify(updatedReports));
  };

  // Save reports to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('reports', JSON.stringify(reports));
  }, [reports]);

  return (
    <ReportsContext.Provider value={{ reports, addReport, uploadedImage, setUploadedImage, approveReport, rejectReport }}>
      {children}
    </ReportsContext.Provider>
  );
};
