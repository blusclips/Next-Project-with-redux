import { Toggle } from "../types";

const initialState = {
    toggle: true
};

export default (state = initialState, action) => {
    switch (action.type) {
      case Toggle:
          return {
              ...state,
              toggle: action.payload
          }
      default:
        return state;
    }
};