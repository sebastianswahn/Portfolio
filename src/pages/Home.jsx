import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Services from "../components/services";
import Portfolios from "../components/portfolios";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Services />
      <Portfolios />
      <Footer />
    </div>
  );
}

export default Home;
