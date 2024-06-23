// script.js

var timer; // create variable named 'timer'
var index = 0; // create variable named 'index,' and set it's value to zero
var index2 = 0; // create variable named 'index2,' and set it's value to zero

    function stop() {
        clearInterval(timer); // stop 'timer'
        clearInterval(timer2); // stop 'timer2'
        document.getElementById('stop').classList.add('hide'); // hide the stop button
        console.log('Clearing the interval'); // console log a message notifying user that interval has been successfully cleared
        document.getElementById('start').classList.remove('hide'); // hide the start button
    }

    function start() {
        timer = setInterval(doit, 1000); // set 'timer' to run 'doit' function every second
        timer2 = setInterval(doit2, 1000); // set 'timer2' to run 'doit2' function every second
        document.getElementById('start').classList.add('hide'); // hide start button
        document.getElementById('stop').classList.remove('hide'); // show stop button
    }
    
    function doit() {
        var people = [  // create an array of people
            ['Bruce Elgort', 'img/bruce-elgort.jpg'],
            ['Bob Hughes', 'img/bob-hughes.jpg'],
            ['Adam Coleman', 'img/adam-coleman.jpg'],
            ['Bob Knight', 'img/bob-knight.jpg'],
            ['Bob Williamson', 'img/bob-williamson.jpg']
        ];

        let img = document.getElementById('img'); // bind 'img' variable to action of grabbing all images in array
        let rando = Math.floor(Math.random() * people.length); // generate random number to iterate through array
        img.src = people[rando][1]; // change image source selected/specified array information
        img.alt = people[rando][0]; // change image alt to selected/specified array information
        
        // if (index < people.length - 1) {
        //     index++;
        // } else {
        //     index = 0;
        // }
    }
    
    function doit2() {
        var people = [
            ['Bruce Elgort', 'img/bruce-elgort.jpg'],
            ['Bob Hughes', 'img/bob-hughes.jpg'],
            ['Adam Coleman', 'img/adam-coleman.jpg'],
            ['Bob Knight', 'img/bob-knight.jpg'],
            ['Bob Williamson', 'img/bob-williamson.jpg']
        ];

        let img = document.getElementById('img2');
        let rando = Math.floor(Math.random() * people.length);
        img.src = people[rando][1];
        img.alt = people[rando][0];
        
        // if (index2 < people.length - 1) {
        //     index2++;
        // } else {
        //     index2 = 0;
        // }
    }
    window.onload = function() { // as soon as the window loads, execute the following
        timer = setInterval(doit, 1000); // set 'timer' to run 'doit' function every second
        timer2 = setInterval(doit2, 1000); // set 'timer2' to run 'doit2' function every second
        document.getElementById('stop').classList.remove('hide'); // unhide stop button
    };    
