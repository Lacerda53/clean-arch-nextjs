"use client";
import Image from "next/image";
import { ImageCardProps } from "./types";
import { useMemo, useState } from "react";

export const ImageCard = ({
  src,
  width,
  height,
  alt,
  title,
  subtitle,
}: ImageCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const gradient = useMemo(
    () => loaded && "bg-gradient-to-t from-black to-50% to-transparent",
    [loaded]
  );

  return (
    <div
      className={`relative w-full h-80 group overflow-hidden rounded-md ${
        !loaded && "animate-pulse bg-slate-400"
      }`}
    >
      <Image
        alt={alt}
        src={src}
        onLoad={() => setLoaded(true)}
        width={width}
        height={height}
        className="rounded-md object-cover w-full w-max-[580px] h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end text-white p-4 rounded-md ${gradient}`}
      >
        {title && (
          <figcaption className="text-lg font-semibold">{title}</figcaption>
        )}
        {subtitle && (
          <figcaption className="text-md font-light mt-1">
            {subtitle}
          </figcaption>
        )}
      </div>
    </div>
  );
};
