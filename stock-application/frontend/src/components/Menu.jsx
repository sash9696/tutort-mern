import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const menuItems = [
  { label: "Dashboard", id: 0, path: "/" },
  { label: "Orders", id: 1, path: "/orders" },
  { label: "Holdings", id: 2, path: "/holdings" },
  { label: "Positions", id: 3, path: "/positions" },
  { label: "Funds", id: 4, path: "/funds" },
  { label: "Apps", id: 5, path: "/apps" },
];
function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const location = useLocation();
  const path = location.pathname;

  console.log('location',location)

  useEffect(() => {
    const item = menuItems.find(i => i.path == path);
    setSelectedMenu(item.id);
  }, [])

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

 

  return (
    <div className="menu-container">
      <img src="" alt="icon" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                onClick={() => handleMenuClick(item.id)}
              >
                <p
                  className={
                    selectedMenu === item.id ? activeMenuClass : menuClass
                  }
                >
                  {item.label}
                </p>
              </Link>
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
