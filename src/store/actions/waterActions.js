import { DRINK_WATER, RESET_WATER } from "../types";

export const drinkWater = (liters) => {
  return {
    type: DRINK_WATER,
    payload: liters,
  };
};

export const resetWater = () => {
  return {
    type: RESET_WATER,
  };
};
