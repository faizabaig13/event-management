import React from "react";
import { Link } from "react-router-dom";
import { landingPageImage } from "../../assets";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="hero-banner-section">
      <img src={landingPageImage} alt="" className="banner-img" />
      <div className="banner-text">
        <div className="headings">
          <div className="banner-heading-1">Imagine if</div>
          <div className="word-snapchat">Snapchat </div>
          <div className="banner-heading-2">had events.</div>
        </div>

        <div className="banner-paragraph">
          Easily host and share events with your friends across any social
          media.
        </div>
      </div>
      <Link to="/create-event">
        <button className="button">
          <p className="button-text">🎉 Create my event</p>
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
