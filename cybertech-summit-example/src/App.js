import React from "react";
import Introduction from "./components/Introduction";
import EmailExample from "./components/EmailExample";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import homePage1 from "./assets/homePage1.jpg";
// import homeVid from "./assets/homeVid1.mp4";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <EmailExample />
      <Footer />
    </div>
  );
}

export default App;
