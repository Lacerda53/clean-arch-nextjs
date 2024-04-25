"use client";
import { NextComponentType } from "next";
import { Map } from "react-map-gl";

const Mapbox: NextComponentType = () => {
  return (
    <Map
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapLib={import("mapbox-gl")}
      style={{
        width: "100%",
        height: "100vh",
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    />
  );
};

export default Mapbox;
