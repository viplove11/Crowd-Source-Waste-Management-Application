import React, { useContext } from "react";
import "./AdminData.css";
import { ReportsContext } from "../../Store/ReportsContext";
import { GoDotFill } from "react-icons/go";
import WasteCategoryChart from "../WasteCategory Chart/WasteCategoryChart";

const AdminData = () => {
  const { reports, approveReport, rejectReport } = useContext(ReportsContext);

  const countReports = () => {
    let pendingCount = 0;
    let approvedCount = 0;

    reports.forEach(report => {
      if (report.status === 'Pending') {
        pendingCount++;
      } else if (report.status === 'Completed') {
        approvedCount++;
      }
    });

    return {
      totalCount: reports.length,
      pendingCount,
      approvedCount,
    };
  };

  const { totalCount, pendingCount, approvedCount } = countReports();


  return (
    <div className="admin-data">
      <div className="mynavbar">
        <p>
          Admin <span>Dashboard</span>
        </p>
      </div>

      {/* recent entry start */}
      <div className="admin-content">
        <div className="admin-recent-entry">
          <h2>Recent Entry</h2>
          {/* {console.log(reports)} */}
          {reports.length === 0 ? (
            <div className="admin-no-recent-entry">
              <p className="admin-no-recent-reports">No Recent Reports</p>
            </div>
          ) : (
            <div className="recent-reports">
              {reports.map((report, index) => (
                <div className="report" key={index}>
                  <div className="text-content">
                    <p className="text-title">{report.description}</p>
                    <p className="location"><a href={report.locationURL} target="blank">Get Location</a></p>
                    <div className="category-time">
                      <span
                        className={
                          report.wasteCategory === "Regular"
                            ? "regular"
                            : report.wasteCategory === "Occasional"
                            ? "occasional"
                            : "urgent"
                        }
                      >
                        {report.wasteCategory}
                      </span>
                      <span className="time">{report.time}</span>
                      <span
                        className={
                          report.status === "Pending" ? "pending" : "Completed"
                        }
                      >
                        <GoDotFill className="svgIcon" />
                        {report.status === "Pending" ? "Pending" : "Completed"}
                      </span>
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
                  <div className="approval-button">
                    {report.status === "Pending" ? (
                      <button
                        className="btn btn-success approve-button"
                        onClick={() => approveReport(index)} // Approve the report
                      >
                        Approve
                      </button>
                    ) : null}
                    <button
                      className="btn btn-danger reject-button"
                      onClick={() => rejectReport(index)} // Reject (delete) the report
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* graph representation starts here */}
        <div className="admin-ratings-graph">
          <div className="admin-chart-representation">
            <p className="admin-chart-para">Waste Category Distribution</p>
            <WasteCategoryChart></WasteCategoryChart>
          </div>
          <div className="admin-report-category-data">
            <div className="total-report-count">
              <p>{ totalCount}</p>
              <span>Total Report's</span>
            </div>
            {/* individual count */}
            <div className="individual-report-count">
              <div className="pending-category-count">
                <p>{ pendingCount}</p>
                <span>Pending Report's</span>
              </div>
              <div className="approved-category-count">
              <p>{ approvedCount}</p>
              <span>Approved Report's</span>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminData;
