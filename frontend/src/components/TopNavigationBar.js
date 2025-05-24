import React from 'react'
import { FaBell, FaPlus, FaSearch } from "react-icons/fa";

function TopNavigationBar() {
  return (
    <div className="top-nav-main-container">
      <div className='header-search-conatiner'>
       
        <h2>
          <span className="logo-heading">Health</span>Care.
        </h2>
        <div className="search-bell-container">
          <div className="search-input-div">
            <FaSearch />
            <input type="search" placeholder="Search"></input>
          </div>
          <div className="bell-icon">
            <FaBell />
          </div>
        </div>
      </div>
      <div className="avatar-plus-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SVsZu9Ueak9n-HpowAbsKVFT-hdkoJDA-g&s"
          alt="avatar-image"
          className="avatar-image"
        ></img>

        <div className="plus-icon">
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

export default TopNavigationBar