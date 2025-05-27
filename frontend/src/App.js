import logo from './logo.svg';
import './App.css';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavBar from './components/SideNavBar';
import Dashboard from './data/Dashboard';
import Calender from './data/Calender';
import { useState } from 'react';

function App() {

  let [sidebarOpen,setSidebarOpen]=useState(false)
  return (
    <div className="App">
      <TopNavigationBar  setSidebarOpen={setSidebarOpen}/>
      <SideNavBar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Dashboard />
      <Calender/>
    </div>
  );
}

export default App;
