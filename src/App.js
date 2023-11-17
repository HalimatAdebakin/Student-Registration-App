import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InMemoryDatabaseProvider } from './components/InMemoryDatabase';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import LogOut from './components/LogOut';



import './App.css';

function App() {
  return (
    
    <InMemoryDatabaseProvider>
    <Router>
      <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
    
   
     
      {/* Add more routes as needed */}
      </Routes>
  </Router>
  </InMemoryDatabaseProvider>
  );
}

export default App;
