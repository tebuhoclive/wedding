import React, { useState } from "react";
import "./Tabs.css"; // Adjust the path based on your project structure
import Reception from "./Reception";
import Photos from "./Photos";
import Party from "./Party";
import Home from "./Home";
import Accommodation from "./Accommodation";


const YourComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div>
        <div>
          <div className="uk-subnav">
            <a
              className={activeTab === 0 ? "uk-active" : ""}
              onClick={() => handleTabChange(0)}>
              Home
            </a>
            <a
              className={activeTab === 1 ? "uk-active" : ""}
              onClick={() => handleTabChange(0)}>
              Our Reception
            </a>
            <a
              className={activeTab === 2 ? "uk-active" : ""}
              onClick={() => handleTabChange(1)}>
              Our Photos
            </a>
            <a
              className={activeTab === 3 ? "uk-active" : ""}
              onClick={() => handleTabChange(1)}>
              Wedding Party
            </a>
            <a
              className={activeTab === 4 ? "uk-active" : ""}
              onClick={() => handleTabChange(1)}>
              Accommodation
            </a>
          </div>

          <div className="uk-margin">
            {activeTab === 0 && <Home />}
            {activeTab === 1 && <Reception />}
            {activeTab === 2 && <Photos />}
            {activeTab === 3 && <Party />}
            {activeTab === 4 && <Accommodation/>}
            {/* Add more components/content as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
