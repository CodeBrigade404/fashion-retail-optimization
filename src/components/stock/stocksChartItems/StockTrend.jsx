import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

function StockTrend(props) {
  const labelStyle = {
    fontSize: "12px",
  };

  return (
    <div className=" w-full font-tinos ">
      <h2 className="font-tinos text-center text-md">{props.title}</h2>
      <ResponsiveContainer width="100%" height={347}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" style={labelStyle} />
          <PolarRadiusAxis />
          <Radar
            name="Available Stock"
            dataKey="availableStock"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

StockTrend.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default StockTrend;
