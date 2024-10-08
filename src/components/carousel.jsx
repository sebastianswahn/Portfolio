import React from "react";
import Slider from "react-slick";
import "../assets/css/slick.min.css";
import sliderImg01 from "../assets/images/slider/myphoto.png";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltDown,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Carousel() {
  return (
    <div className="container">
      <div className="slider-area">
        <div className="slider-activator">
          {/*           <Slider {...settings}> */}
          <div className="slide-item">
            <div className="container pt-130 pl-xl-0 px-0">
              <div className="row m-0">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                  <div className="slider-left">
                    <div className="name">
                      <h1 className="h1">
                        Sebastian <br /> Swahn<span className="pc">.</span>
                      </h1>
                    </div>
                    <div className="dash"></div>
                    <div className="social-links mb-40">
                      <a href="https://github.com/sebastianswahn">GitHub</a>
                      <br />
                      <a href="https://linkedin.com/in/sebastian-swahn-31273a298">
                        LinkedIn
                      </a>
                      <br />
                    </div>
                    <div className="slider-cta">
                      <a
                        href="/resume.pdf"
                        className="ct-btn"
                        activeClass="active"
                        download
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                  <div className="profile-pic">
                    <img className="img-fluid" src={sliderImg01} />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                  <div className="into-area">
                    <div className="section-title">
                      <h3 className="section-name pc">INTRODUCTION</h3>
                      <h2>
                        Front End Developer,
                        <br />
                        UX/UI Designer <br />
                      </h2>
                      <p className="pr-20">
                        Hey there! I'm Sebastian, a student living in Stockholm,
                        soon to become Front End Developer. Our class at KYH has
                        our internship period (LIA) coming up soon and I am more
                        than excited to get out in the industry.
                      </p>
                    </div>
                    <div className="intro-button">
                      <Link
                        to="services"
                        className="btn-animation mr-btn"
                        smooth={true}
                        duration={2000}
                        activeClass="active"
                        spy={false}
                        offset={5}
                      >
                        {" "}
                        Learn more &nbsp;{" "}
                        <i>
                          <FaLongArrowAltDown />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
