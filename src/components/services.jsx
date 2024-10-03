import React from "react";
import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_03 from "../assets/images/icons/search-yellow.svg";
import servicIcon_04 from "../assets/images/icons/marketing-white.svg";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing.svg";
import servicIcon_07 from "../assets/images/icons/search.svg";
import servicIcon_08 from "../assets/images/icons/pen.svg";
import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";

export default function Services() {
  return (
    <div className="services-area section-ptb bgs" id="services">
      <div className="container">
        <SectionTitle
          subTitle="What I Do"
          desc="I am a Front End Developer with a with great passion for design and development. I have a great eye for detail and I am always looking for new challenges."
        />
      </div>
      <div className="container">
        <div className="row justify-content-center service-row mt-45">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 pt-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_01} alt="design" />
                <img className="d-none" src={servicIcon_01} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">UI/UX Design</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 pt-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_05} alt="design" />
                <img className="d-none" src={servicIcon_05} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Web Development</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <SectionTitle
          subTitle="My greatest strengths"
          desc="As a person with a strong background in different settings of healthcare and medicine I developed great people skills as I in multiple jobs had leadership roles, I learned to take great responsibility, be humble, understanding and solve problems in a way that works for the team."
        />
        <div className="row justify-content-center service-row mt-45">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 py-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_03} alt="design" />
                <img className="d-none" src={servicIcon_03} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Communication</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 py-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_06} alt="design" />
                <img className="d-none" src={servicIcon_04} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">Leadership</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <SectionTitle
          title="Programming specialities"
          subTitle="Languages and frameworks"
          desc="I write code in javascript/typescript and use React or Next.js for frontend development. For backend I use Node.js and Express. I have experience with MongoDB Firebase. Have experience with third party libraries like Bootstrap and Tailwind for styling, and axios for API calls, but below you can see my prefered tools."
        />
      </div>
      <div className="container">
        <div className="row service-row mt-45">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 pt-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_07} alt="design" />
                <img className="d-none" src={servicIcon_07} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">JavaScript/TypeScript</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 pt-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_02} alt="design" />
                <img className="d-none" src={servicIcon_02} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">ReactJS</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 pt-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_04} alt="design" />
                <img className="d-none" src={servicIcon_04} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">NextJS</h4>
                <p>My preferance for fullstack applications</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 pt-4">
            <div className="project-card text-center bgp">
              <div className="icon mb-20">
                <img src={servicIcon_08} alt="design" />
                <img className="d-none" src={servicIcon_08} alt="design" />
              </div>
              <div className="skill-project">
                <h4 className="mb-3">TailwindCSS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counter-area mt-45">
        <div className="container">
          <div className="row">
            <SingleCountdown
              extraClass="mb-4 mb-md-0 pt-4"
              title="Amount of years working"
              start={1}
              end={5}
              duration={5}
            />
            <SingleCountdown
              extraClass="mb-4 mb-md-0 pt-4"
              title="Amount of years of programming experience"
              start={0}
              end={1}
              duration={2}
            />
            <SingleCountdown
              extraClass="mb-4 mb-md-0 pt-4"
              title="Github Contributions last year"
              start={40}
              end={240}
              duration={10}
            />
            <SingleCountdown
              extraClass="pt-4"
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
