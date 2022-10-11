import React, { Fragment } from "react";
import img from "../../assets/emailImage.png";

function EmailImage() {
  return (
    <Fragment>
      <img src={img} alt="email of user" />
    </Fragment>
  );
}

export default EmailImage;
