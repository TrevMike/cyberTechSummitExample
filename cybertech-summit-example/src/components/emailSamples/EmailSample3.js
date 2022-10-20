import React, { lazy, Suspense } from "react";
const SampleImg3 = lazy(() => import("../images/SampleImg3"));
function EmailSample3() {
  const emailAddress = "mailto:example@example.com";
  const [emailEvent, setEmailEvent] = React.useState(false);
  return (
    <div className="emailExample3">
      <h3>Email Example 3</h3>
      <p>
        Here is an example using JavaScript to send the email to prevent
        scrapping. The issue here is again accessibility, we are using a Hover
        event on and off to either hide or show the email, but won't work when
        we try to go on mobile side of things due to the reason we can't hover
        over our phones and just like example 1 and 2 when we have the client
        click on the link it will still open the email app on their local
        machine.
      </p>

      <p className="reveal">This example fails in accessibility.</p>
      <a
        className="reveal"
        href={emailEvent ? emailAddress : "#."}
        onMouseOver={() => setEmailEvent(true)}
        onMouseLeave={() => setEmailEvent(false)}
      >
        <button>Send Email</button>
      </a>
      <Suspense fallback={<div>Loading...</div>}>
        <SampleImg3 />
      </Suspense>
    </div>
  );
}

export default EmailSample3;
