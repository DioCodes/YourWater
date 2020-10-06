import { DRINK_WATER, RESET_WATER } from "../types";

const INITIAL_STATE = {
  waterLevel: 0,
};

export const waterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRINK_WATER:
      return {
        ...state,
        waterLevel: waterLevel + action.payload,
      };
    case RESET_WATER:
      return {
        ...state,
        waterLevel: INITIAL_STATE.waterLevel,
      };
    default:
      return state;
  }
};
