import React from 'react'
import { FaAngleDown, FaArrowRight, FaHeart, FaLungs } from 'react-icons/fa';
import { LuBone } from "react-icons/lu";
import { GiKidneys } from "react-icons/gi";
import { GiLeg } from "react-icons/gi";
import Activity from './Activity';
function Dashboard() {
  return (
    <div className="main-content-container">
      <div className="dash-weak-div">
        <h2>Dashboard</h2>
        <div>
          <span>
            This Week
            <FaAngleDown />
          </span>
        </div>
      </div>
      <br />
      <div className="dash-primary-div">
        <div className="human-body-image-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/049/886/063/non_2x/human-body-muscle-anatomy-illustration-on-transparent-background-free-png.png"
            alt="human-body"
            className="human-body-image"
          ></img>

          <div className="healthy-heart">
            <FaHeart />
            Healthy Heart
          </div>
          <div className="healthy-legs">
            <GiLeg />
            Healthy Legs
          </div>
        </div>
        <div className='body-three-divs-container'>
          <div className="body-parts-content-div">
            <span className="parts-heading-icon">
              <FaLungs />
              Lungs
            </span>
            <span className="date-span">Date:25 Oct 2025</span>
            <div className="empty-divs-container">
              <div className="color-empty-div empty-div"></div>
              <div className="common-empty-div empty-div"></div>
            </div>
          </div>
          <div className="body-parts-content-div">
            <span className="parts-heading-icon">
              <GiKidneys />
              Kidneys
            </span>
            <span className="date-span">Date:25 Oct 2025</span>
            <div className="empty-divs-container">
              <div className="color-empty-div empty-div kidneys"></div>
              <div className="common-empty-div empty-div"></div>
            </div>
          </div>
          <div className="body-parts-content-div">
            <span className="parts-heading-icon">
              <LuBone />
              Bone
            </span>
            <span className="date-span">Date:25 Oct 2025</span>
            <div className="empty-divs-container">
              <div className="color-empty-div empty-div bone"></div>
              <div className="common-empty-div empty-div"></div>
            </div>
          </div>
          <div className="dash-weak-div arrow-div">
            <div>
              <span>
                Details
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <Activity/>
    </div>
  );
}

export default Dashboard