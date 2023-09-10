import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Mens' Wear",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Swimming Wear",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Mens' Shoes",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Womens' Wear",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Traveling Wear",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Women's shoes",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function RadarChartCom() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarChartCom;
