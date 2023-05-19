import React from "react";
import { Link } from "react-router-dom";
import { landingPageImage } from "../../assets";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="hero-banner-section">

    <h1 className="text-center text-6xl mt-56">Lets Create Your Events</h1>
    <br />
    <br />
      <Link to="/create-event">
        <button className="btn mt-80 bg-yellow-50 p-5 rounded-md text-black">
          <p className="text-sky-900">🎉 Create my event</p>
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
