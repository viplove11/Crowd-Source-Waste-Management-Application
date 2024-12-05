import React, { useContext } from 'react';
import './AdminData.css';
import { ReportsContext } from '../../Store/ReportsContext';
import { GoDotFill } from "react-icons/go";

const AdminData = () => {
    const { reports } = useContext(ReportsContext);
    return (
        <div className='admin-data'>
            <div className="mynavbar">
                <p>Admin <span>Dashboard</span></p>
            </div>

            {/* recent entry start */}
            <div className="admin-content">
                <div className="admin-recent-entry">
                    <h2>Recent Entry</h2>
                    {console.log(reports)}
                    <div className="recent-reports">
                        {reports.map((report, index) => (
                            <div className="report" key={index}>
                                <div className="text-content">
                                    <p className='text-title'>{report.description}</p>
                                    <p className='location'>Location</p>
                                    <div className='category-time'>
                                        <span className='urgent'>urgent</span>
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
                                <div className="approval-button">
                                    <button className="btn btn-success approve-button">Approve</button>
                                    <button className="btn btn-danger reject-button">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* graph representation starts here */}
                <div className="admin-ratings-graph">
                    {/* Graph content can go here */}
                </div>
            </div>
        </div>
    );
}

export default AdminData;