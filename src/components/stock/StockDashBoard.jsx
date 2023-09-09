import {
  stockForUnisexQuantity,
  stockForMensTotalQuantity,
  stockForWomenTotalQuantity,
  stockForBabyTotalQuantity,
  menClothingData,
  womenClothingData,
} from "../../pages/stock/data/data";
import StockAnalyzedCard from "./stocksChartItems/StockCards";
import StockChart from "./stocksChartItems/StockPredictionListChat";
import StockTrend from "./stocksChartItems/StockTrend";

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
          <StockAnalyzedCard {...stockForUnisexQuantity} />
        </div>
        <div className="box3" style={boxStyle}>
          <StockAnalyzedCard {...stockForMensTotalQuantity} />
        </div>
        <div className="box2" style={boxStyle}>
          <StockAnalyzedCard {...stockForWomenTotalQuantity} />
        </div>
        <div className="box3" style={boxStyle}>
          <StockAnalyzedCard {...stockForBabyTotalQuantity} />
        </div>
        <div
          className="box3"
          style={{ ...boxStyle, gridColumn: "span 2", gridRow: "span 2" }}
        >
          <StockChart />
        </div>
        <div
          className="box3"
          style={{ ...boxStyle, gridColumn: "span 1", gridRow: "span 2" }}
        >
          <StockTrend data={menClothingData} />
        </div>
        <div
          className="box3"
          style={{ ...boxStyle, gridColumn: "span 1", gridRow: "span 2" }}
        >
          <StockTrend data={womenClothingData} />
        </div>
      </div>
    </div>
  );
}

export default StockDashBoard;
