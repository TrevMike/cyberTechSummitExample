import React from "react";

function EmailSample4Modal() {
  return (
    <div>
      <div className="formContainer">
        <button>Close</button>
        <form action="">
          <div>
            <span>Full Name: </span>
            <input type="text" value={``} placeholder={`Full Name...`} />
          </div>
          <div>
            <span>Email: </span>
            <input type="text" value={``} placeholder={"example@example.com"} />
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSample4Modal;
