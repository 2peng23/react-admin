import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeAtFill,
  BsJustify,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";
function Topbar({ ToggleSidebar }) {
  return (
    <nav className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={ToggleSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right flex">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeAtFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </nav>
  );
}

export default Topbar;
