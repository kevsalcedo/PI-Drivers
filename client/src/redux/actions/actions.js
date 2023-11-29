import axios from "axios";
import { GET_DRIVER, GET_DRIVERS, FILTER, ORDER } from "./actions-typer";

export const getDrivers = () => {
  return async (dispatch) => {
    let drivers = [];

    let response = (await axios.get("http://localhost:3001/drivers")).data;

    drivers.push(response);

    const finalResult = [].concat.apply([], drivers);

    dispatch({ type: GET_DRIVERS, payload: finalResult });
  };
};

export const getDriver = (id) => {
  return async (dispatch) => {
    let response = (await axios.get(`http://localhost:3001/drivers/${id}`))
      .data;

    dispatch({ type: GET_DRIVER, payload: response });
  };
};

export const filterCards = (team) => {
  return { type: FILTER, payload: team };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
