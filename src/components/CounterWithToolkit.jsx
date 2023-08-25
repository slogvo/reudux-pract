import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux-toolkit/counterSlice";

const CounterWithToolkit = () => {
  const count = useSelector((state) => state.counter);
  const dispath = useDispatch();

  const handleIncrement = () => {
    dispath(increment());
  };

  return (
    <div>
      Count: {count}
      <div className="">
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterWithToolkit;
