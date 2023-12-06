import React from 'react'

function Home() {
  return (
    <div className="reception-container">
      <div className="plane">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage">
                <figure
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    src="/front-view.jpg"
                    alt="#"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                  />
                </figure>

                <h1>ANDRI AND WEDDING</h1>
                <p>FRIDAY, JUNE 30, 2023</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src="images/plan_img.jpg" alt="#" />
                </figure>
                <div className="plan_text">
                  <h3>CHURCH CEREMONY</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod t dolor in reprehenderit in voluptate{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src="images/plan_img1.jpg" alt="#" />
                </figure>
                <div className="plan_text">
                  <h3>BEST RESTAURANT</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod t dolor in reprehenderit in voluptate{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src="images/plan_img2.jpg" alt="#" />
                </figure>
                <div className="plan_text">
                  <h3>HONEYMOON</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod t dolor in reprehenderit in voluptate{" "}
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

      <div className="additional-div">
        <h2>Additional Section</h2>
        <p>
          Additional text goes here. You can add more content and style as
          needed.
        </p>
      </div>
    </div>
  );

}

export default Home




