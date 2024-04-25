"use client";
import { NextComponentType } from "next";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapLibreTileLayer } from "./MapLibreTitleLayer";

const StadiaMaps: NextComponentType = () => {
  return (
    <MapContainer
      className="h-screen w-full"
      center={[-23.6828, -46.5956]}
      zoom={6}
      minZoom={3}
      maxZoom={19}
      scrollWheelZoom={true}
    >
      <MapLibreTileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/styles/outdoors.json"
      />
    </MapContainer>
  );
};

export default StadiaMaps;
