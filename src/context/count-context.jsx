import PropTypes from "prop-types";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CountContext = createContext();

const CountProvider = ({ children, ...props }) => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
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
