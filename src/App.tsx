import React from "react";
import HomePage from "./components/HomePage";
// import NavBar from "./components/Nav";

function App() {
  const appStyle = {
    backgroundImage: `url(/beautiful.jpg)`, // path is relative to the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle}>
      {/* <NavBar /> */}
      <HomePage />
      {/* Add other components here */}
    </div>
  );
}

export default App;
