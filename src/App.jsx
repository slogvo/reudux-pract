import { useSelector } from "react-redux";
import CountWithContext from "./components/CountWithContext";
import CouterWithReduxCore from "./components/CouterWithReduxCore";
import { useCount } from "./context/count-context";
import ToggleWithRedux from "./components/ToggleWithRedux";
import EffectComponent from "./components/effectComponent";

const App = () => {
  const { state } = useCount();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="w-full max-w-[1200px] mx-auto ">
      <div className="mt-[50px] flex flex-col items-center justify-center">
        <p>
          Count values in App Component:
          <span className="ml-5 text-[16px] text-red-500 font-medium">
            {/* {count} */}
            {state.count}
          </span>
        </p>
        <p className="text-center text-violet-600">
          CouterWithReduxCore: <span>{count}</span>
        </p>
        <CountWithContext></CountWithContext>
        <CouterWithReduxCore></CouterWithReduxCore>
        <ToggleWithRedux />
        <EffectComponent />
      </div>
    </div>
  );
};

export default App;
