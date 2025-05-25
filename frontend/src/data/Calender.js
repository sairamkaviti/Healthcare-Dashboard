import React from 'react'
import { TbArrowsMoveHorizontal } from "react-icons/tb";
import Schedule from './Schedule';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaCheckCircle, FaEye, FaHeart, FaTeeth } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

function Calender() {
  return (
    <div className="main-content-right">
      <div className="dash-weak-div">
        <span>October 2021</span>
        <span>
          <TbArrowsMoveHorizontal />
        </span>
      </div>
      <br />
      <div className="calender-main-container">
        <div className="schedule-column-div">
          <div className="day-div">Mon</div>
          <div className="date-div">25</div>
          <div className="time-div">10:00</div>
          <div className="time-div">11:00</div>
          <div className="time-div">12:00</div>
        </div>
        <div className="schedule-column-div tuesday-div">
          <div className="day-div">Tues</div>
          <div className="date-div">26</div>
          <div className="time-div">08:00</div>
          <div className="time-div bgm-time">09:00</div>
          <div className="time-div">10:00</div>
        </div>
        <div className="schedule-column-div">
          <div className="day-div">Wed</div>
          <div className="date-div">27</div>
          <div className="time-div">12:00</div>
          <div className="time-div">-----</div>
          <div className="time-div">13:00</div>
        </div>
        <div className="schedule-column-div">
          <div className="day-div">Thurs</div>
          <div className="date-div">28</div>
          <div className="time-div">10:00</div>
          <div className="time-div light-bgm">
            <span>11:00</span>
            <span className="dot-span">.</span>
          </div>
          <div className="time-div">-----</div>
        </div>
        <div className="schedule-column-div">
          <div className="day-div">Fri</div>
          <div className="date-div">29</div>
          <div className="time-div">-----</div>
          <div className="time-div">14:00</div>
          <div className="time-div">16:00</div>
        </div>
        <div className="schedule-column-div">
          <div className="day-div">Sat</div>
          <div className="date-div">30</div>
          <div className="time-div light-bgv-sat">
            <span>12:00</span>
            <span className="dot-span">.</span>
          </div>
          <div className="time-div">14:00</div>
          <div className="time-div">15:00</div>
        </div>
        <div className="schedule-column-div sunday-div">
          <div className="day-div">Sun</div>
          <div className="date-div">31</div>
          <div className="time-div light-bgv-sun">
            <span>09:00</span>
            <span className="dot-span">.</span>
          </div>
          <div className="time-div">10:00</div>
          <div className="time-div">11:00</div>
        </div>
      </div>

      <Schedule
        className="dentist-main-div"
        title1="Dentist"
        icon1={<FaTeeth />}
        time1="09:00 - 11:00"
        doctor1="Dr.Cameron Williamson"
        title2="Physiotherapy Appointment"
        icon2={<GiPlagueDoctorProfile />}
        time2="11:00 - 12:00"
        doctor2="Dr.Kevin Djones"
      />
      <br />
      <h4>The Upcoming Schedule</h4>
      <Schedule
        day="On Thursday"
        title1="Health Checkup Complete"
        icon1={<FaCheckCircle />}
        time1="11:00 AM"
        title2="Opthamologist"
        icon2={<FaEye />}
        time2="14:00 PM"
      />
      <Schedule
        day="On Friday"
        title1="Cardiolgist"
        icon1={<FaHeart />}
        time1="12:00 AM"
        title2="Neurologist"
        icon2={<FaUserDoctor />}
        time2="16:00 PM"
      />
    </div>
  );
}

export default Calender