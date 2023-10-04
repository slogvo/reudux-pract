import { useEffect, useState } from "react";

const EffectComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log("This is state value render");
  }, [count]);
  return (
    <div className="mt-6">
      <p>Count value: {count}</p>
      <p>State value: {JSON.stringify(value)}</p>
      <button
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Update Count
      </button>
    </div>
  );
};

export default EffectComponent;
