import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../../common/components/Title";
import SingleBusOnRoute from "./components/SingleBusOnRoute";
import { useAppContext } from "../../common/State";

const BussesOnRoute = () => {
  const { routeId } = useParams();
  const {
    bussesesOnARoute,
    fetchBusesOnRoute,
    fetchRouteById,
    route,
    fetchServiceById,
    service,
  } = useAppContext();

  // Fetch route and buses data
  useEffect(() => {
    if (routeId) {
      const fetchData = async () => {
        try {
          await fetchRouteById(routeId);
          await fetchBusesOnRoute(routeId);
        } catch (error) {
          console.error("Error fetching route or buses data:", error);
        }
      };

      fetchData();
    }
  }, [routeId, fetchRouteById, fetchBusesOnRoute]);

  // Fetch service data for each bus
  useEffect(() => {
    const fetchServiceData = async () => {
      const buses = bussesesOnARoute[routeId] || [];
      const serviceIds = new Set(buses.map((bus) => bus.serviceId));
      for (const id of serviceIds) {
        if (!service[id]) {
          await fetchServiceById(id);
        }
      }
    };

    if (routeId) {
      fetchServiceData();
    }
  }, [routeId, bussesesOnARoute, service, fetchServiceById]);

  return (
    <div className="busses-on-route screen">
      <Title title={"Busses on Route"} />
      <div className="all-busses-on-route">
        {bussesesOnARoute[routeId]?.length ? (
          bussesesOnARoute[routeId].map((b) => (
            <SingleBusOnRoute
              key={b.busId}
              busId={b.busId}
              startLocation={route?.[routeId]?.startLocation}
              endLocation={route?.[routeId]?.endLocation}
              serviceName={service[b?.serviceId]?.name || b.serviceId}
            />
          ))
        ) : (
          <p>No buses available for this route.</p>
        )}
      </div>
    </div>
  );
};

export default BussesOnRoute;
