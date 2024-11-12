import React from 'react'
import './header.css'
import Logo from "../../assets/images/logo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_contanier">
      <div className="header_container">
        <div className="logo">
          
            <ul>
              <li>
                <img src={Logo} alt="Netflix Logo" width={100} />
              </li>
            </ul>
          </div>
          <div className="header_left">
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
          <li><NotificationsIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
     </div>
  );
}

export default Header;
