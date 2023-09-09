import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  barChartBoxRevenue,
} from "../../pages/demand/data/data";
import PieChartBox from "./dashboard/PieChartBox";
import LineChartBox from "./dashboard/LineChartBox";
import TopBox from "./dashboard/TopBox";
import AgeBarChart from "./dashboard/AgeBarChart";
import ColorBarChart from "./dashboard/ColorbarChart";
import MenWomenChart from "./dashboard/MenWomenChart";

function DashBoard() {
  const boxStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
  };
  return (
    <div className="DemandDashboard">
      <div
        className="demandGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "minmax(180px, auto)",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          className="box1"
          style={{ ...boxStyle, gridColumn: "span 1", gridRow: "span 3" }}
        >
          <TopBox />
        </div>
        <div className="box2" style={boxStyle}>
          <LineChartBox {...chartBoxUser} />
        </div>
        <div className="box3" style={boxStyle}>
          <LineChartBox {...chartBoxProduct} />
        </div>
        <div
          className="box4"
          style={{ ...boxStyle, gridColumn: "span 1", gridRow: "span 3" }}
        >
          <PieChartBox />
        </div>
        <div className="box5" style={boxStyle}>
          <LineChartBox {...chartBoxRevenue} />
        </div>
        <div className="box6" style={boxStyle}>
          <LineChartBox {...chartBoxConversion} />
        </div>
        <div
          className="box7"
          style={{ ...boxStyle, gridColumn: "span 2", gridRow: "span 2" }}
        >
          <MenWomenChart />
        </div>
        <div className="box8" style={boxStyle}>
          <AgeBarChart />
        </div>
        <div className="box9" style={boxStyle}>
          <ColorBarChart {...barChartBoxRevenue} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
