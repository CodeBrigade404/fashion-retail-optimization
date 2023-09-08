import { chartBoxProduct, chartBoxUser } from "../../pages/stock/data/data";
import LineChartBox from "./stocksChartItems/StockCards";
import StockChart from "./stocksChartItems/StockPredictionListChat";
import StockTrend from "./stocksChartItems/StockTrend"

function StockDashBoard() {
  const boxStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
  };

  return (
    <div>
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
        <div
          className="box3"
          style={{ ...boxStyle, gridColumn: "span 2", gridRow: "span 2" }}
        >
          <StockChart />
        </div>
        <div
          className="box3"
          style={{ ...boxStyle, gridColumn: "span 2", gridRow: "span 2" }}
        >
          <StockTrend />
        </div>
      </div>
    </div>
  );
}

export default StockDashBoard;
