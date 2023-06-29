function setVideoLink() {
  var videoFrame = document.getElementById("video-frame");
  var linkInput = document.getElementById("link-input");

  videoFrame.src = linkInput.value;
}
