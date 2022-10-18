import React, { lazy, Suspense } from "react";

const SampleImg1 = lazy(() => import("../images/SampleImg1"));
function EmailSample1() {
  return (
    <div className="emailExample1">
      <h3>Email Example 1</h3>
      <p>
        Here is the most basic email set up and unfortunately the most common
        one online making it the easiest to exploit.
      </p>
      <a href="mailto:example@example.com">example@example.com</a>{" "}
      <span>{`<-`} Click Me!</span>
      <p>
        Below shows the HTML written to make this email link. As you can see
        this is exposing the address and makes it easy for exploitation via
        email harvesting.
      </p>
      <div>
        {/* <p>html example to show how exposed this way of writing code is.</p> */}
        {/* <img src={htmlSample1} alt="HTML example" /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <SampleImg1 />
        </Suspense>
      </div>
    </div>
  );
}

export default EmailSample1;
