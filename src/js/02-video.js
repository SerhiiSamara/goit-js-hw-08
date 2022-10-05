const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');
const parsedSettings = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(parsedSettings || 0);
player.on('timeupdate', throttle(saveLocalStorage, 1000));
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function saveLocalStorage(e) {
  console.log('played the video!');
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}
