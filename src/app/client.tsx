"use client";

import { useBuildings } from "@/application/building/buildingHook";
import { NextComponentType } from "next";
import { Loader } from "./components/Loader";
import { ImageCard } from "./components/ImageCard";

export const HomeClient: NextComponentType = () => {
  const { buildings, isLoading } = useBuildings();

  return (
    <div className="h-full w-full flex justify-center items-center">
      {/* <Mapbox /> */}
      {/* <Map /> */}
      <Loader loading={isLoading}>
        <div className="flex w-full flex-row flex-wrap gap-3 ">
          {buildings?.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[49%] md:w-full lg:w-[48%] xl:w-[32%]"
            >
              <ImageCard
                title={item.name}
                subtitle={item.developer.name}
                alt={`Empreendimento - ${item?.name}`}
                width={520}
                height={280}
                src={item.default_image["520x280"]}
              />
            </div>
          ))}
        </div>
      </Loader>
    </div>
  );
};
