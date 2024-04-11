import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterAction, PrivacyAction } from "../Store/CounterStore";

function CounterControllers() {
  const dispatch = useDispatch();
  const privacyToggle = useSelector((store) => store.privacy);

  const inputElement = useRef();

  function increamentEvent() {
    dispatch(CounterAction.increament());
  }

  function decreamentEvent() {
    dispatch(CounterAction.decreament());
  }

  function addNumEvent() {
    dispatch(
      CounterAction.addUserNumber({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  }

  function subNumEvent() {
    dispatch(
      CounterAction.subtractUserNumber({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  }

  function privacyEvent() {
    dispatch(PrivacyAction.toggle());
  }

  return (
    <div className="container">
      {!privacyToggle ? (
        <div className="row">
          <div className="col-3 my-2 ">
            <input type="text" className="form-control" ref={inputElement} />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {!privacyToggle ? (
          <div className="col-2">
            <button className="btn btn-danger" onClick={addNumEvent}>
              Add Number
            </button>
          </div>
        ) : (
          " "
        )}
        {!privacyToggle ? (
          <div className="col-2">
            <button className="btn btn-info" onClick={subNumEvent}>
              Substract Number
            </button>
          </div>
        ) : (
          ""
        )}
        {!privacyToggle ? (
          <div className="col-2">
            <button className="btn btn-success" onClick={increamentEvent}>
              Increament by 1
            </button>
          </div>
        ) : (
          ""
        )}
        {!privacyToggle ? (
          <div className="col-2">
            <button className="btn btn-primary" onClick={decreamentEvent}>
              Decreament by 1
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="col-2">
          <button className="btn btn-warning" onClick={privacyEvent}>
            Hide Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterControllers;
