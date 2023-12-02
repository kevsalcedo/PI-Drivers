//action-types:
import {
  FILTER,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_TEAMS,
  SEARCH_DRIVER,
  RESET,
  CLEAN_DETAIL,
  ORDER,
} from "../actions/actions-typer";

//initial state
let initialState = {
  drivers: [],
  driver: {},
  allTeams: [],
  allDriversBackup: [],
  driversFiltered: [],
};

//function reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        allDriversBackup: action.payload,
      };
    case SEARCH_DRIVER:
      return {
        ...state,
        drivers: [...action.payload],
      };
    case GET_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };
    case ORDER:
      switch (action.payload) {
        case "none":
          const idOrder = [...state.drivers].sort((a, b) => a.id - b.id);
          return {
            ...state,
            drivers: idOrder,
          };
        case "ascendant":
          const ascendantOrder = [...state.drivers].sort((a, b) =>
            a.surname.localeCompare(b.surname)
          );
          return {
            ...state,
            drivers: ascendantOrder,
          };
        case "decendent":
          const decendentOrder = [...state.drivers].sort((a, b) =>
            b.surname.localeCompare(a.surname)
          );
          return {
            ...state,
            drivers: decendentOrder,
          };
        case "younger":
          const youngerOrder = [...state.drivers].sort(
            (a, b) => new Date(b.dob) - new Date(a.dob)
          );
          return {
            ...state,
            drivers: youngerOrder,
          };
        case "older":
          const olderOrder = [...state.drivers].sort(
            (a, b) => new Date(a.dob) - new Date(b.dob)
          );
          return {
            ...state,
            drivers: olderOrder,
          };
      }
    case FILTER:
      switch (action.payload) {
        case "allDrivers":
          return {
            ...state,
            drivers: state.allDriversBackup,
          };
        case "bdd":
          return {
            ...state,
            drivers: state.allDriversBackup.filter((driver) => driver.created),
          };
        case "api":
          return {
            ...state,
            drivers: state.allDriversBackup.filter((driver) => !driver.created),
          };
      }
      return {
        ...state,
        drivers: [...state.drivers].filter((driver) =>
          driver.allTeams.includes(action.payload)
        ),
      };
    case RESET:
      return {
        ...state,
        drivers: state.drivers,
      };
    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driver: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        driver: {},
      };
    default:
      return { ...state };
  }
};

export default reducer;
