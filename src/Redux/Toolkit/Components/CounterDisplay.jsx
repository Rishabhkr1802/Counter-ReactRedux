import React from "react";
import { useSelector } from "react-redux";

function CounterDisplay() {
  const { value } = useSelector((store) => store.counter);
  const privacyToggle = useSelector((store) => store.privacy);

  return (
    <div className="container">
      {privacyToggle ? (
        <p>Counter value is hidden !!!. You can't perform any other operation.</p>
      ) : (
        <p> The current value of counter is : {value} </p>
      )}
    </div>
  );
}

export default CounterDisplay;
