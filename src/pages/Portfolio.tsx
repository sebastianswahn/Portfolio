"use client";

import { useState, useEffect } from "react";
import * as React from "react";

import EventCarousel from "@/components/EventCarousel";

export default function CarouselDemo() {
  useEffect(() => {
    fetch("http://localhost:3001/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex flex-col text-center w-screen h-screen">
      <div className="flex items-start justify-start mt-4 ml-4 gap-4 pb-8 w-full"></div>

      <div className="flex justify-center h-full">
        <EventCarousel threads={threads} />
      </div>
    </div>
  );
}
