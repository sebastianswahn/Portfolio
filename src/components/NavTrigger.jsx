import React from "react";

function NavTrigger() {
  return (
    <div>
      {" "}
      <div
        className="absolute z-auto w-20 h-20 rounded-full bg-emerald-500 align-middle text-center"
        style={{ top: "3%", left: "1%", transform: "translate(-50%, -50%)" }}
      >
        <svg
          className="w-10 h-10 m-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavTrigger;
