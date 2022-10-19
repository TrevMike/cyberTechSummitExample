import React, { lazy, Suspense } from "react";
const EmailImage = lazy(() => import("../images/EmailImage"));
const SampleImg2 = lazy(() => import("../images/SampleImg2"));
function EmailSample2() {
  return (
    <div className="emailExample2">
      <h3>Email Example 2</h3>
      <p>
        Here is the next sample, using an image instead to send those email,
        though this would prevent scrapping by successfully hiding our email
        address the issue here is that the user won't be able to copy the text
        in the event that they would like to use their own email client instead
        of the one provided by their machine. On top of that, we will need to
        use a little bit of JavaScript to add an on Click event to route people
        to use the email. At that point, might as well do it the recommended way
        in example 4.
      </p>
      <p>
        all image elements require 2 attributes, the source{" "}
        <span>{`src={"url or file path"}`}</span> and the alternative text{" "}
        <span>{`alt={"short description of what the image is for users that are for any reason unable to view it"}`}</span>
      </p>
      <Suspense fallback={<div>Loading img one...</div>}>
        <EmailImage />
      </Suspense>
      <Suspense fallback={<div>Loading img two...</div>}>
        <SampleImg2 />
      </Suspense>
    </div>
  );
}

export default EmailSample2;
