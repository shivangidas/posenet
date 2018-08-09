"use strict";
const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;
let imageData = document.getElementById("cat");
posenet
  .load()
  .then(function(net) {
    return net.estimateSinglePose(
      imageData,
      imageScaleFactor,
      flipHorizontal,
      outputStride
    );
  })
  .then(function(pose) {
    console.log(pose);
  });
