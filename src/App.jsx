import CounterWithToolkit from "./components/CounterWithToolkit";
import ToggleWithToolkit from "./components/ToggleWithToolkit";
import UserList from "./components/UserList";

const App = () => {
  // const { count } = useSelector((state) => state.counter);
  return (
    <>
      {/* This is value of counter now: {count} */}
      {/* <Counter></Counter> */}
      <ToggleWithToolkit></ToggleWithToolkit>
      <CounterWithToolkit></CounterWithToolkit>
      <UserList></UserList>
    </>
  );
};

export default App;
