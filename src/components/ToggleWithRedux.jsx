import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../redux-core/actions";

const ToggleWithRedux = () => {
  const toggle = useSelector((state) => state.toggleStatus.toggle);
  const dispatch = useDispatch();
  return (
    <div
      className={`mt-10 w-[72px] h-[40px] p-[5px] rounded-full  flex items-center  cursor-pointer transition-all duration-500 ${
        toggle ? "bg-blue-500 justify-end" : "bg-gray-300 justify-start"
      }  `}
      onClick={() => dispatch(toggleButton())}
    >
      <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
    </div>
  );
};

export default ToggleWithRedux;
