import Separator from "./Separator";
import { useState } from "react";

import "./styling/Service.css";

import { ReactComponent as CodeIcon } from "./images/icons/code_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as DesignIcon } from "./images/icons/draw_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as PlanIcon } from "./images/icons/architecture_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as LaunchIcon } from "./images/icons/rocket_launch_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as CheckIcon } from "./images/icons/check_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import SpaceBackground from "./SpaceBackground";
import Footer from "./Footer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Services() {
  return (
    <div id="service-container">
      <SpaceBackground colorChoice={3} />
      <div className="service-hero">
        <p className="service-hero-text">
          We have curated special services that we are experts at, as well as
          chosen what services are needed to not only survive, but thrive in
          this digitally dominated world
        </p>
      </div>
      <h1 className="service-title">Process: </h1>
      <Separator />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#700F32", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #700F32" }}
          date="Week 1"
          iconStyle={{ background: "#700F32", color: "#fff" }}
          icon={<PlanIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Deciding Your Story
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Syed Essam Uddin Khawaja</h4> */}
          <p>
            We help you decide what your brand story is going to be. Brand
            Storytelling is very important to get down so that your customers
            know exactly who they are buying from. After all, human trust is
            very important between a business and its customers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#cf376d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #cf376d" }}
          date="Week 2"
          iconStyle={{ background: "#cf376d", color: "#fff" }}
          icon={<DesignIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Working On Designs and Case Studies
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
            We showcase our original designs as well as show possible paths your
            brand could take as we devlop your online presence on various
            platforms.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#996fc0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #996fc0" }}
          date="Week 3"
          iconStyle={{ background: "#996fc0", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Beginning Development
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <p>
            As soon as we have finalised the design and direction of the brand,
            we begin working to make it come to life. Depending on the
            complexity and scale of the product, the development period could
            vary. We will bring our estimated length of project once we have
            finalised everything.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#53356f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #53356f" }}
          date="Week 4 - 5"
          iconStyle={{ background: "#53356f", color: "#fff" }}
          icon={<LaunchIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Launching your Brand!
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
            Your brand comes alive! We begin to start sending out ads to
            potential customers, using your new website as a new way to earn a
            reccurring relationship with your clients.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CheckIcon />}
        />
      </VerticalTimeline>
      <Separator />
      <Footer />
    </div>
  );
}

export default Services;
