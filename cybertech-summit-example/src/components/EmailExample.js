import React from "react";
import EmailSample1 from "./emailSamples/EmailSample1";
import EmailSample2 from "./emailSamples/EmailSample2";
import EmailSample3 from "./emailSamples/EmailSample3";
import EmailSample4 from "./emailSamples/EmailSample4";

function EmailExample() {
  // const emailAddress = "mailto:example@example.com";
  // const [emailEvent, setEmailEvent] = useState(false);
  return (
    <div>
      <EmailSample1 />
      <EmailSample2 />
      <EmailSample3 />
      <EmailSample4 />
    </div>
  );
}

export default EmailExample;
