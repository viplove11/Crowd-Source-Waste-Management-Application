import React, { useContext } from 'react';
import './RecentReports.css';
import { ReportsContext } from '../../Store/ReportsContext';

const RecentReports = () => {
  const { reports } = useContext(ReportsContext);

  return (
    <div className="recent-report">
      <p className='recent-title'>Recent Reports</p>
      {/* no recent message div */}
      {reports.length === 0 ?
        <div className="no-recent-entry">
<p>No Recent Reports</p>
        </div>
        :
        <div className="report-list">
          {/* Render each report */}
          {reports.map((report, index) => (
            <div className="report" key={index}>
              <div className="text-content">
                <p className='text-title'>{report.description}</p>
                <p className='location'>Location</p>
                <div className='category-time'>
                  <span className='urgent'>{report.wasteCategory}</span>
                  <span className='time'>time</span>
                </div>
              </div>
              <div className="image">
                <img
                  src={URL.createObjectURL(report.image.file)} // Accessing image file correctly
                  alt="Report"
                />
              </div>
            </div>
          ))}
        </div>}
    </div>
  );
};

export default RecentReports;
