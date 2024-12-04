import React, { useContext } from 'react'
import './AdminData.css'
import { ReportsContext } from '../../Store/ReportsContext'
import { GoDotFill } from "react-icons/go";

const AdminData = () => {
    const { reports } = useContext(ReportsContext)
    return (
        <div className='admin-data'>
            <div className="mynavbar">
                <p>Admin <span>Dashboard</span></p>
            </div>

            {/* recent entry start */}
            <div className="admin-content">
                <div className="admin-recent-entry">
                    <h2>Recent Entry</h2>
                    <div className="recent-reports">
                        <div className="report" >
                            <div className="text-content">
                                <p className='text-title'>Illegal Dumping</p>
                                <p className='location'>Location</p>
                                <div className='category-time'>
                                    <span className='urgent'>urgent</span>
                                    <span className='time'>time</span>
                                    <span className='approvalStatus'><GoDotFill />
                                    Pending</span>
                                </div>
                            </div>
                            <div className="image">
                                <img
                                    src='/garbage.jpg' // Accessing image file correctly
                                    alt="Report"
                                />
                            </div>
                            <div className="approval-button">
                                <button className="btn btn-success approve-button">Approve</button>
                                <button className="btn btn-danger reject-button">Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admin-ratings-graph">

                </div>
            </div>
        </div>
    )
}

export default AdminData