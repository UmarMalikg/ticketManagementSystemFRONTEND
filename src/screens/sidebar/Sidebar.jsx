import React from "react";
import "./style.scss";
import SideBarLink from "./components/SideBarLink";
import {
  faBuilding,
  faHouse,
  faBus,
  faUser,
  faRoute,
  faCreditCard,
  faTaxi,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideBarLink text={"Dashboard"} icon={faHouse} link={"/"} />
      <SideBarLink text={"Companies"} icon={faBuilding} link={"/companies"} />
      <SideBarLink text={"Busses"} icon={faBus} />
      <SideBarLink text={"Users"} icon={faUser} />
      <SideBarLink text={"Services"} icon={faTaxi} />
      <SideBarLink text={"Routes"} icon={faRoute} link={"/routes"} />
      <SideBarLink text={"Payments"} icon={faCreditCard} />
      <div className="setting-signout-buttons">
        <SideBarLink text={"Settings"} icon={faGear} />
        <SideBarLink text={"Signout"} icon={faPowerOff} />
      </div>
    </div>
  );
};

export default Sidebar;
