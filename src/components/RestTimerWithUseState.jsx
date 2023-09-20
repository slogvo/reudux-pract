import { useEffect, useState } from "react";

const RestTimerWithUseState = () => {
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    //ComponentDidMount
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prev) => prev - 1);
        } else {
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    //ComponentWillUnmount()
    return () => clearInterval(interval);
  }, [isRunning, timer]); // ComponentDidUpdate()

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  //Component will re-render many times
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

export default RestTimerWithUseState;
