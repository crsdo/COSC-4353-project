import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsDropletFill,
  BsGrid1X2Fill,
  BsCardText,
  BsFillGrid3X3GapFill,
  BsFillGearFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsDropletFill className='icon_header' /> FMS
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/FuelQuoteForm">
            <BsCardText className='icon' /> Fuel Quote Form
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/History">
            <BsFillGrid3X3GapFill className='icon' /> History
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Logout">
            <BsFillGearFill className='icon' /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
