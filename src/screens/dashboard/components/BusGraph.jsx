import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BusGraph = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["Bus1"] }]}
      series={[{ data: [3] }, { data: [3] }, { data: [2] }]}
      height={300}
    />
  );
};

export default BusGraph;
