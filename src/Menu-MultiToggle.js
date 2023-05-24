import React, { useState } from "react";
// import "./Menu.css";

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); //State

  const hasChildren = item.children && item.children.length > 0;

  const toggleOpen = () => {
    setIsOpen(!isOpen); //Swap
  };

  return (
    <li>
      <a href={item.link} target={item.target}>
        {item.title}
      </a>
      {hasChildren && (
        <div>
          <button onClick={toggleOpen}>Toggle</button>
          {isOpen && (  //Kiem tra
            <ul>
              {item.children.map((child) => (
                <MenuItem key={child.title} item={child} />
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
};

const Menu = ({ menuData }) => {
  return (
    <ul className="menu">
      {menuData.items.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </ul>
  );
};

export default Menu;
