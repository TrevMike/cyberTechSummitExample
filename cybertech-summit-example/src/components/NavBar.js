import React from "react";
import { useNavigate } from "react-router-dom";
// import menu from "../assets/menu.png";
// import exit from "../assets/exit.png";

function NavBar() {
  // const [open, setOpen] = useState(null);
  // console.log(open);
  const navigate = useNavigate();
  // const navStyle = {
  //   position: "fixed",
  //   width: "100vw",
  //   height: "100vh",
  //   display: "flex",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   background: "rgba(4, 11, 13, 95%)",
  // };
  return (
    <div className="navBar">
      <nav>
        {/* <span className="homeBtn"> */}
        {/* <img
            src={open === true  ? menu : exit}
            alt={`menu button`}
            onClick={() => setOpen(!open)}
          /> */}
        {/* </span> */}
        <span onClick={() => navigate("/")}>Home</span>{" "}
        <span
          className="menu-items"
          // style={{ display: open === true ? "flex" : "none" }}
          onClick={() => navigate("/email-sample-one")}
        >
          Email Example 1
        </span>
        <span
          className="menu-items"
          // style={{ display: open === true ? "flex" : "none" }}
          onClick={() => navigate("/email-sample-two")}
        >
          Email Example 2
        </span>
        <span
          className="menu-items"
          // style={{ display: open === true ? "flex" : "none" }}
          onClick={() => navigate("/email-sample-three")}
        >
          Email Example 3
        </span>
        <span
          className="menu-items"
          // style={{ display: open === true ? "flex" : "none" }}
          onClick={() => navigate("/email-sample-four")}
        >
          Email Example 4
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
