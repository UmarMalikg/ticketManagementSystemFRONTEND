import React from "react";
import { Link } from "react-router-dom";

const SingleRouteDetail = ({
  routeID,
  startLocation,
  endLocation,
  routeInfo,
  busInfo,
  link,
}) => {
  return (
    <div className="single-route-details">
      <div className="single-route-detail-box">
        <h4 className="route-name">
          Route {routeID}:{startLocation} to {endLocation}
        </h4>
        <p className="rote-info">{routeInfo}</p>
        <p className="route-bus-info">{busInfo}</p>
      </div>
      <div className="single-route-open-detail-box">
        <Link to={link}>
          <button type="button" className="check-route">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleRouteDetail;
