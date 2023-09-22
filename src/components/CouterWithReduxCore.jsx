import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const CouterWithReduxCore = ({ className }) => {
  const count = useSelector((state) => state.counter.count);
  const distpath = useDispatch();

  const increment = () => {
    distpath({ type: "Increment" });
  };

  const decrement = () => {
    distpath({ type: "Decrement" });
  };

  return (
    <div className={`${className} mt-10 border border-solid p-10 w-[400px]`}>
      <p className="text-center font-bold text-[20px] text-violet-600">
        REDUX CORE
      </p>
      <p className="text-center">
        CouterWithReduxCore: <span>{count}</span>
      </p>
      <div className="mt-5 flex items-center justify-center gap-x-5">
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[54px]"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[54px]"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

CouterWithReduxCore.propTypes = {
  className: PropTypes.string,
};

export default CouterWithReduxCore;
