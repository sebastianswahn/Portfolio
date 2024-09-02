import React from "react";
import portfolioimage from "../portfolioimage/IMG_5295.jpeg";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div
        className="absolute z-auto w-72 h-72 rounded-full bg-purple-100 align-middle text-center"
        style={{ top: "20%", left: "75%", transform: "translate(-50%, -50%)" }}
      >
        {" "}
        <img
          className="object-cover w-full h-full rounded-full"
          src={portfolioimage}
        ></img>
      </div>
      <div className="w-screen h-60 bg-white"></div>
      <div className="h-5/6 bg-slate-300">
        <div
          className="w-10/12 fixed"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-3xl font-extrabold mb-12">
            Welcome to My Portfolio{" "}
          </h1>
          <p className="text-xl font-normal">
            Hi, I'm Sebastian, a passionate programming student with a deep love
            for coding and problem-solving. As I navigate through the exciting
            world of software development, I'm constantly honing my skills in
            various programming languages and technologies. This portfolio
            showcases my journey, projects, and the skills I've acquired along
            the way. Whether it's building web applications, exploring data
            structures, or diving into the intricacies of algorithms, I'm always
            eager to learn and take on new challenges. Feel free to explore my
            projects, check out my resume, and get in touch if you'd like to
            collaborate or learn more about my work. Let's build something great
            together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
