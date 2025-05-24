import React from "react";
import { FaCalendarAlt, FaHistory, FaPlusSquare } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCallSharp, IoSettings } from "react-icons/io5";
function SideNavBar() {
  return (
    <div className="side-bar-main-container">
      <nav>
        <div className="top-sections">
          <section className="menu-section">
            <h5 className="menu-heading">General</h5>
            <ul>
              <li className="first-li">
                <span>
                  <MdDashboard />
                </span>
                <span>Dashboard</span>
              </li>
              <li>
                <span>
                  <FaHistory />
                </span>
                <span>History</span>
              </li>
              <li>
                <span>
                  <FaCalendarAlt />
                </span>
                <span>Calender</span>
              </li>
              <li>
                <span>
                  <FaPlusSquare />
                </span>
                <span>Appointments</span>
              </li>
              <li>
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
              <li>
                <span>
                  <BsChatDotsFill />
                </span>
                <span>Chat</span>
              </li>
              <li>
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
              <li>
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
