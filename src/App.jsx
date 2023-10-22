import { useState } from "react";
import "./App.css";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const ToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="grid-container">
      <Topbar ToggleSidebar={ToggleSidebar} />
      <Sidebar openSidebar={openSidebar} ToggleSidebar={ToggleSidebar} />
      <Content />
    </div>
  );
}

export default App;
