import React from "react";
import Head from "../../components/demand/Head";
import DashBoard from "../../components/demand/DashBoard";
import DemandProductTable from "../../components/demand/DemandProductTable";
import ProgressBar from "../../components/demand/table/ProgressBar";
import DemandReport from "../../components/demand/DemandReport";

function Demand() {
  return (
    <div className="demand overflow-hidden  ">
      <div
        className="upBox flex justify-between pb-9 mt-11 mb-4 items-center gap-8 border-b-4 "
        style={{ borderColor: "#E3E3E3" }}
      >
        <Head />
      </div>
      <div className="downBox ">
        <DashBoard />
        <DemandProductTable />
        <DemandReport />
      </div>
    </div>
  );
}

export default Demand;
