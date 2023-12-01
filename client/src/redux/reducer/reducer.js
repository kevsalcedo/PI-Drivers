//action-types:
import {
  FILTER_BY_TEAM,
  GET_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_TEAMS,
  SEARCH_DRIVER,
  RESET,
  CLEAN_DETAIL
} from "../actions/actions-typer";

//initial state
let initialState = {
  drivers: [],
  driver: {},
  teams: [],
};

//function reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };
    case SEARCH_DRIVER:
      return {
        ...state,
        drivers: [...action.payload],
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case FILTER_BY_TEAM:
      return {
        ...state,
        drivers: [...state.drivers].filter((driver) =>
          driver.teams.includes(action.payload)
        ),
      };
    case RESET:
      return {
        ...state,
        drivers: state.drivers,
      }
    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driver: action.payload
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        driver: {}
      }
    default:
      return { ...state, teams: action.payload };
  }
};

export default reducer;
