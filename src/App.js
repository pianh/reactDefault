import React from "react";
import menuData from "./menuData";
import Menu from "./MenuToggle";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1 className="Heading">Menu Đệ Quy Đa Cấp</h1>
      <Menu menuData={menuData} />
    </div>
  );
};

export default App;
