import React, { useState, useEffect } from "react";
import { Col, Row, Nav, Tab } from "react-bootstrap";
import Masonry from "react-responsive-masonry";
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import portfolioImg_01 from "../assets/images/portfolio/1.jpeg";
import portfolioImg_02 from "../assets/images/portfolio/2.jpeg";
import portfolioImg_03 from "../assets/images/portfolio/3.jpeg";
import portfolioImg_04 from "../assets/images/portfolio/4.png";
import portfolioImg_05 from "../assets/images/portfolio/5.jpg";
import portfolioImg_06 from "../assets/images/portfolio/6.png";
import SectionTitle from "./section_title";

export default function Portfolios() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [portfolioColumns, setPortfolioColumns] = useState(3);

  const controlColumns = () => {
    setWindowWidth(window.innerWidth);

    if (windowWidth >= 992) {
      setPortfolioColumns(3);
    } else if (windowWidth <= 991 && windowWidth > 767) {
      setPortfolioColumns(3);
    }
    if (windowWidth <= 767) {
      setPortfolioColumns(1);
    }
  };

  window.addEventListener("resize", controlColumns);

  useEffect(() => {
    controlColumns();
  }, [windowWidth]);

  return (
    <>
      <div className="portfolio-area section-ptb-2" id="portfolio">
        <div className="container">
          <SectionTitle
            title="PORTFOLIO"
            subTitle="My Work Collection"
            desc="This is my work collection, mostly work from my education but also some private projects."
          />
          <Tab.Container defaultActiveKey="all">
            <Row>
              <div className="col-xl-8 col-lg-9 col-sm-12 mx-auto">
                <Nav className="pofo-cat pb-5 text-center justify-content-center">
                  <Nav.Item>
                    <Nav.Link eventKey="all">ALL</Nav.Link>
                  </Nav.Item>
                  <div className="pofo-line"></div>
                </Nav>
              </div>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="all">
                    <Masonry columnsCount={portfolioColumns}>
                      <SinglePortfolio
                        portfolioImg={portfolioImg_01}
                        title="Typescript Forum"
                      />
                      <SinglePortfolio
                        portfolioImg={portfolioImg_03}
                        title="Event Management System CMS"
                      />
                      <SinglePortfolio
                        portfolioImg={portfolioImg_04}
                        title="Webshop"
                      />
                      <SinglePortfolio
                        portfolioImg={portfolioImg_02}
                        title="NEWS patient assessment"
                      />
                      <SinglePortfolio
                        portfolioImg={portfolioImg_06}
                        title="Hardware program for plant monitoring"
                      />
                    </Masonry>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}
