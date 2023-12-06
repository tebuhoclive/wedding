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
                  className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img
                    className="uk-responsive-width"
                    src="/front-view.jpg"
                    alt=""
                    style={{
                      maxWidth: "60%",
                      maxHeight: "60%",
                      objectFit: "cover",
                    }}
                  />
                </figure>
                <button
                  className="uk-button uk-button-default"
                  style={{ backgroundColor: "black", color: "white" }}>
                  RSV
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <div className="plan_bax text_align_center">
                <div className="plan_text">
                  <h3>ANDRI NTEMA</h3>
                  <p> &</p>
                  <h3> WIFES NAMES</h3>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home




