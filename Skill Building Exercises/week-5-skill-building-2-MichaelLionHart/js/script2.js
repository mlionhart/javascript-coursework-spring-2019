// script2.js

var people = [
    ['Bruce Elgort', 'img/bruce-elgort.jpg'],
    ['Bob Hughes', 'img/bob-hughes.jpg'],
    ['Adam Coleman', 'img/adam-coleman.jpg'],
    ['Bob Knight', 'img/bob-knight.jpg'],
    ['Bob Williamson', 'img/bob-williamson.jpg']
];

var img = document.querySelector('img');

var i = 0;


function changeImage() {
    // change alt and src of img
    img.src = ;
}

window.onload = function() {
    var timer = setInterval(5000, changeImage);
}