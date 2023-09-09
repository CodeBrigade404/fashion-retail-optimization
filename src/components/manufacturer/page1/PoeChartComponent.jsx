import React from "react";
import PieChartCom from "./PiechartCom";

function PoeChartComponent() {
  return (
    <div className="bg-white flex flex-col w-4/12 h-96  my-2 ml-[20px] drop-shadow-md  rounded-lg">
      <h2 className="font-tinos ml-5  mt-4 text-left text-xl">
        Manufacturer Contribution
      </h2>
      <div className=" h-full">
        <PieChartCom />
      </div>
    </div>
  );
}

export default PoeChartComponent;
