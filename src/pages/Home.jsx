import React from "react";
import { Header } from "../Components/header";
import Footer from "../Components/footer";
import Carousel from "../Components/carousel";
import Services from "../Components/services";
import Portfolios from "../Components/portfolios";

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
