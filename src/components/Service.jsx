import Separator from "./Separator";
import { useState } from "react";

import "./styling/Service.css";
import tempImage from "./images/Your paragraph text.png";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Services() {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <div id="service-container">
      <div className="service-hero">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra
          vehicula velit, sit amet congue enim lacinia sed. Pellentesque
          fermentum volutpat orci vitae iaculis. Nam pellentesque consequat
          sollicitudin. Duis sed mauris a leo mollis faucibus. Morbi id luctus
          tellus. Quisque volutpat faucibus justo sit amet sollicitudin. Mauris
          vestibulum varius velit eget maximus. Integer et sem tristique libero
          dignissim tincidunt ut id libero. Etiam finibus, ligula in tincidunt
          commodo, elit erat condimentum orci, eget suscipit tortor purus non
          ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Mauris hendrerit turpis in diam euismod, nec vehicula eros aliquet.
          Aenean fringilla pellentesque rutrum. Mauris ullamcorper et diam et
          tempus. Sed aliquam euismod arcu et ultricies. Integer gravida augue
          in mi interdum, vel pellentesque sapien finibus. Phasellus iaculis
          mauris sit amet ultricies congue. In vitae congue sem. Donec fringilla
          elementum tellus, vel mattis massa. Vestibulum hendrerit turpis quis
          eros dapibus maximus. Donec tortor magna, accumsan ut enim a, accumsan
          tempus massa. Pellentesque eros risus, vestibulum sit amet arcu eget,
          mollis maximus ipsum.
        </p>
        <div className="hero-fast-travel">
          <ul className="hero-link-list">
            <NavLink
              to="/services/story"
              onClick={() => {
                setCardOpen(true);
              }}
            >
              Brand Storytelling
            </NavLink>
            <a href="/website">
              <li>Website Development</li>
            </a>
            <a href="/social">
              <li>Social Media Management</li>
            </a>
            <a href="/content">
              <li>Content Campaigns</li>
            </a>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="service-description">
        <div className="service-description-card" id="story">
          <div className="service-description-card-text">
            <h2>Build Your Brand With A Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra vehicula velit, sit amet congue enim lacinia sed.
              Pellentesque fermentum volutpat orci vitae iaculis. Nam
              pellentesque consequat sollicitudin. Duis sed mauris a leo mollis
              faucibus. Morbi id luctus tellus. Quisque volutpat faucibus justo
              sit amet sollicitudin. Mauris vestibulum varius velit eget
              maximus. Integer et sem tristique libero dignissim tincidunt ut id
              libero. Etiam finibus, ligula in tincidunt commodo, elit erat
              condimentum orci, eget suscipit tortor purus non ex. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit
              turpis in diam euismod, nec vehicula eros aliquet. Aenean
              fringilla pellentesque rutrum. Mauris ullamcorper et diam et
              tempus. Sed aliquam euismod arcu et ultricies. Integer gravida
              augue in mi interdum, vel pellentesque sapien finibus. Phasellus
              iaculis mauris sit amet ultricies congue. In vitae congue sem.
              Donec fringilla elementum tellus, vel mattis massa. Vestibulum
              hendrerit turpis quis eros dapibus maximus. Donec tortor magna,
              accumsan ut enim a, accumsan tempus massa. Pellentesque eros
              risus, vestibulum sit amet arcu eget, mollis maximus ipsum.
            </p>
          </div>
          <img src={tempImage} alt="#"></img>
        </div>

        <div className="service-description-card" id="website">
          <img src={tempImage} alt="#"></img>
          <div className="service-description-card-text">
            <h2>Engage Potential Cutomers With A Website</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra vehicula velit, sit amet congue enim lacinia sed.
              Pellentesque fermentum volutpat orci vitae iaculis. Nam
              pellentesque consequat sollicitudin. Duis sed mauris a leo mollis
              faucibus. Morbi id luctus tellus. Quisque volutpat faucibus justo
              sit amet sollicitudin. Mauris vestibulum varius velit eget
              maximus. Integer et sem tristique libero dignissim tincidunt ut id
              libero. Etiam finibus, ligula in tincidunt commodo, elit erat
              condimentum orci, eget suscipit tortor purus non ex. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit
              turpis in diam euismod, nec vehicula eros aliquet. Aenean
              fringilla pellentesque rutrum. Mauris ullamcorper et diam et
              tempus. Sed aliquam euismod arcu et ultricies. Integer gravida
              augue in mi interdum, vel pellentesque sapien finibus. Phasellus
              iaculis mauris sit amet ultricies congue. In vitae congue sem.
              Donec fringilla elementum tellus, vel mattis massa. Vestibulum
              hendrerit turpis quis eros dapibus maximus. Donec tortor magna,
              accumsan ut enim a, accumsan tempus massa. Pellentesque eros
              risus, vestibulum sit amet arcu eget, mollis maximus ipsum.
            </p>
          </div>
        </div>

        <div className="service-description-card" id="social">
          <div className="service-description-card-text">
            <h2>Excite Customers With An Active Social Presence</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra vehicula velit, sit amet congue enim lacinia sed.
              Pellentesque fermentum volutpat orci vitae iaculis. Nam
              pellentesque consequat sollicitudin. Duis sed mauris a leo mollis
              faucibus. Morbi id luctus tellus. Quisque volutpat faucibus justo
              sit amet sollicitudin. Mauris vestibulum varius velit eget
              maximus. Integer et sem tristique libero dignissim tincidunt ut id
              libero. Etiam finibus, ligula in tincidunt commodo, elit erat
              condimentum orci, eget suscipit tortor purus non ex. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit
              turpis in diam euismod, nec vehicula eros aliquet. Aenean
              fringilla pellentesque rutrum. Mauris ullamcorper et diam et
              tempus. Sed aliquam euismod arcu et ultricies. Integer gravida
              augue in mi interdum, vel pellentesque sapien finibus. Phasellus
              iaculis mauris sit amet ultricies congue. In vitae congue sem.
              Donec fringilla elementum tellus, vel mattis massa. Vestibulum
              hendrerit turpis quis eros dapibus maximus. Donec tortor magna,
              accumsan ut enim a, accumsan tempus massa. Pellentesque eros
              risus, vestibulum sit amet arcu eget, mollis maximus ipsum.
            </p>
          </div>
          <img src={tempImage} alt="#"></img>
        </div>

        <div className="service-description-card" id="content">
          <img src={tempImage} alt="#"></img>
          <div className="service-description-card-text">
            <h2>Promote Yourself With Our Curated Content Campaigns</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra vehicula velit, sit amet congue enim lacinia sed.
              Pellentesque fermentum volutpat orci vitae iaculis. Nam
              pellentesque consequat sollicitudin. Duis sed mauris a leo mollis
              faucibus. Morbi id luctus tellus. Quisque volutpat faucibus justo
              sit amet sollicitudin. Mauris vestibulum varius velit eget
              maximus. Integer et sem tristique libero dignissim tincidunt ut id
              libero. Etiam finibus, ligula in tincidunt commodo, elit erat
              condimentum orci, eget suscipit tortor purus non ex. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit
              turpis in diam euismod, nec vehicula eros aliquet. Aenean
              fringilla pellentesque rutrum. Mauris ullamcorper et diam et
              tempus. Sed aliquam euismod arcu et ultricies. Integer gravida
              augue in mi interdum, vel pellentesque sapien finibus. Phasellus
              iaculis mauris sit amet ultricies congue. In vitae congue sem.
              Donec fringilla elementum tellus, vel mattis massa. Vestibulum
              hendrerit turpis quis eros dapibus maximus. Donec tortor magna,
              accumsan ut enim a, accumsan tempus massa. Pellentesque eros
              risus, vestibulum sit amet arcu eget, mollis maximus ipsum.
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Services;
