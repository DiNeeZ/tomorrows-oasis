const videoBlock = document.querySelector(".video-block--modal");
const modal = document.querySelector(".modal");

if (videoBlock) {
  const video = videoBlock.querySelector(".video--modal");
  const playBtn = videoBlock.querySelector(".video-block__play--modal");

  const stopVideo = (e) => {
    if (e.target.classList.contains("modal-exit")) {
      video.pause();
      video.currentTime = 0;
    }
  };

  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    videoBlock.classList.add("video-block--played");
    video.play();
    video.controls = true;
    playBtn.classList.add("video-block__play--played");
  });

  video.onpause = function () {
    videoBlock.classList.remove("video-block--played");
    video.controls = false;
    playBtn.classList.remove("video-block__play--played");
  };

  modal.addEventListener("click", stopVideo);
}
