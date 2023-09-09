import React from "react";
import BarChartCom from "./BarChartCom";

function BarChartComponent() {
  return (
    <div className="bg-white w-[49.5rem] my-2 ml-8 drop-shadow-md rounded-lg h-96">
      <h2 className="text-left text-xl font-tinos ml-5  mt-4 ">
        Top Performing Manufacturers
      </h2>
      <div className="w-[45rem] mt-4 ml-9 h-80">
        <BarChartCom />
      </div>
    </div>
  );
}

export default BarChartComponent;
