import React from 'react'
import './RecentReports.css'

const RecentReports = () => {
  return (
    <div className="recent-report">
          <p className='recent-title'>Recent Reports</p>
          <div className="report-list">
            {/* individual report starts here */}
            <div className="report">
              <div className="text-content">
                <p className='text-title'>Illegal Dumping</p>
                <p className='location'>Location</p>
                <div className='category-time'>
                  <span className='urgent'>category</span>
                  <span className='time'>time</span>
                </div>
              </div>
              <div className="image">
                <img src="/garbage.jpg" alt="" />
              </div>
            </div>
            <div className="report">
              <div className="text-content">
                <p className='text-title'>Illegal Dumping</p>
                <p className='location'>Location</p>
                <div className='category-time'>
                  <span className='urgent'>category</span>
                  <span className='time'>time</span>
                </div>
              </div>
              <div className="image">
                <img src="/garbage.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default RecentReports