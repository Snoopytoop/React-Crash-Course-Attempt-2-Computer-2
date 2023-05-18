import "./App.css";
import Title from "./components/Title";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Cart from "./components/Counter";
import React, { useState } from "react";

function App() {
  
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true)
  }

  function confirmModal() {
    console.log("confirm")
    setShowModal(false)
  }

  function cancelModal() {
    console.log("cancel")
    setShowModal(false)
  }




  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo deleteTodo={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo deleteTodo={onTodoDelete} title="Finish Interview Section" />
        <Todo deleteTodo={onTodoDelete} title="Land a $100k Job" />
      </div>
      {showModal && <Modal confirm={confirmModal} cancel={cancelModal} question="Are you sure?" />}
    </>
  );
}

export default App;