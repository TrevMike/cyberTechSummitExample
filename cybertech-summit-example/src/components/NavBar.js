import React from "react";

function NavBar() {
  // const navigate = useNavigate();
  return (
    <div className="navBar">
      <nav>
        <a href="/">Home</a>
        <a href="/email-sample-one">Email Example 1</a>
        <a href="/email-sample-two">Email Example 2</a>
        <a href="/email-sample-three">Email Example 3</a>
        <a href="/email-sample-four">Email Example 4</a>
      </nav>
    </div>
  );
}

export default NavBar;
