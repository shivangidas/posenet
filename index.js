"use strict";
const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;
let imageData = document.getElementById("image");
let canvas = document.getElementById("poseCanvas");
let context = canvas.getContext("2d");
canvas.height = imageData.height;
canvas.width = imageData.width;
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

    context.fillRect(
      pose.keypoints[0].position.x,
      pose.keypoints[0].position.y,
      3,
      3
    );
    //context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("I got your nose!", 10, 30);
  });
