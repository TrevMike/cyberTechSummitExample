import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <nav>
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/email-sample-one")}>
          Email Example 1
        </span>
        <span onClick={() => navigate("/email-sample-two")}>
          Email Example 2
        </span>
        <span onClick={() => navigate("/email-sample-three")}>
          Email Example 3
        </span>
        <span onClick={() => navigate("/email-sample-four")}>
          Email Example 4
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
