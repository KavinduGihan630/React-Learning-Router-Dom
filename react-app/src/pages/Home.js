import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <div>
      <h1>{location.state}</h1>
      <h1>Home</h1>
    </div>
  );
}
