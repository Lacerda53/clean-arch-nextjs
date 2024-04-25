"use client";

import { useBuildings } from "@/application/building/buildingHook";
import { NextComponentType } from "next";

export const HomeClient: NextComponentType = () => {
  const { buildings, isLoading } = useBuildings();

  return (
    <div className="h-full flex justify-center items-center">
      {/* <Mapbox /> */}
      {/* <Map /> */}
      {isLoading && <div className="text-xl">Carregando...</div>}
      {buildings && JSON.stringify(buildings)}
    </div>
  );
};
