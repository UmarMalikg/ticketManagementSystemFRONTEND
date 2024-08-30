import React from "react";

const SingleBusOnRoute = ({
  busId,
  startLocation,
  endLocation,
  serviceName,
}) => {
  return (
    <div className="single-bus-on-route">
      <div className="image-box">
        <img src="bus.png" />
      </div>
      <div className="bus-info">
        <h4 className="bus-name">Bus #{busId}</h4>
        <p>
          Route: {startLocation} to {endLocation}
        </p>
        <p>By {serviceName}</p>
      </div>
    </div>
  );
};

export default SingleBusOnRoute;
