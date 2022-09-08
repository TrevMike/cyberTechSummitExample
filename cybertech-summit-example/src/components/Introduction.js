import React from "react";

function Introduction() {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
  };
  return (
    <div className="introduction">
      <header style={headerStyle}>
        <h1>Welcome to Cybersecurity Summit 2022</h1>
        <h3>6th Annual Region One Cybersecurity Summit</h3>
        <p>Topics we will be covering</p>
        <ul>
          <li>The history of HTML for links and how we have evolved.</li>
          <li>The different methods of setting up emails PROS and CONS.</li>
          <li>What I personally prefer to set up and why?</li>
          <li>How we will eventually phase out this method I choose.</li>
          <li>Questions?</li>
        </ul>
      </header>
    </div>
  );
}

export default Introduction;
