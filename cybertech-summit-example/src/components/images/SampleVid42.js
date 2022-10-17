import React, { Fragment } from "react";
import video from "../../assets/JavascriptModal.mov";
function SampleVid42() {
  return (
    <Fragment>
      <video style={{ width: "100%" }} src={video} autoPlay loop={true} />
    </Fragment>
  );
}

export default SampleVid42;
