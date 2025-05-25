import React from 'react'

function Schedule(props) {
  return (
    <div>
      {/* <h2>The Upcoming Schedule</h2> */}
      <div>
        <div className="schedule-day-head">{props.day}</div>
        <div className="calender-dentist-container-main">
          <div
            className={`right-side-boxes-div physiotherapy-div ${props.className}`}
          >
            <div className="right-name-icon-div">
              <span>{props.title1}</span>
              <span>{props.icon1}</span>
            </div>
            <span>{props.time1}</span>
            <p>{props.doctor1}</p>
          </div>
          <div className="right-side-boxes-div physiotherapy-div">
            <div className="right-name-icon-div">
              <span>{props.title2}</span>
              <span>{props.icon2}</span>
            </div>
            <span>{props.time2}</span>
            <p>{props.doctor2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule