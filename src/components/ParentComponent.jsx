import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("Parent component render ");
  return (
    <div>
      <p>Current count: {count}</p>
      <div className="flex gap-x-5">
        <button
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-green-500 rounded-lg h-[50px]"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>

      <button
        className="mt-10 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px]"
        onClick={() => setToggle(!toggle)}
      >
        Toggle with parentComponent
      </button>
      {JSON.stringify(toggle)}
      <ChildComponent toggle={toggle} setToggle={setToggle}></ChildComponent>
    </div>
  );
};

// Hàm setToggle là một hàm thay đổi state của component cha, nên khi bạn gọi setToggle(!toggle) trong component con, nó sẽ thực hiện việc thay đổi state của component cha.

// Điều này xảy ra vì trong JavaScript, các hàm được truyền qua các component con thông qua props vẫn giữ được mối liên kết với nguyên bản của chúng trong component cha. Vì vậy, khi bạn gọi hàm setToggle(!toggle) trong component con, nó sẽ thực hiện việc thay đổi state của component cha thông qua hàm được truyền xuống từ component cha.

export default ParentComponent;
