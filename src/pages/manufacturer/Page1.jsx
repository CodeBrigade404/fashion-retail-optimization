import React from "react";
import LineChartBox from "../../components/manufacturer/ManufacturerCards";
import { chartBoxProduct, chartBoxUser } from "./data/data";

function Page1() {
  const boxStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
  };
  return (
    <div className="h-screen text-sm  " id="page1">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "minmax(180px, auto)",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div className="box2" style={boxStyle}>
          <LineChartBox {...chartBoxUser} />
        </div>
        <div className="box3" style={boxStyle}>
          <LineChartBox {...chartBoxProduct} />
        </div>
        <div className="box2" style={boxStyle}>
          <LineChartBox {...chartBoxUser} />
        </div>
        <div className="box3" style={boxStyle}>
          <LineChartBox {...chartBoxProduct} />
        </div>
      </div>
    </div>
  );
}

export default Page1;
