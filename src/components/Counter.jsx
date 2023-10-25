import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(props.productPrice);

  return (
    <div className="text-center ">
      <button
        className="btn btn-danger"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <span className="text-white mx-2">{counter}₺</span>
      <button
        className="btn btn-danger"
        onClick={() => setCounter(Number(counter) + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
