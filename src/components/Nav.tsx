import React, { useState } from "react";
import "./Tabs.css"; // Adjust the path based on your project structure


const YourComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div>
        <ul
          className="uk-subnav uk-subnav-pill"
          uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
          <li className={activeTab === 0 ? "uk-active" : ""}>
            <a href="#" onClick={() => handleTabChange(0)}>
              Item 1
            </a>
          </li>
          <li className={activeTab === 1 ? "uk-active" : ""}>
            <a href="#" onClick={() => handleTabChange(1)}>
              Item 2
            </a>
          </li>
          <li className={activeTab === 2 ? "uk-active" : ""}>
            <a href="#" onClick={() => handleTabChange(2)}>
              Item 3
            </a>
          </li>
        </ul>

        <div>
          <div className="uk-subnav">
            <a
              className={activeTab === 0 ? "uk-active" : ""}
              onClick={() => handleTabChange(0)}>
              All Job Cards
            </a>
            <a
              className={activeTab === 1 ? "uk-active" : ""}
              onClick={() => handleTabChange(1)}>
              Not Acknowledged Job Cards
            </a>
            {/* Add more tabs as needed */}
          </div>

          <div className="uk-margin">
            {activeTab === 0 && <p>First Tab</p> }
            {activeTab === 1 && <p>Second Tab</p>}
            {/* Add more components/content as needed */}
          </div>
        </div>

        <div className="uk-switcher uk-margin">
          {activeTab === 0 && (
            <li>
              {" "}
              <div className="plane">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="titlepage">
                        <h2>Our Plane</h2>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod t dolor in reprehenderit in
                          voluptate{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="plan_bax text_align_center">
                        <figure>
                          <img src="images/plan_img.jpg" alt="#" />
                        </figure>
                        <div id="ho_plan" className="plan_text">
                          <h3>FLOWER DECORATIONS</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod t dolor in reprehenderit in
                            voluptate{" "}
                          </p>
                          <a className="read_more" href="Javascript:void(0)">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="plan_bax text_align_center">
                        <figure>
                          <img src="images/plan_img1.jpg" alt="#" />
                        </figure>
                        <div id="ho_plan" className="plan_text">
                          <h3>BEST RESTAURANT</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod t dolor in reprehenderit in
                            voluptate{" "}
                          </p>
                          <a className="read_more" href="Javascript:void(0)">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="plan_bax text_align_center">
                        <figure>
                          <img src="images/plan_img2.jpg" alt="#" />
                        </figure>
                        <div id="ho_plan" className="plan_text">
                          <h3>HONEYMOON</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod t dolor in reprehenderit in
                            voluptate{" "}
                          </p>
                          <a className="read_more" href="Javascript:void(0)">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
          {activeTab === 1 && <li>Hello again!</li>}
          {activeTab === 2 && <li>Bazinga!</li>}
        </div>
      </div>
      <div>
        <ul className="uk-tab" data-uk-tab="true">
          <li className={activeTab === 0 ? "uk-active" : ""}>
            <a href="#" onClick={() => handleTabChange(0)}>
              All Job Cards
            </a>
          </li>
          <li className={activeTab === 1 ? "uk-active" : ""}>
            <a href="#" onClick={() => handleTabChange(1)}>
              Not Acknowledged Job Cards
            </a>
          </li>
          {/* Add more tabs as needed */}
        </ul>

        <ul className="uk-switcher uk-margin" data-uk-switcher="true">
          <li className={activeTab === 0 ? "uk-active" : ""}>
            {/* <DashboardGrid data={Jobcards} /> */}
          </li>
          <li className={activeTab === 1 ? "uk-active" : ""}>
            <p>Second Tab</p>
            {/* <DashboardGrid data={Jobcards} /> */}
          </li>
          {/* Add more table content as needed */}
        </ul>
      </div>
    </>
  );
};

export default YourComponent;
