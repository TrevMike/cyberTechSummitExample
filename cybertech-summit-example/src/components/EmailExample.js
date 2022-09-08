import React, { useState } from "react";

function EmailExample() {
  const emailAddress = "mailto:example@example.com";
  const [emailEvent, setEmailEvent] = useState(false);
  return (
    <div className="emailExample1">
      <div>
        <h3>Email Example 1</h3>
        <p>
          Here is the most basic of setting up an email and unfortunatly the
          most common one online making it the easiest to exploit.
        </p>
        <a href="mailto:example@example.com">Example@example.com</a>
      </div>
      <div className="emailExample2">
        <h3>Email Example 2</h3>
        <p>
          Here is the next sample, using an image instead to send those email
          though this would prevent scrapping the issue here is that the user
          won't be able to copy the text in the event that they would like to
          use there own email client instead of the one provided by there
          machine.
        </p>
        <img src="" alt="email address of user" />
      </div>
      <div className="emailExample3">
        <h3>Email Example 3</h3>
        <p>
          Here is another example using Javascript to send the email and prevent
          scrapping though this may fail if the user has disabled javascipt
          making the feature useless, another issue would be user experience
          having to open a client on there computer instead of being able to use
          there own email service.
        </p>
        <a
          href={emailEvent ? emailAddress : "#."}
          onMouseOver={() => setEmailEvent(true)}
          onMouseLeave={() => setEmailEvent(false)}
        >
          <button>Send Email</button>
        </a>
      </div>
      <div className="emailExample4">
        <h3>Email Example 4</h3>
        <p>Here is the form version</p>
      </div>
    </div>
  );
}

export default EmailExample;
