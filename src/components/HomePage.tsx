import React, { useState } from "react";
import Nav from "./Nav";

function HomePage() {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: "",
    marginTop: "0px",
    padding: "0px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const h1Style: React.CSSProperties = {
    color: "white",
  };
  
     const [activeTab, setActiveTab] = useState<number>(0);

     const handleTabChange = (tabIndex: number) => {
       setActiveTab(tabIndex);
     };


  return (
    <>
      <div style={sectionStyle}>
        <h1 style={h1Style}>ANDRI AND WEDDING</h1>
        <p>FRIDAY, December 30, 2023</p>
        <Nav/>
      </div>
    
    </>
  );
}

export default HomePage;
