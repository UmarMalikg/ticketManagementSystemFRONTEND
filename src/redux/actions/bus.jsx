import axios from "axios";
import { api } from "../../common/api";

import {
  ADD_NEW_BUS_REQUEST,
  ADD_NEW_BUS_SUCCESS,
  ADD_NEW_BUS_FAILURE,
  DELETE_BUS_REQUEST,
  DELETE_BUS_SUCCESS,
  DELETE_BUS_FAILURE,
  EDIT_BUS_REQUEST,
  EDIT_BUS_SUCCESS,
  EDIT_BUS_FAILURE,
  GET_BUSSES_REQUEST,
  GET_BUSSES_REQUEST_SUCCESS,
  GET_BUSSES_REQUEST_FAILURE,
  TOTAL_BUSSES_REQUEST,
  TOTAL_BUSSES_REQUEST_SUCCESS,
  TOTAL_BUSSES_REQUEST_FAILURE,
} from "../constants/bus";

// Action creators for adding a new bus
export const addNewBusRequest = () => ({ type: ADD_NEW_BUS_REQUEST });
export const addNewBusSuccess = (bus) => ({
  type: ADD_NEW_BUS_SUCCESS,
  payload: bus,
});
export const addNewBusFailure = (error) => ({
  type: ADD_NEW_BUS_FAILURE,
  payload: error,
});

// Action creators for deleting a bus
export const deleteBusRequest = (id) => ({
  type: DELETE_BUS_REQUEST,
  payload: id,
});
export const deleteBusSuccess = (id) => ({
  type: DELETE_BUS_SUCCESS,
  payload: id,
});
export const deleteBusFailure = (error) => ({
  type: DELETE_BUS_FAILURE,
  payload: error,
});

// Action creators for editing a bus
export const editBusRequest = (bus) => ({
  type: EDIT_BUS_REQUEST,
  payload: bus,
});
export const editBusSuccess = (bus) => ({
  type: EDIT_BUS_SUCCESS,
  payload: bus,
});
export const editBusFailure = (error) => ({
  type: EDIT_BUS_FAILURE,
  payload: error,
});

// Action creators for getting buses
export const getBussesRequest = () => ({ type: GET_BUSSES_REQUEST });
export const getBussesSuccess = (busses) => ({
  type: GET_BUSSES_REQUEST_SUCCESS,
  payload: busses,
});
export const getBussesFailure = (error) => ({
  type: GET_BUSSES_REQUEST_FAILURE,
  payload: error,
});

// Action creators for getting total buses
export const totalBussesRequest = () => ({ type: TOTAL_BUSSES_REQUEST });
export const totalBussesSuccess = (total) => ({
  type: TOTAL_BUSSES_REQUEST_SUCCESS,
  payload: total,
});
export const totalBussesFailure = (error) => ({
  type: TOTAL_BUSSES_REQUEST_FAILURE,
  payload: error,
});

// Async action creator for getting total buses
export const getTotalBusses = () => {
  return async (dispatch) => {
    dispatch(totalBussesRequest());
    try {
      const response = await axios.get(`${api}/bus/total`);
      dispatch(totalBussesSuccess(response.data));
    } catch (err) {
      dispatch(totalBussesFailure(err.message));
    }
  };
};
