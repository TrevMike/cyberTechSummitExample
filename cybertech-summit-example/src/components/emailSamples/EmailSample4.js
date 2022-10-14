import React, { useState } from "react";
import EmailSample4Modal from "./EmailSample4Modal";

function EmailSample4() {
  const [popup, setPopup] = useState(false);
  const [cssPopup, setCssPopup] = useState(false);
  return (
    <div className="emailExample4">
      <h3>Email Sample 4</h3>
      <p>
        Here we have two versions of the same example, the first is trying to do
        it via CSS which is not the way we want to do it, and the other is doing
        it via JavaScript which is the way we are waning to make it. Regarless
        of whatever version you are using always try to impletement Captcha,
        this is one of the best ways to prevent from bots attacking your site
        inputs and inputing legit data.
      </p>

      {popup ? <EmailSample4Modal setPopup={setPopup} /> : ""}

      <div
        className="emailSample4Modal"
        style={{ display: cssPopup ? "flex" : "none" }}
      >
        <div className="formContainer">
          {/* <button>Close</button> */}
          <div className="exit" onClick={() => setCssPopup(false)}>
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
      <div className="modalSampleBtn">
        <p>
          The two version are exactly the same minus the way we are toggling the
          display in one and rendering the other. The CSS version we are simply
          toggling the CSS attribute "display" from "none" to in this case
          "flex". The reason we don't want to make it via CSS is because the
          HTML will still show in inpector tool and we can still get scrapped,
          the AI will fill in the inputs and send the data to you
        </p>
        <button onClick={() => setCssPopup(!cssPopup)}>Open CSS Version</button>
        <p>
          The JavaScript we are setting a conditional toggle, and logic goes as
          such; set a variable popup=true and an onclick handler when invoked
          set to !popup which would in turn set to popup=false. The Component
          will get mounted into the DOM when rendered and unmount when done with
          the form a.k.a the clean up step.
        </p>
        <button onClick={() => setPopup(!popup)}>Open JavaScipt Version</button>
      </div>
    </div>
  );
}

export default EmailSample4;
