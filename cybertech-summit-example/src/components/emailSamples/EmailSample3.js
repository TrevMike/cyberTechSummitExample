import React from "react";

function EmailSample3() {
  const emailAddress = "mailto:example@example.com";
  const [emailEvent, setEmailEvent] = React.useState(false);
  return (
    <div className="emailExample3">
      <h3>Email Example 3</h3>
      <p>
        Here is another example using Javascript to send the email and prevent
        scrapping though this may fail if the user has disabled javascipt making
        the feature useless, another issue would be user experience having to
        open a client on there computer instead of being able to use there own
        email service.
      </p>
      <p>
        Also ask yourself? How do hover events work on mobile? You can't hover
        your finger expecting it to behave the same way? Well let's see what
        happens on mobile?
      </p>
      <p>This example fails in accessibilty</p>
      <a
        href={emailEvent ? emailAddress : "#."}
        onMouseOver={() => setEmailEvent(true)}
        onMouseLeave={() => setEmailEvent(false)}
      >
        <button>Send Email</button>
      </a>
    </div>
  );
}

export default EmailSample3;
