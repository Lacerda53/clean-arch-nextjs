import { FunctionComponent } from "react";
import { LoaderProps } from "./types";

export const Loader: FunctionComponent<LoaderProps> = ({
  loading = false,
  minHeight = "min-h-screen",
  minWidth = "min-w-screen",
  width = "w-3",
  height = "h-3",
  padding = "p-5",
  children,
}) => {
  if (!loading) {
    return <>{children}</>;
  }

  const circleClassName = `${width} ${height} bg-black rounded-full`;

  return (
    <div
      className={`flex items-center justify-center ${minWidth} ${padding} ${minHeight}`}
    >
      <div className="flex space-x-2 animate-pulse">
        <div className={circleClassName} />
        <div className={circleClassName} />
        <div className={circleClassName} />
      </div>
    </div>
  );
};
