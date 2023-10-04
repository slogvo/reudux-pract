import { TOGGLE_BUTTON } from "./type";

const initialState = {
  toggle: false,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};
export default toggleReducer;
