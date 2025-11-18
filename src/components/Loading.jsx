import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center min-h-[90vh] items-center">
      <ScaleLoader
        height={45}
        margin={3}
        radius={2}
        width={5}
      />
    </div>
  );
};

export default Loading;
