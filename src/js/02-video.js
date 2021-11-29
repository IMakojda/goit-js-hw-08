
import  throttle  from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player(document.getElementById('vimeo-player'));



player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate(){
    player.getCurrentTime().then( function(seconds) {
           // seconds = the current playback position
           localStorage.setItem('videoplayer-current-time',seconds);
    });
}

const timeEnd=localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeEnd).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});