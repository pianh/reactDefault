import React from "react";
import "./Menu.css";

const MenuItem = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <a href={item.link} target={item.target}>
        {item.title}
      </a>
      {hasChildren && (
        <ul>
          {item.children.map((child) => (
            <MenuItem key={child.title} item={child} />
          ))}
        </ul>
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
