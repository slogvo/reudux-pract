const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementByValue";

const initalState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});

function counterReducer(state = initalState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return { count: state.count - 1 };

    case INCREMENTBYVALUE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
