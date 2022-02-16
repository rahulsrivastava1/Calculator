import React, { useState } from "react";

const Main = () => {
  const [sum, setSum] = useState("");

  const handleClick = (e) => {
    setSum(sum.concat(e.target.name));
  };

  const clear = () => {
    setSum("");
  };

  const backSpace = () => {
    setSum(sum.slice(0, -1));
  };

  const evaluation = () => {
    try {
      setSum(eval(sum));
    } catch (error) {
      setSum("Error");
    }
  };

  return (
    <>
      <div className="container">
        <form className="my-3 form">
          <input type="text" className="form-control" value={sum} />
        </form>
        <div className="row">
          <div className="col-md-3 my-2">
            <button className="btn" onClick={clear}>
              AC
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" onClick={backSpace}>
              C
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="%" onClick={handleClick}>
              %
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="/" onClick={handleClick}>
              &divide;
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-2">
            <button className="btn" name="7" onClick={handleClick}>
              7
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="8" onClick={handleClick}>
              8
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="9" onClick={handleClick}>
              9
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="*" onClick={handleClick}>
              &times;
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-2">
            <button className="btn" name="4" onClick={handleClick}>
              4
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="5" onClick={handleClick}>
              5
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="6" onClick={handleClick}>
              6
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="-" onClick={handleClick}>
              &ndash;
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-2">
            <button className="btn" name="1" onClick={handleClick}>
              1
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="2" onClick={handleClick}>
              2
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="3" onClick={handleClick}>
              3
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="+" onClick={handleClick}>
              +
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-2">
            <button className="btn" name="0" onClick={handleClick}>
              0
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" name="." onClick={handleClick}>
              .
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn" onClick={evaluation}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
