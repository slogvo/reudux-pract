import { useEffect, useReducer, useRef } from "react";

const initialState = {
  count: 0,
};
const reducerCounter = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "increment by value":
      return { count: state.count + payload };
    default:
      state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
  const renderRef = useRef(0);

  useEffect(() => {
    console.log("ComponentDidMount");
    renderRef.current++;
    console.log("RenderRef value:" + renderRef.current);
    console.log("ComponentDidUpdate");
  });
  return (
    <div>
      <p>Counter: {state.count}</p>
      <div className="flex gap-x-5">
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[54px]"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[54px]"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-orange-500 rounded-lg h-[5
          px]"
          onClick={() => dispatch({ type: "increment by value", payload: 5 })}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
