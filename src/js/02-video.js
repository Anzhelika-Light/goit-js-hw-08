var throttle = require('lodash.throttle');

import Player from '@vimeo/player'; 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = function(data) {
    // data is an object containing properties specific to that event
    settingItem('videoplayer-current-time', data.seconds);
};

player
    .setCurrentTime(gettingItem('videoplayer-current-time'))
    .then(function(seconds) {
    // seconds = the actual time that the player seeked to
    })
    .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function settingItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Mistake is caught:', error.message);
  }
}

function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Mistake is caught:', error.message);
  }
}
