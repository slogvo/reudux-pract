import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../redux-toolkit/toggleSlice";

const ToggleWithToolkit = () => {
  const toggle = useSelector((state) => state.toggleStatus);
  const count = useSelector((state) => state.counter);
  const dispath = useDispatch();
  const handleToggle = () => {
    dispath(toggleStatus());
  };

  return (
    <div>
      <span>{count}</span>
      <div
        onClick={handleToggle}
        className={`m-5 w-[72px] h-[40px] rounded-full flex items-center px-[5px] cursor-pointer shadow-lg transition-all duration-500 ${
          toggle ? "bg-blue-500 justify-end" : "bg-[#d4d4d4] justify-start"
        }`}
      >
        <div
          className={`h-[30px] w-[30px] rounded-full bg-white ${
            !toggle ? "bg-blue-500" : "bg-[#fff]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleWithToolkit;
