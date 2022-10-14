import React from "react";

function EmailSample4Modal(props) {
  const { setPopup } = props;
  return (
    <div className="emailSample4Modal">
      <div className="formContainer">
        {/* <button>Close</button> */}
        <div className="exit" onClick={() => setPopup(false)}>
          <span>x</span>
        </div>

        <form action="">
          <div className="inputContainer">
            <div className="inputHolders">
              <span>Full Name: </span>
              <input type="text" value={``} placeholder={`Full Name...`} />
            </div>
            <div className="inputHolders">
              <span>Email: </span>
              <input
                type="text"
                value={``}
                placeholder={"example@example.com"}
              />
            </div>
          </div>

          <div className="btmForm">
            <textarea name="" id="" rows={12}></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSample4Modal;
