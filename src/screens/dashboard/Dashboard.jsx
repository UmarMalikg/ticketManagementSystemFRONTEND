import React from "react";
import Title from "../../common/components/Title";
import DashboardStat from "./components/DashboardStats";
import "./style.scss";
import BusGraph from "./components/BusGraph";
import Chart from "./components/Chart";
import RevenueGraph from "./components/RevenueGraph";
import TopCompanies from "./components/TopCompanies";
import { useAppContext } from "../../common/State";

const Dashboard = () => {
  const { totalBusses, totalCompanies, totalRoutes, totalPayments } =
    useAppContext();
  return (
    <div className="dasboard screen">
      <Title title={"Admin Dashboard"} />
      <div className="status">
        <DashboardStat name={"Busses"} amount={totalBusses} status={2.5} />
        <DashboardStat name={"Companies"} amount={totalCompanies} status={3} />
        <DashboardStat name={"Routes"} amount={totalRoutes} status={1} />
        <DashboardStat name={"Revenue"} amount={totalPayments} status={3.7} />
      </div>
      <div className="graphs">
        <Chart name={"Busses"} amount={totalBusses} chart={<BusGraph />} />
        <Chart
          name={"Revenue"}
          amount={totalPayments}
          chart={<RevenueGraph />}
        />
      </div>
      <TopCompanies />
    </div>
  );
};

export default Dashboard;
