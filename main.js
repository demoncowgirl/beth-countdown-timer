
// PRB 2019 starts on 23 - 27, 2019
var totalSeconds = 300;

var timer = document.querySelector('#timer h2');

var seconds = '00';
var minutes = '00';
var hours = Math.floor(totalSeconds/3600); // returns the whole number without remainder
totalSeconds = totalSeconds -(hours * 3600);

var minutes = Math.floor(totalSeconds/60);
totalSeconds = totalSeconds - (minutes  * 60);

timer.innerHTML = hours + ':' + minutes + ';' + seconds;
