import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import exit from "../assets/exit.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <nav>
        <span onClick={() => navigate("/")}>Home</span>
        <span
          className="menu-items"
          onClick={() => navigate("/email-sample-one")}
        >
          Email Example 1
        </span>
        <span
          className="menu-items"
          onClick={() => navigate("/email-sample-two")}
        >
          Email Example 2
        </span>
        <span
          className="menu-items"
          onClick={() => navigate("/email-sample-three")}
        >
          Email Example 3
        </span>
        <span
          className="menu-items"
          onClick={() => navigate("/email-sample-four")}
        >
          Email Example 4
        </span>
        <img
          src={open ? exit : menu}
          alt={`menu button`}
          onClick={() => setOpen(!open)}
        />
      </nav>
    </div>
  );
}

export default NavBar;
