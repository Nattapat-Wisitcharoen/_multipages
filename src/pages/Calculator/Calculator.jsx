import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [history, setHistory] = useState("");
  const [output, setOutput] = useState("");

  const handleOperatorClick = (id) => {
    if (id === "clear") {
      setHistory("");
      setOutput("");
    } else if (id === "backspace") {
      let currentOutput = output.toString();
      if (currentOutput) {
        currentOutput = currentOutput.substr(0, currentOutput.length - 1);
        setOutput(currentOutput);
      }
    } else {
      let currentOutput = output;
      let currentHistory = history;
      if (currentOutput === "" && currentHistory !== "") {
        if (isNaN(currentHistory[currentHistory.length - 1])) {
          currentHistory = currentHistory.substr(0, currentHistory.length - 1);
        }
      }
      if (currentOutput !== "" || currentHistory !== "") {
        currentOutput = currentOutput === "" ? currentOutput : reverseNumberFormat(currentOutput);
        currentHistory = currentHistory + currentOutput;
        if (id === "=") {
          const result = eval(currentHistory); // การใช้ eval มีความเสี่ยงต้องระวัง
          setOutput(result);
          setHistory("");
        } else {
          currentHistory = currentHistory + id;
          setHistory(currentHistory);
          setOutput("");
        }
      }
    }
  };

  const handleNumberClick = (id) => {
    let currentOutput = reverseNumberFormat(output);
    if (!isNaN(currentOutput)) {
      currentOutput = currentOutput + id;
      setOutput(currentOutput);
    }
  };

  const getFormattedNumber = (num) => {
    if (num === "-") {
      return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
  };

  const reverseNumberFormat = (num) => {
    return Number(num.replace(/,/g, ""));
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="result">
          <div className="history">
            <p>{history}</p>
          </div>
          <div className="output">
            <p>{getFormattedNumber(output)}</p>
          </div>
        </div>
        <div className="keyboard">
          <button className="operator" onClick={() => handleOperatorClick("clear")}>C</button>
          <button className="operator" onClick={() => handleOperatorClick("backspace")}>CE</button>
          <button className="empty"></button>
          <button className="operator" onClick={() => handleOperatorClick("/")}>÷</button>

          <button className="number" onClick={() => handleNumberClick("7")}>7</button>
          <button className="number" onClick={() => handleNumberClick("8")}>8</button>
          <button className="number" onClick={() => handleNumberClick("9")}>9</button>
          <button className="operator" onClick={() => handleOperatorClick("*")}>×</button>

          <button className="number" onClick={() => handleNumberClick("4")}>4</button>
          <button className="number" onClick={() => handleNumberClick("5")}>5</button>
          <button className="number" onClick={() => handleNumberClick("6")}>6</button>
          <button className="operator" onClick={() => handleOperatorClick("+")}>+</button>

          <button className="number" onClick={() => handleNumberClick("1")}>1</button>
          <button className="number" onClick={() => handleNumberClick("2")}>2</button>
          <button className="number" onClick={() => handleNumberClick("3")}>3</button>
          <button className="operator" onClick={() => handleOperatorClick("-")}>-</button>

          <button className="empty"></button>
          <button className="number" onClick={() => handleNumberClick("0")}>0</button>
          <button className="empty"></button>
          <button className="operator" onClick={() => handleOperatorClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
