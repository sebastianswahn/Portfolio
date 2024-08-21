import React from "react";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div
        className="absolute z-auto w-28 h-28 rounded-full bg-emerald-500 align-middle text-center"
        style={{ top: "30%", left: "5%", transform: "translate(-50%, -50%)" }}
      >
        Meny
      </div>
      <div
        className="absolute z-auto w-72 h-72 rounded-full bg-purple-100 align-middle text-center"
        style={{ top: "20%", left: "75%", transform: "translate(-50%, -50%)" }}
      >
        bild
      </div>
      <div className="w-screen h-60 bg-white"></div>
      <div className="h-5/6 bg-slate-300"></div>
    </div>
  );
}

export default Home;
