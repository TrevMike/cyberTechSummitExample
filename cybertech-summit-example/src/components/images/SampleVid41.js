import React, { Fragment } from "react";
import video from "../../assets/CSSModal.mov";
function SampleVid41() {
  return (
    <Fragment>
      <video style={{ width: "100%" }} src={video} autoPlay loop={true} />
    </Fragment>
  );
}

export default SampleVid41;
