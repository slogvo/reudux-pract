import PropTypes from "prop-types";

const ChildComponent = ({ ...props }) => {
  const { toggle, setToggle } = props;
  console.log("🚀 ~ ChildComponent ~ toggle:", toggle);

  return (
    <div>
      <button
        className="mt-10 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
        onClick={() => setToggle(!toggle)}
      >
        Toggle with childComponent
      </button>
      {JSON.stringify(toggle)}
    </div>
  );
};

ChildComponent.propTypes = {
  toggle: PropTypes.any,
  setToggle: PropTypes.func,
};

export default ChildComponent;
