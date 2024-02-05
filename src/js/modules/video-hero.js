const aboutUsVideoBlock = document.getElementById('video-hero');
const modal = document.querySelector('.hero__modal');

if (aboutUsVideoBlock) {
  const video = aboutUsVideoBlock.querySelector('.video--modal');
  const playBtn = aboutUsVideoBlock.querySelector('.video-block__play--modal');

  const stopVideo = (e) => {
    if (e.target.classList.contains('modal-exit')) {
      video.pause();
      video.currentTime = 0;
    }
  };

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aboutUsVideoBlock.classList.add('video-block--played');
    video.play();
    video.controls = true;
    playBtn.classList.add('video-block__play--played');
  });

  video.onpause = function () {
    aboutUsVideoBlock.classList.remove('video-block--played');
    video.controls = false;
    playBtn.classList.remove('video-block__play--played');
  };

  modal.addEventListener('click', stopVideo);
}
