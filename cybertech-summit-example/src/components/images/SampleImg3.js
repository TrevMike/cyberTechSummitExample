import React from "react";
import video1 from "../../assets/HoverSampleClient.mov";
import video2 from "../../assets/HoverSampleDevTools.mov";
function SampleImg3() {
  return (
    <div className="hide">
      <video style={{ width: "45%" }} src={video1} autoPlay loop={true} />
      <video style={{ width: "45%" }} src={video2} autoPlay loop={true} />
    </div>
  );
}

export default SampleImg3;
