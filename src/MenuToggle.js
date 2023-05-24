import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuData }) => {
  const [isOpenAll, setIsOpenAll] = useState(false);

  const toggleOpenAll = () => {
    setIsOpenAll((prevIsOpenAll) => !prevIsOpenAll);
    console.log("isOpenAll:", !isOpenAll); // In giá trị của biến isOpenAll
  };

  const toggleChildren = (item) => {
    item.children.forEach((child) => {
      child.isOpen = !child.isOpen;
      if (child.children && child.children.length > 0) {
        toggleChildren(child);
      }
    });
  };

  return (
    <div>
      <button onClick={toggleOpenAll}>Toggle All</button>
      <ul className="menu">
        {menuData.items.map((item) => (
          <MenuItem
            key={item.title}
            item={item}
            isOpenAll={isOpenAll}
            toggleChildren={toggleChildren}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
