import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import RecentReports from './components/Recent Reports/RecentReports';
import Community from './components/Community/Community';
import QuickReports from './components/Quick Reports/QuickReports';
import { ReportsProvider } from './Store/ReportsContext'; // Import the ReportsProvider

const App = () => {
  return (
    <ReportsProvider> {/* Wrap your components with ReportsProvider */}
      <>
        <Navbar />
        <div className='app'>
          <div className="map-recentReports">
            <div className="map"></div>
            <RecentReports />
          </div>
          {/* community and quick reports */}
          <div className='community-quick-reports'>
            <Community />
            <QuickReports />
          </div>
        </div>
      </>
    </ReportsProvider>
  );
}

export default App;