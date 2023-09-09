import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "January",
    mens: 1000,
    womens: 2080,
    babys: 1150,
  },
  {
    month: "February",
    mens: 1110,
    womens: 2190,
    babys: 1160,
  },
  {
    month: "March",
    mens: 1120,
    womens: 1700,
    babys: 1170,
  },
  {
    month: "April",
    mens: 2120,
    womens: 2700,
    babys: 2170,
  },
  {
    month: "May",
    mens: 1120,
    womens: 1100,
    babys: 1170,
  },
  {
    month: "June",
    mens: 1520,
    womens: 1100,
    babys: 1170,
  },
  {
    month: "July",
    mens: 1290,
    womens: 1100,
    babys: 1770,
  },
  {
    month: "August",
    mens: 1200,
    womens: 1100,
    babys: 1750,
  },
  {
    month: "September",
    mens: 1120,
    womens: 1100,
    babys: 1570,
  },
  {
    month: "October",
    mens: 1120,
    womens: 1100,
    babys: 1170,
  },
];

export default class StockChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="mens" name="Men's" stroke="#8884d8" />
          <Line
            type="monotone"
            dataKey="womens"
            name="Women's"
            stroke="#82ca9d"
          />
          <Line
            type="monotone"
            dataKey="babys"
            name="Baby's"
            stroke="#ff7300"
          />
          <Line
            type="monotone"
            dataKey="unisex"
            name="Unisex"
            stroke="#ff0000"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
