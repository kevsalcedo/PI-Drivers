//action-types:
import { GET_DRIVERS } from "../actions/actions-typer";

//initial state
let initialState = {
  drivers: [],
};

//function reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return { ...state, drivers: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
