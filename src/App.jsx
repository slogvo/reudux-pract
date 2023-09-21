import CountWithContext from "./components/CountWithContext";
import { useCount } from "./context/count-context";

const App = () => {
  const { count } = useCount();
  console.log("App Component re-rendered");
  return (
    <div className="w-full max-w-[1200px] mx-auto ">
      <div className="mt-[50px] flex flex-col items-center justify-center">
        <p>
          Count values in App Component:
          <span className="ml-5 text-[16px] text-red-500 font-medium">
            {count}
          </span>
        </p>
        <CountWithContext></CountWithContext>
      </div>
    </div>
  );
};

export default App;
