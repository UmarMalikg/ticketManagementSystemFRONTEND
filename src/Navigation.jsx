import React from "react";
import Sidebar from "./screens/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import AllRoutes from "./screens/routes/AllRoute";
import { useAppContext } from "./common/State";
import Loader from "./common/Loader";
import Error from "./common/Error";
import BussesOnRoute from "./screens/bussesOnRoute/BussesOnRoute";
import Companies from "./screens/companies/Companies";
import OneCompany from "./screens/oneCompany/OneCompany";

function Navigation() {
  const { loading, error } = useAppContext();
  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/routes" element={<AllRoutes />} />
        <Route
          path="/routes/:routeId/bussesOnRoute"
          element={<BussesOnRoute />}
        />
        <Route path="/companies" element={<Companies />} />
        <Route
          path="/companies/:serviceId/revenueOfCompany"
          element={<OneCompany />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
