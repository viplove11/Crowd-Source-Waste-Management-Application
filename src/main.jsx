import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import { ReportsProvider } from './Store/ReportsContext.jsx';
import Admin from './Pages/Admin/Admin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  
    <ReportsProvider>
      <BrowserRouter> {/* Add this wrapper */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ReportsProvider>
);
