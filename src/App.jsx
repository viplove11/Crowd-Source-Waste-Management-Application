import React from 'react'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import RecentReports from './components/Recent Reports/RecentReports'
import Community from './components/Community/Community'
import QuickReports from './components/Quick Reports/QuickReports'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
    <div className='app'>
      <div className="map-recentReports">
        <div className="map"></div>
        <RecentReports></RecentReports>
      </div>
      {/* community and quick reports */}
      <div className='community-quick-reports'>
        <Community></Community>
       <QuickReports> </QuickReports>
      </div>
    </div>
    </>
  )
}

export default App