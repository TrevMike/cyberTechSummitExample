import React from "react";

function EmailSample2() {
  return (
    <div className="emailExample2">
      <h3>Email Example 2</h3>
      <p>
        Here is the next sample, using an image instead to send those email
        though this would prevent scrapping the issue here is that the user
        won't be able to copy the text in the event that they would like to use
        there own email client instead of the one provided by there machine.
      </p>
      <p>
        all image elements require 2 attributes the source{" "}
        <span>{`( src="url or file path" )`}</span> and the alternative text{" "}
        <span>{`( alt="short description of what the image for users that are for any reason unable to view it" )`}</span>
      </p>
      <img src="" alt="email address of user" />
    </div>
  );
}

export default EmailSample2;
