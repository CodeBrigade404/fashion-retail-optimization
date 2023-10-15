import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function StockTrend(props) {
  const labelStyle = {
    fontSize: "12px",
  };

  const generateReport = () => {
    const graphImage = document.getElementById("stockChartImage");
    html2canvas(graphImage, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imageWidth = 208;
      const imageHeight = (canvas.height * imageWidth) / canvas.width;
      const imageData = canvas.toDataURL("image/png"); // Corrected function name
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imageData, "PNG", 0, 0, imageWidth, imageHeight);
      pdf.save(`${props.title}.pdf`);
    });
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
      <span
        onClick={generateReport}
        className="font-tinos text-center mb-6 text-left text-md pl-20 pt-6"
      >
        Generate Report &#x1F4E5;
      </span>
    </div>
  );
}

StockTrend.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default StockTrend;
