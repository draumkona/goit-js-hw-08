import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);


const saveTime = ({
    seconds,
}) => {
    console.log(seconds)
    localStorage.setItem("videoplayer-current-time", seconds);
}

player.on("timeupdate", throttle(saveTime, 1000));

const resume = () => {
    const lastTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(lastTime)
};

resume();

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });