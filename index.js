// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//few video methods and properties
videoid1.play();

var videoid2 = document.getElementById('videoid2');
console.log(videoid2.currentTime);
videoid2.currentTime = 8;
console.log(videoid2.currentTime);
console.log(videoid2.defaultPlaybackRate);
videoid2.defaultPlaybackRate = 5;
console.log(videoid2.duration);
setTimeout(() => {
  console.log(videoid2.played);
}, 10000);
videoid2.muted = false;
videoid2.loop = false;
videoid2.volume = 0.1;

videoid2.onprogress = function() {
  console.log('being downloaded');
};

videoid2.onwaiting = function() {
  console.log('waiting for buffer');
};

videoid2.onloadeddata = function() {
  console.log('downloaded');
};

videoid2.onplay = function() {
  console.log('started playing');
};

videoid2.onpause = function() {
  console.log('paused');
};

videoid2.onplaying = function() {
  console.log('playing after pause');
};

videoid2.onended = function() {
  console.log('ended');
};

videoid2.onvolumechange = function() {
  console.log('volume changed:', videoid2.volume);
};

videoid2.ondurationchange = function() {
  console.log('duration changed:', videoid2.duration);
};

imgid.onmousemove = function(e) {
  console.log('x:', e.clientX, ' y:', e.clientY);
};
