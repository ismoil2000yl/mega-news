import React, { useState } from "react";

import fi1 from "assets/images/png/fi1.png";
import iconSms from "assets/images/svg/sms.svg";
import fUpIcon from "assets/images/png/f-up.svg";
import fHomeIcon from "assets/images/png/f-home.svg";
import fUserIcon from "assets/images/png/f-user.svg";
import iconTwiter from "assets/images/svg/twiter.svg";
import iconInsta from "assets/images/svg/instagram.svg";
import fMarkedIcon from "assets/images/png/f-marked.svg";

import { Link } from "react-router-dom";

const index = () => {
  const [foMobile, setFoMobile] = useState(1);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__desktop desktop">
            <div className="desktop__leftbox">
              <div className="foter-newscardbox">
                <div className="foter-newscard">
                  <div className="newscard-title">
                    <h3>
                      <span className="border-f1"></span>
                      Mega News
                    </h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas erat imperdiet sed euismod nisi
                    porta lorem mollis. Morbi tristique senectus et netus.
                    Mattis pellentesque id nibh tortor id aliquet lectus proin
                  </p>
                </div>
                <div className="foter-newscard">
                  <div className="newscard-title">
                    <h3>
                      <span className="border-f1"></span>
                      Categories
                    </h3>
                  </div>
                  <ul>
                    <li>culture</li>
                    <li>fashion</li>
                    <li>featured</li>
                    <li>food</li>
                    <li>healthly living</li>
                    <li>technology</li>
                  </ul>
                </div>
                <div className="foter-newscard">
                  <div className="newscard-title">
                    <h3>
                      <span className="border-f1"></span>
                      newsletters
                    </h3>
                  </div>
                  <div className="letters-inputbox">
                    <form action="">
                      <input type="text" placeholder="Write Your Email" />
                      <i>
                        <img src={iconSms} alt="sms" />
                      </i>
                    </form>
                  </div>
                </div>
                <div className="foter-newscard">
                  <div className="newscard-title">
                    <h3>
                      <span className="border-f1"></span>
                      social network
                    </h3>
                  </div>
                  <div className="footer-socialbox">
                    <div className="instagram">
                      <img src={iconInsta} alt="instagrem" />
                      <p>Instagram</p>
                    </div>
                    <div className="twiter">
                      <img src={iconTwiter} alt="twiter" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="privacy-box">
                <h3>privacy policy | terms & conditions</h3>
                <h3>all copyright (c) 2022 reserved</h3>
              </div>
            </div>
            <div className="desktop__rightbox">
              <div className="comentsbox item">
                <div className="newscard-title">
                  <h3>
                    <span className="border-f1"></span>
                    news comments
                  </h3>
                </div>
                <div className="coments">
                  <div className="coment-card">
                    <h5>title</h5>
                    <p>
                      {" "}
                      how nice does this look 😍 I feel it should be delicious,
                      thank you
                    </p>
                  </div>
                  <div className="coment-card">
                    <h5>title</h5>
                    <p>
                      {" "}
                      how nice does this look 😍 I feel it should be delicious,
                      thank you
                    </p>
                  </div>
                  <div className="coment-card">
                    <h5>title</h5>
                    <p>
                      {" "}
                      how nice does this look 😍 I feel it should be delicious,
                      thank you
                    </p>
                  </div>
                  <div className="coment-card">
                    <h5>title</h5>
                    <p>
                      {" "}
                      how nice does this look 😍 I feel it should be delicious,
                      thank you
                    </p>
                  </div>
                </div>
              </div>
              <div className="followerbox item">
                <div className="newscard-title">
                  <h3>
                    <span className="border-f1"></span>
                    Follow on instagram
                  </h3>
                </div>
                <div className="followers">
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                  <img src={fi1} className="follower-img" alt="follower" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__mobile">
            <div
              onClick={() => setFoMobile(1)}
              className={`mobile-card ${foMobile == 1 ? "active" : ""}`}
            >
              <img src={fHomeIcon} alt="footer-icon" />
              <p>home</p>
            </div>
            <div
              onClick={() => setFoMobile(2)}
              className={`mobile-card ${foMobile == 2 ? "active" : ""}`}
            >
              <img src={fMarkedIcon} alt="footer-icon" />
              <p>marked</p>
            </div>
            <div
              onClick={() => setFoMobile(3)}
              className={`mobile-card ${foMobile == 3 ? "active" : ""}`}
            >
              <img src={fUserIcon} alt="footer-icon" />
              <p>user</p>
            </div>
            <div className={`mobile-card `}>
              <img src={fUpIcon} alt="footer-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;