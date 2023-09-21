import PropTypes from "prop-types";
import { useContext, useReducer } from "react";
import { createContext } from "react";

const CountContext = createContext();

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const CountProvider = ({ children, ...props }) => {
  // const [count, setCount] = useState(0);

  // const value = { count, setCount };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value} {...props}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);
  if (typeof context === "undefined") {
    throw new Error("useCount must be used within CountProvider");
  }
  return context;
};

CountProvider.propTypes = {
  props: PropTypes.object,
  children: PropTypes.object,
};

export { CountProvider, useCount };
