import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./StadiaMaps"), {
  ssr: false,
});

const Map = () => {
  return (
    <>
      <DynamicMap />
    </>
  );
};

export default Map;
