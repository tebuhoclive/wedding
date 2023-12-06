import React, { useState } from "react";
import HomePage from "./components/HomePage";
import MobileNav from "./components/MobileNav";
// import NavBar from "./components/Nav";

function App() {
  const appStyle = {
    backgroundImage: `url(/beautiful.jpg)`, // path is relative to the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "100vh",
  };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabIndex:number) => {
      setActiveTab(tabIndex);
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
