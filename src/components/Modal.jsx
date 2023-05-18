import "./Modal.css";

function Modal({ question, confirm, cancel }) {
  function message(m) {
    console.log(m);
  }
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button onClick={cancel} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={confirm} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;