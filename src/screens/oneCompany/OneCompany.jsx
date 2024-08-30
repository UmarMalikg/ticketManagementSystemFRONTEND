import React, { useEffect, useState } from "react";
import Title from "../../common/components/Title";
import { useParams } from "react-router-dom";
import OneCompanyStat from "./components/OneCompanyStat";
import { useAppContext } from "../../common/State";
import CompanyTicketsSold from "./components/CompanyTicketsSold";

const OneCompany = () => {
  const { serviceId } = useParams();
  const { revenueByOneCompany, getRevenueByACompany } = useAppContext();
  const [revenue, setRevenue] = useState(null);

  useEffect(() => {
    if (serviceId) {
      const fetchData = async () => {
        await getRevenueByACompany(serviceId); // Fetch the data
      };

      fetchData();
    }
  }, [serviceId, getRevenueByACompany]);

  useEffect(() => {
    if (serviceId) {
      setRevenue(revenueByOneCompany[serviceId]); // Update local state with fetched data
    }
  }, [revenueByOneCompany, serviceId]);
  return (
    <div className="one-company screen">
      <Title title={"Daewo"} />
      <div className="o-c-all-stats">
        <OneCompanyStat amount={revenue} name={"Total Revenue"} />
        <OneCompanyStat amount={revenue} name={"Total Tickets Sold"} />
        <OneCompanyStat amount={revenue} name={"Total Refund"} />
        <OneCompanyStat amount={revenue} name={"Total Revenue Last Month"} />
      </div>
      <input type="search" name="" />
      <CompanyTicketsSold />
    </div>
  );
};

export default OneCompany;
