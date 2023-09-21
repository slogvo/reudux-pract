import PropTypes from "prop-types";
import { useCount } from "../context/count-context";

const CountWithContext = ({ className }) => {
  // const { count, setCount } = useCount();
  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount((count) => count - 1);
  // };
  const { state, dispatch } = useCount();
  return (
    <div
      className={`${className} mt-2 shadow-lg max-w-[450px] w-full h-[150px] flex items-center flex-col p-10`}
    >
      <p className="font-medium text-[16px]">Value of Count: {state.count}</p>
      <div className="flex gap-x-5 mt-5">
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-orange-500 h-[50px]"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 h-[50px]"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

CountWithContext.propTypes = {
  props: PropTypes.object,
  className: PropTypes.string,
};

export default CountWithContext;
