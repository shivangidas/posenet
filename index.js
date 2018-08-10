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
    return net.estimateMultiplePoses(
      imageData,
      imageScaleFactor,
      flipHorizontal,
      outputStride
    );
  })
  .then(function(poseArray) {
    console.log(poseArray);
    context.strokeStyle = "red";
    context.lineWidth = "5";
    poseArray.map(pose => {
      if (pose.score > 0.7) {
        drawAline(
          pose.keypoints[5].position.x,
          pose.keypoints[5].position.y,
          pose.keypoints[7].position.x,
          pose.keypoints[7].position.y
        );
        drawAline(
          pose.keypoints[5].position.x,
          pose.keypoints[5].position.y,
          pose.keypoints[6].position.x,
          pose.keypoints[6].position.y
        );
        drawAline(
          pose.keypoints[5].position.x,
          pose.keypoints[5].position.y,
          pose.keypoints[11].position.x,
          pose.keypoints[11].position.y
        );
        drawAline(
          pose.keypoints[12].position.x,
          pose.keypoints[12].position.y,
          pose.keypoints[6].position.x,
          pose.keypoints[6].position.y
        );
        drawAline(
          pose.keypoints[6].position.x,
          pose.keypoints[6].position.y,
          pose.keypoints[8].position.x,
          pose.keypoints[8].position.y
        );
        drawAline(
          pose.keypoints[7].position.x,
          pose.keypoints[7].position.y,
          pose.keypoints[9].position.x,
          pose.keypoints[9].position.y
        );
        drawAline(
          pose.keypoints[10].position.x,
          pose.keypoints[10].position.y,
          pose.keypoints[8].position.x,
          pose.keypoints[8].position.y
        );
        drawAline(
          pose.keypoints[11].position.x,
          pose.keypoints[11].position.y,
          pose.keypoints[12].position.x,
          pose.keypoints[12].position.y
        );

        drawAline(
          pose.keypoints[11].position.x,
          pose.keypoints[11].position.y,
          pose.keypoints[13].position.x,
          pose.keypoints[13].position.y
        );
        drawAline(
          pose.keypoints[14].position.x,
          pose.keypoints[14].position.y,
          pose.keypoints[12].position.x,
          pose.keypoints[12].position.y
        );
        drawAline(
          pose.keypoints[13].position.x,
          pose.keypoints[13].position.y,
          pose.keypoints[15].position.x,
          pose.keypoints[15].position.y
        );
        drawAline(
          pose.keypoints[14].position.x,
          pose.keypoints[14].position.y,
          pose.keypoints[16].position.x,
          pose.keypoints[16].position.y
        );
      }
    });

    /* context.fillRect(
      pose.keypoints[0].position.x,
      pose.keypoints[0].position.y,
      3,
      3
    ); */
    /* context.beginPath();
    context.moveTo(
      pose.keypoints[0].position.x,
      pose.keypoints[0].position.y + 10
    );
    context.lineTo(
      pose.keypoints[0].position.x - 10,
      pose.keypoints[0].position.y + 20
    );
    context.lineTo(
      pose.keypoints[0].position.x + 10,
      pose.keypoints[0].position.y + 20
    );
    context.fill();
    context.fillRect(
      pose.keypoints[0].position.x - 2,
      pose.keypoints[0].position.y + 20,
      4,
      10
    );
    //context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("I got your nose!", 10, 30); */
  });
function drawAline(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
