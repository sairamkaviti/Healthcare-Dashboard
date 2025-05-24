import logo from './logo.svg';
import './App.css';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavBar from './components/SideNavBar';
import Dashboard from './data/Dashboard';
import Calender from './data/Calender';

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <SideNavBar />
      <Dashboard />
      <Calender/>
    </div>
  );
}

export default App;
