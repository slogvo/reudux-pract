import { useEffect, useRef, useState } from "react";

const RestTimeWithUseRef = () => {
  const [timer, setTimer] = useState(60);
  const timeRef = useRef(null);

  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  useEffect(() => {
    //side-effects
    return () => clearInterval(timeRef.current);
  }, []);
  // Khi chuyển tab - link thì components hiện tại sẽ unmout, nhưng do sử dụng setInterval nên thời gian vẫn chạy --> kết hợp với ComponentWillUnmount của useEffect để clearIntaval hiện tại

  console.log("Component render");
  return (
    <div>
      <p>Timer: {timer}</p>
      <div className="flex gap-x-5">
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-[50px]"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default RestTimeWithUseRef;
