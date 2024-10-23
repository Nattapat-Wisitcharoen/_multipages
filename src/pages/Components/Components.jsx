import Add from "../../components/Add/Add";
import Counter from "../../components/Counter/Counter";
import Temperatures from "../../components/Temperatures/Temperatures";
import Timer from "../../components/Timer/Timer";
import "./Components.css";


function Components() {
  return (
    <div className="components-container">
      <div className="title">
        <span className="badge bg-black">
          <h1>REACT COMPONENTS</h1>
        </span>
      </div>
      <div className="group">
        <div className="column">
          <div className="counter">
            <Counter />
          </div>
          <div className="timer">
            <Timer />
          </div>
        </div>
        <div className="add">
          <Add aValue={10} bValue={30} />
        </div>
      </div>
      <div className="temperatures">
        <Temperatures />
      </div>
      <div className="name">
        <span className="badge bg-black">
          <h2>ณัฐภัทร วิศิษฏ์เจริญ 66071087</h2>
        </span>
      </div>
    </div>
  );
}

export default Components;
