const aboutUsVideoBlock = document.querySelector('.mission-video');

if (aboutUsVideoBlock) {
  const video = aboutUsVideoBlock.querySelector('.video');
  const playBtn = aboutUsVideoBlock.querySelector('.video-block__play');

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
}
