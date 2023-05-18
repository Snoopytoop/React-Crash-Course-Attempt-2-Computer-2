import React, { useState } from "react";

function Cart() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr.slice(0, -1) ])
    }

  return (
    <div>
        <button onClick={addMinus}>-</button>
        <button onClick={addPlus}>+</button>
        {arr.toString()}
    </div>
  );
}

export default Cart;