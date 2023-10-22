import React from "react";
import {
  BsCart3,
  BsFillArchiveFill,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
  BsGrid1X2Fill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";

function Sidebar({ openSidebar, ToggleSidebar }) {
  return (
    <aside id="sidebar" className={openSidebar ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand flex items-center">
          <BsCart3 className="icon_header" /> RioShop
        </div>
        <span className="icon close_icon" onClick={ToggleSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGrid3X3GapFill className="icon" /> Category
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon" /> Costumers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGearFill className="icon" /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
