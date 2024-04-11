import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterControllers() {
  const dispatch = useDispatch();
  const privacy = useSelector((store) => store.privacy);

  const inputElement = useRef();

  function increamentEvent() {
    dispatch({ type: "INCREAMENT" });
  }

  function decreamentEvent() {
    dispatch({ type: "DECREAMENT" });
  }

  function addNumEvent() {
    dispatch({
      type: "ADDNUMBER",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  }

  function subNumEvent() {
    dispatch({
      type: "SUBNUMBER",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  }

  function privacyEvent() {
    dispatch({ type: "PRIVACY" });
  }

  return (
    <div className="container">
      {!privacy ? (
        <div className="row">
          <div className="col-3 my-2 ">
            <input type="text" className="form-control" ref={inputElement} />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {!privacy ? (
          <div className="col-2">
            <button className="btn btn-danger" onClick={addNumEvent}>
              Add Number
            </button>
          </div>
        ) : (
          " "
        )}
        {!privacy ? (
          <div className="col-2">
            <button className="btn btn-info" onClick={subNumEvent}>
              Substract Number
            </button>
          </div>
        ) : (
          ""
        )}
        {!privacy ? (
          <div className="col-2">
            <button className="btn btn-success" onClick={increamentEvent}>
              Increament by 1
            </button>
          </div>
        ) : (
          ""
        )}
        {!privacy ? (
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
