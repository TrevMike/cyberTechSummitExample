import React, { useState, lazy, Suspense } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import EmailSample4Modal from "./EmailSample4Modal";
const EmailSample4Modal = lazy(() => import("./EmailSample4Modal"));
const SampleVid41 = lazy(() => import("../images/SampleVid41"));
const SampleVid42 = lazy(() => import("../images/SampleVid42"));
function EmailSample4() {
  const [popup, setPopup] = useState(false);
  const [cssPopup, setCssPopup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    textArea: "",
  });
  function captchaHandler(value) {
    console.log("Captcha value:", value);
  }
  function formHandler(e) {
    e.preventDefault();

    if (
      input.name.length <= 0 ||
      input.email.length <= 0 ||
      input.textArea.length <= 0
    ) {
      alert(`Please fill in all fields before submission. Thank you!`);

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
        `Form unable to submit, error on textarea character limit: 255. Please use less characters.`
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
    setCssPopup(false);
  }
  return (
    <div className="emailExample4">
      <h3>Email Sample 4</h3>
      <p>
        Here we have two versions of the same example, the first is trying to do
        it via CSS which is not the way we want to do it, and the other is doing
        it via JavaScript, which is the way we are waning to make it. Regardless
        of whatever version you are using, always try to implement Captcha, this
        is one of the best ways to prevent bots attacking your website's inputs
        and inputting malicious data.
      </p>

      {popup ? (
        <Suspense fallback={<div>Loading...</div>}>
          <EmailSample4Modal setPopup={setPopup} />
        </Suspense>
      ) : (
        ""
      )}

      <div
        className="emailSample4Modal"
        style={{ display: cssPopup ? "flex" : "none" }}
      >
        <div className="formContainer">
          {/* <button>Close</button> */}
          <div className="exit" onClick={() => setCssPopup(false)}>
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
                maxLength={255}
                value={input.textArea}
                onChange={e => {
                  setInput({ ...input, textArea: e.target.value });
                }}
              ></textarea>
              <ReCAPTCHA
                sitekey={"6LdjFosiAAAAAE7mZCxvC3a8SgrbiuBitpdjqxrR"}
                onChange={captchaHandler}
              />
              <button onClick={e => formHandler(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="modalSampleBtn">
        <p>
          The two version are exactly the same, minus the way we are toggling
          the display in one, and rendering the other. The CSS version we are
          simply toggling the CSS attribute "display" from "none" to in this
          case "flex". The reason we don't want to make it via CSS is because
          the HTML will still show in the inspector tool, and we can still get
          scrapped, the AI will fill in the inputs and send the data to you. In
          simple terms, we are "Hiding" the form, yet it is still exposed in our
          HTML.
        </p>
        <button onClick={() => setCssPopup(!cssPopup)}>Open CSS Version</button>
        <Suspense fallback={<div>Loading...</div>}>
          <SampleVid41 />
        </Suspense>
        <p>
          The JavaScript version we are setting a conditional to toggle, and
          logic goes as such; set a variable popup=true and an on click handler
          when invoked set to !popup which would in turn set our variable to
          popup=false. The Component will get mounted into the DOM when rendered
          and unmount when done with the form, a.k.a. the cleanup step. In
          simple terms, our form won't show in our HTML unless you call for it
          which it will then populate and when we are done with it leave the
          HTML.
        </p>
        <button onClick={() => setPopup(!popup)}>Open JavaScipt Version</button>
        <Suspense fallback={<div>Loading...</div>}>
          <SampleVid42 />
        </Suspense>
      </div>
    </div>
  );
}

export default EmailSample4;
