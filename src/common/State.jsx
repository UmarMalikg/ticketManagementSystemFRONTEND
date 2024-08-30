import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { api } from "./api"; // Ensure the correct path for your API

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalBusses, setTotalBusses] = useState(null);
  const [totalCompanies, setTotalCompanies] = useState(null);
  const [totalRoutes, setTotalRoutes] = useState(null);
  const [totalPayments, setTotalPayments] = useState(null);
  const [allCompanies, setAllCompanies] = useState(null);
  const [allRoutes, setAllRoutes] = useState(null);
  const [bussesesOnARoute, setBussesOnARoute] = useState({});
  const [route, setRoute] = useState({});
  const [service, setService] = useState({});
  const [revenueByOneCompany, SetRevenueByOneCompany] = useState({});

  //

  //   fetch total busses
  useEffect(() => {
    const fetchTotalBusses = async () => {
      try {
        const response = await axios.get(`${api}/bus/total`);
        setTotalBusses(response.data); // Adjust based on actual response format
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalBusses();
  }, []);

  //   fetch total companies
  useEffect(() => {
    const fetchTotalCompanies = async () => {
      try {
        const response = await axios.get(`${api}/service/total`);
        setTotalCompanies(response.data); // Adjust based on actual response format
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalCompanies();
  }, []);

  //   fetch total routes
  useEffect(() => {
    const fetchTotalCompanies = async () => {
      try {
        const response = await axios.get(`${api}/route/total`);
        setTotalRoutes(response.data); // Adjust based on actual response format
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalCompanies();
  }, []);

  //   fetch total companies
  useEffect(() => {
    const fetchTotalPayments = async () => {
      try {
        const response = await axios.get(`${api}/payment/total`);
        setTotalPayments(response.data); // Adjust based on actual response format
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalPayments();
  }, []);

  //get all comapnies
  useEffect(() => {
    const getAllCompanies = async () => {
      try {
        const response = await axios.get(`${api}/service`);
        setAllCompanies(response.data); // Adjust based on actual response format
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getAllCompanies();
  }, []);

  //get all routes
  useEffect(() => {
    const getAllRoutes = async () => {
      try {
        const response = await axios.get(`${api}/route`);
        setAllRoutes(response.data); // Adjust based on actual response format
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getAllRoutes();
  }, []);

  //get all busses on a route
  const fetchBusesOnRoute = async (routeId) => {
    try {
      const response = await axios.get(`${api}/route/${routeId}/bussesonroute`);
      setBussesOnARoute((prevState) => ({
        ...prevState,
        [routeId]: response.data, // Update state with buses for this specific route
      }));
    } catch (e) {
      setError(e.message);
    }
  };

  //get route by id
  const fetchRouteById = async (routeId) => {
    try {
      const response = await axios.get(`${api}/route/${routeId}`);
      setRoute((prev) => ({
        ...prev,
        [routeId]: response.data, // Update state with route data
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  //get service by id
  const fetchServiceById = async (serviceId) => {
    try {
      const response = await axios.get(`${api}/service/${serviceId}`);
      setService((prev) => ({
        ...prev,
        [serviceId]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching service:", error);
      setError(error.message);
    }
  };

  //revenue by a company
  const getRevenueByACompany = async (serviceId) => {
    try {
      const response = await axios.get(
        `${api}/service/${serviceId}/revenuebyacompany`
      );
      SetRevenueByOneCompany((prev) => ({
        ...prev,
        [serviceId]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching service:", error);
      setError(error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        totalBusses,
        totalCompanies,
        totalRoutes,
        totalPayments,
        allCompanies,
        allRoutes,
        bussesesOnARoute,
        fetchBusesOnRoute,
        fetchRouteById,
        route,
        fetchServiceById,
        service,
        setService,
        revenueByOneCompany,
        getRevenueByACompany,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
