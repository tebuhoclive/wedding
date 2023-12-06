// MobileNav.js
import React from "react";
import "./MobileNav.css";

interface MobileNavProps {
  activeTab: number;
  handleTabChange: (tabIndex: number) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  activeTab,
  handleTabChange,
}) => {
  return (
    <div className="mobile-nav uk-hidden@s">
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        uk-toggle="target: #offcanvas-nav">
        <span uk-icon="icon: menu"></span> Menu
      </button>

      <div id="offcanvas-nav" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"></button>

          <ul className="uk-nav uk-nav-default">
            <li className={activeTab === 0 ? "uk-active" : ""}>
              <a href="#" onClick={() => handleTabChange(0)}>
                Home
              </a>
            </li>
            <li className={activeTab === 1 ? "uk-active" : ""}>
              <a href="#" onClick={() => handleTabChange(1)}>
                Our Reception
              </a>
            </li>
            <li className={activeTab === 2 ? "uk-active" : ""}>
              <a href="#" onClick={() => handleTabChange(2)}>
                Our Photos
              </a>
            </li>
            <li className={activeTab === 3 ? "uk-active" : ""}>
              <a href="#" onClick={() => handleTabChange(3)}>
                Wedding Party
              </a>
            </li>
            <li className={activeTab === 4 ? "uk-active" : ""}>
              <a href="#" onClick={() => handleTabChange(4)}>
                Accommodation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
