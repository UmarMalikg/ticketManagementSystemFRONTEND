import React, { useEffect } from "react";
import Title from "../../common/components/Title";
import TotalRevenue from "./components/TotalRevenue";
import OneCompanyRevenue from "./components/OneCompanyRevenue";
import { useAppContext } from "../../common/State";

const Companies = () => {
  const {
    totalPayments,
    allCompanies,
    revenueByOneCompany,
    getRevenueByACompany,
  } = useAppContext();

  useEffect(() => {
    allCompanies?.forEach((c) => {
      if (!revenueByOneCompany[c._id]) {
        getRevenueByACompany(c._id); // Fetch buses for each route if not already fetched
      }
    });
  }, [allCompanies, revenueByOneCompany, getRevenueByACompany]);
  return (
    <div className="companies screen">
      <Title title={"Revenue"} />
      <TotalRevenue amount={`${totalPayments}`} percentage={10} />
      <h3 className="by-companies">By companies</h3>
      {allCompanies?.map((c) => (
        <OneCompanyRevenue
          key={c._id}
          serviceName={c?.name}
          revenue={`${revenueByOneCompany[c._id]}`}
          link={`/companies/${c._id}/revenueOfCompany`}
        />
      ))}
    </div>
  );
};

export default Companies;
