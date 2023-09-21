import React from "react";

const RelationshipComponent = () => {
  const [message, setMessage] = React.useState("Hello");

  const changeMessage = () => {
    setMessage("Goodbye");
  };

  return (
    <div>
      <ChildComponent message={message} changeMessage={changeMessage} />
    </div>
  );
};

const ChildComponent = ({ message, changeMessage }) => {
  const handleClick = () => {
    // Thay đổi giá trị của message trong component con
    // Nhưng không ảnh hưởng đến giá trị của message trong component cha
    message = "New message";
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Change Message</button>
      <button onClick={changeMessage}>Change Message in Parent</button>
    </div>
  );
};

export default RelationshipComponent;
