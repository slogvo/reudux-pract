import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispath = useDispatch();

  const handleIncrement = () => {
    dispath(increment());
  };
  const handleDecrement = () => {
    dispath(decrement());
  };
  const handleIncrementByValue = () => {
    dispath(incrementByValue(10));
  };

  return (
    <div className="w-[450px] mt-5 max-w-full mx-auto">
      <h2>Count: {count}</h2>
      <div className="flex justify-between mt-5">
        <button
          className="inline-flex items-center justify-center px-6 py-3 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-flex items-center justify-center px-6 py-3 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          className="inline-flex items-center justify-center px-6 py-3 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
          onClick={handleIncrementByValue}
        >
          Increment By 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
