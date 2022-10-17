import React, { useState } from "react";

function EmailSample4Modal(props) {
  const { setPopup } = props;
  const [input, setInput] = useState({
    name: "",
    email: "",
    textArea: "",
  });
  function formHandler(e) {
    e.preventDefault();
    if (
      input.name.length <= 0 ||
      input.email.length <= 0 ||
      input.textArea.length <= 0
    ) {
      alert(`Please fill in all fields before submittion. Thank you!`);

      return;
    }
    if (input.email.length > 2) {
      if (!input.email.includes("@") || !input.email.includes(".")) {
        alert(`Please submit a proper email. Thank you!`);
        return;
      }
    }
    if (input.textArea.length > 255) {
      alert(
        `Form unable to submit, error on textarea character limit: 255. please use less characters.`
      );
      return;
    }
    alert(
      `Subject: ${input.name} sent you a message\n\nreply to Email: ${input.email}\n\nContent: ${input.textArea}`
    );
    setInput({
      name: "",
      email: "",
      textArea: "",
    });
    setPopup(false);
  }
  return (
    <div className="emailSample4Modal Javascript Modal">
      <div className="formContainer">
        {/* <button>Close</button> */}
        <div className="exit" onClick={() => setPopup(false)}>
          <span>x</span>
        </div>

        <form onSubmit={e => formHandler(e)}>
          <div className="inputContainer">
            <div className="inputHolders">
              <span>Full Name: </span>
              <input
                type="text"
                value={input.name}
                placeholder={`Full Name...`}
                onChange={e => {
                  setInput({ ...input, name: e.target.value });
                }}
              />
            </div>
            <div className="inputHolders">
              <span>Email: </span>
              <input
                type="text"
                value={input.email}
                placeholder={"example@example.com"}
                onChange={e => {
                  setInput({ ...input, email: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="btmForm">
            <textarea
              name="emailContent"
              id="emailContent"
              rows={12}
              value={input.textArea}
              maxLength={255}
              onChange={e => {
                setInput({ ...input, textArea: e.target.value });
              }}
            ></textarea>
            <button onClick={e => formHandler(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSample4Modal;
