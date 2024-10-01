import React from "react";
import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_03 from "../assets/images/icons/search-yellow.png";
import servicIcon_04 from "../assets/images/icons/marketing.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing-white.png";
import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";
export default function Services() {
  return (
    <div className="services-area section-ptb bgs" id="services">
      <div className="container">
        <SectionTitle
          title="What I Do"
          subTitle="And My Greatest Strenghts"
          desc="I am a Front End Developer with a witg great passion for design and development. I have a great eye for detail and I am always looking for new challenges."
        />
      </div>
      <div className="container">
        <div className="row service-row mt-45">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_01} alt="design" />
                <img className="d-none" src={servicIcon_02} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">UI/UX Design</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_05} alt="design" />
                <img className="d-none" src={servicIcon_02} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Web Development</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_03} alt="design" />
                <img className="d-none" src={servicIcon_03} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">User Research</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_06} alt="design" />
                <img className="d-none" src={servicIcon_04} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Testing</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-area mt-45">
        <div className="container">
          <div className="row">
            <SingleCountdown
              extraClass="mb-4 mb-md-0"
              title="Program at KYH started 2023"
              start={2015}
              end={2023}
              duration={5}
            />
            <SingleCountdown
              extraClass="mb-4 mb-md-0"
              title="Amount of years of work experience"
              start={0}
              end={5}
              duration={3}
            />
            <SingleCountdown
              extraClass="mb-4 mb-md-0"
              title="Github Contributions last year"
              start={40}
              end={240}
              duration={10}
            />
            <SingleCountdown
              title="Completed Projects"
              start={0}
              end={7}
              duration={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
