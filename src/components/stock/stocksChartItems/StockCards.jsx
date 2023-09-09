import PropTypes from "prop-types";
import { Tooltip, ResponsiveContainer, LineChart, Line, XAxis } from "recharts";

function StockAnalyzedCard(props) {
  return (
    <div className="chartBox flex h-full">
      <div
        className="boxInfo pl-1 flex flex-col justify-between"
        style={{ flex: "3" }}
      >
        <div className="title flex items-center gap-[10px]">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path
              fill="black"
              d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z"
            />
          </svg>
          <span className="text-sm">{props.title}</span>
        </div>
        <h1 className="text-2xl font-bold">{props.number}</h1>
        <div className="texts flex flex-col text-left">
          <span
            className="percentage font-bold text-sm"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </span>
          <span className="duration text-sm">Availability</span>
        </div>
      </div>

      <div
        className="chartInfo  flex flex-col justify-between "
        style={{ flex: "2" }}
      >
        <div className="chart w-full h-full flex-1">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 20, y: 40 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={3}
                dot={false}
              />
              <XAxis dataKey="name" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

StockAnalyzedCard.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  chartData: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StockAnalyzedCard;
