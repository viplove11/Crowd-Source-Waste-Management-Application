import React, { useContext } from 'react';
import './RecentReports.css';
import { ReportsContext } from '../../Store/ReportsContext';
import { GoDotFill } from "react-icons/go";

const RecentReports = () => {
  const { reports } = useContext(ReportsContext);

  return (
    <div className="recent-report">
      <p className='recent-title'>Recent Reports</p>
      {/* No recent message div */}
      {reports.length === 0 ? (
        <div className="no-recent-entry">
          <p>No Recent Reports</p>
        </div>
      ) : (
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
                  <span className='approvalStatus'><GoDotFill />
                                            Pending</span>
                </div>
              </div>
              <div className="image">
                {report.image && report.image.base64 ? (
                  <img
                    src={report.image.base64} // Use base64 directly
                    alt="Report"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentReports;
