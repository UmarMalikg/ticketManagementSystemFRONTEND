import React, { useEffect } from "react";
import Title from "../../common/components/Title";
import SingleRouteDetail from "./components/SingleRouteDetail";
import { useAppContext } from "../../common/State";
import "./style.scss";

const AllRoutes = () => {
  const { allRoutes, bussesesOnARoute, fetchBusesOnRoute } = useAppContext();

  useEffect(() => {
    allRoutes?.forEach((route) => {
      if (!bussesesOnARoute[route._id]) {
        fetchBusesOnRoute(route._id); // Fetch buses for each route if not already fetched
      }
    });
  }, [allRoutes, bussesesOnARoute, fetchBusesOnRoute]);

  return (
    <div className="route screen">
      <div className="title-with-add-button">
        <Title title={"Routes"} />
        <button type="button" className="btn add-button">
          New route
        </button>
      </div>
      <div className="route-details">
        <h2 className="routes-details-title">All Routes</h2>
        {allRoutes?.map((r) => (
          <SingleRouteDetail
            key={r?._id}
            routeID={r?.routeId}
            startLocation={r?.startLocation}
            endLocation={r?.endLocation}
            routeInfo={`${r.startLocation} to ${r.endLocation}`}
            busInfo={`No of busses: ${bussesesOnARoute[r?._id]?.length || 0} `}
            link={`/routes/${r._id}/bussesOnRoute`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllRoutes;
