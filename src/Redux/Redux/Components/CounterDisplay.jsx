import React from "react";
import { useSelector } from "react-redux";

function CounterDisplay() {
  const counter = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="container">
      {privacy ? (
        <p>
          Counter value is hidden !!!. You can't perform any other operation.
        </p>
      ) : (
        <p> The current value of counter is : {counter} </p>
      )}
    </div>
  );
}

export default CounterDisplay;
