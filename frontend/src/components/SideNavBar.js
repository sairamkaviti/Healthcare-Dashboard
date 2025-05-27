import React from "react";
import { FaCalendarAlt, FaHistory, FaPlusSquare } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCallSharp, IoSettings } from "react-icons/io5";
function SideNavBar({ sidebarOpen, setSidebarOpen }) {
  
  let handleSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
  }
}

  return (
    <div
      className={`side-bar-main-container ${sidebarOpen ? "open" : "closed"}`}
    >
      <nav>
        <div className="top-sections">
          <section className="menu-section">
            <h5 className="menu-heading">General</h5>
            <ul>
              <li className="first-li" onClick={handleSidebar}>
                <span>
                  <MdDashboard />
                </span>
                <span>Dashboard</span>
              </li>
              <li onClick={handleSidebar}>
                <span>
                  <FaHistory />
                </span>
                <span>History</span>
              </li>
              <li onClick={handleSidebar}>
                <span>
                  <FaCalendarAlt />
                </span>
                <span>Calender</span>
              </li>
              <li onClick={handleSidebar}>
                <span>
                  <FaPlusSquare />
                </span>
                <span>Appointments</span>
              </li>
              <li onClick={handleSidebar}>
                <span>
                  <FcStatistics />
                </span>
                <span>Statistics</span>
              </li>
            </ul>
          </section>
          <section className="menu-section">
            <h5 className="menu-heading">Tools</h5>
            <ul>
              <li onClick={handleSidebar}>
                <span>
                  <BsChatDotsFill />
                </span>
                <span>Chat</span>
              </li>
              <li onClick={handleSidebar}>
                <span>
                  <IoCallSharp />
                </span>
                <span>Support</span>
              </li>
            </ul>
          </section>
        </div>
        <div className="bottom-section">
          <section className="menu-section">
            <ul>
              <li onClick={handleSidebar}>
                <span>
                  <IoSettings />
                </span>
                <span>Setting</span>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
}

export default SideNavBar;
