import tempImage from "./images/Your paragraph text.png";
import heroImage from "./images/Stress-rafiki.svg";
import essam from "./images/IMG_3040.jpeg";
import youtubeIcon from "./images/icons/youtube_activity_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import codeIcon from "./images/icons/code_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import socialIcon from "./images/icons/public_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Separator from "./Separator";
import SpaceBackground from "./SpaceBackground";
import Footer from "./Footer";

import "./styling/About.css";
import { useRef } from "react";

function About(props) {
  return (
    <div>
      <SpaceBackground colorChoice={2} />

      <div className="hero">
        <div className="left">
          <h1 className="hero-left-title">I Remember Stagnating...</h1>
          <p className="hero-left-description">
            I was never a social media person, but I realised this was
            preventing my personal growth. Whether it be the lack of job offers
            or the lack of opportunities for me to put myself out there, I truly
            believe that the internet is a great place for growth.
          </p>
        </div>
        <img src={heroImage} alt="#"></img>
      </div>

      <Separator />

      <h1 className="stats-title">Why Us?</h1>
      <div className="stats">
        <div class="stats-card">
          <img src={youtubeIcon} alt="#"></img>
          <h1>4+ Years of Content Creation</h1>
          <p className="stats-description">
            Our in-house editor has been making content for about half a decade,
            so we guarantee great results!
          </p>
        </div>
        <div class="stats-card">
          <img src={codeIcon} alt="#"></img>
          <h1>2+ Years of Web Developmet</h1>
          <p className="stats-description">
            Our in-house web developer can do full stack development, from a
            simple blog website to complex e-commerce businesses
          </p>
        </div>
        <div class="stats-card">
          <img src={socialIcon} alt="#"></img>
          <h1>10+ years of Social Media</h1>
          <p className="stats-description">
            We have used social media for our entire lives, so we know exactly
            what type of marketing works!
          </p>
        </div>
      </div>

      <div className="team" id="team">
        <h1>Meet the team</h1>
        <div className="team-member essam">
          <div>
            <h2>Essam</h2>
            <p>
              Help please Help please Help please Help please Help please Help
              please Help please Help please Help please Help please Help please
            </p>
          </div>
          <img src={essam} alt="#" className="profile-picture"></img>
        </div>
        <div className="team-member ghazi">
          <img src={tempImage} alt="#"></img>
          <div>
            <h2>Ghazi</h2>
            <p>
              BozoBozoBozo BozoBozoBozo BozoBozoBozo BozoBozoBozo BozoBozoBozo
              BozoBozoBozo BozoBozoBozo BozoBozoBozo BozoBozo
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <div className="credentials"></div>
    </div>
  );
}

export default About;
