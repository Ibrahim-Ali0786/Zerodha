import React from "react";
import {useState} from "react"
import { Link } from 'react-router-dom';
const Menu = () => {
  let [Menu,setMenu] = useState(0);
  let [isProfile,setIsProfile] = useState(false);
  const handleMenuClick =(index)=>
  {
    setMenu(index);
  }
  const handleProfileClick =()=>
  {
    setIsProfile(!isProfile);
  }
  const menuClass = 'menu';
  const activeMenuClass = 'menu selected';
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
            <p className={Menu===0 ? activeMenuClass : menuClass} >Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={Menu===1 ? activeMenuClass : menuClass} >Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={Menu===2 ? activeMenuClass : menuClass} >Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={Menu===3 ? activeMenuClass : menuClass} >Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={Menu===4 ? activeMenuClass : menuClass} >Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
            <p className={Menu===5 ? activeMenuClass : menuClass} >Apps</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/logout" onClick={()=>handleMenuClick(6)}>
            <p className={Menu===6 ? activeMenuClass : menuClass} >Logout</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">IB</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
