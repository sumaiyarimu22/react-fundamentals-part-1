import React from "react";

const StoreChild = ({ handelGrabFruit }) => {
  return (
    <div>
      <button onClick={handelGrabFruit}>GrabFruit</button>
    </div>
  );
};

export default StoreChild;
