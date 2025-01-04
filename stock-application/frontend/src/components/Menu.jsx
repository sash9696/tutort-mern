import React, { useState } from "react";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const menuItems = [
    { label: "Dashboard", id: 0, path: "/" },
    { label: "Orders", id: 1, path: "/orders" },
    { label: "Holdings", id: 2, path: "/holdings" },
    { label: "Positions", id: 3, path: "/positions" },
    { label: "Funds", id: 4, path: "/funds" },
    { label: "Apps", id: 5, path: "/apps" },
  ];

  return (
    <div className="menu-container">
      <img src="" alt="icon" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleMenuClick(item.id)}>
              <p
                className={
                  selectedMenu === item.id ? activeMenuClass : menuClass
                }
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="profile">
          <div className="avatar">AB</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
