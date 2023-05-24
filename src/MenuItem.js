import React from "react";

const MenuItem = ({ item, isOpenAll, toggleChildren }) => {
  const hasChildren = item.children && item.children.length > 0;

  const toggleOpen = () => {
    toggleChildren(item);
     console.log("isOpen:", item.isOpen);
  };

  return (
    <li>
      <a href={item.link} target={item.target}>
        {item.title}
      </a>
      {hasChildren && (
        <>
          <button onClick={toggleOpen}>Toggle</button>
          {(item.isOpen || isOpenAll) && (
            <ul>
              {item.children.map((child) => (
                <MenuItem
                  key={child.title}
                  item={child}
                  isOpenAll={isOpenAll}
                  toggleChildren={toggleChildren}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
};

export default MenuItem;
