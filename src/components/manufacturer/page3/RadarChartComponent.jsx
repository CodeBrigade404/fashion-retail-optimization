import React from "react";
import RadarChartCom from "./RadarChartCom";

function RadarChartComponent() {
  return (
    <div className="w-7/12 bg-white rounded-lg h-[80%] mr-10 ">
      <h2 className="font-tinos text-2xl mt-6 text-left ml-6">
        Manufacturer Distribution
      </h2>
      <div className="w-[85%] ml-8 h-[85%]">
        <RadarChartCom />
      </div>
    </div>
  );
}

export default RadarChartComponent;
