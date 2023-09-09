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
  console.log(props.data);
  const labelStyle = {
    fontSize: "12px",
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
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
  );
}

StockTrend.propTypes = {
  data: PropTypes.array.isRequired,
};

export default StockTrend;
