// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = '';
    output = `<p>I get on with life as a doctor, <br>
    I'm a funny kinda person. <br>
    I like programming on Sundays, <br>
    I like staring at walls in the week. <br>
    I like to contemplate pizza. <br>
    But when I start to daydream, <br>
    My mind turns straight to root beer.</p>`;

    return output;
}

function verse2(){
    let output = '';
    output = `<p>I like to use words like 'crikey,'<br>
    I like to use words like 'super.'<br>
    I like to use words about pizza.<br>
    But when I stop my talking,<br>
    My mind turns straight to root beer.</p>`;

    return output;
}

function verse3(){
    let output = '';
    output = `<p>I like to hang out with Mitch,<br>
    I like to kick back with Lunch Lady,<br>
    But when left alone,<br>
    My mind turns straight to root beer.</p>`;

    return output;
}

function verse4(){
    let output = '';
    output = `<p>I'm not too fond of leprechauns,<br>
    I really hate ghosts,<br>
    But I just think back to root beer,<br>
    And I'm happy once again.</p>`;

    return output;
}

function chorus(){
    let output = '';
    output = `<p>Do I love root beer more than pizza? <br>
    Do I love root beer more than pizza?</p>`;

    return output;
}



function main(){
    let finalOutput = ''; // used to build lyrics string
    // call verse and chorus functions
    finalOutput = `${verse1()}
                   ${chorus()}
                   ${verse2()}
                   ${chorus()}
                   ${verse3()}
                   ${chorus()}
                   ${verse4()}
                   ${chorus()}`;
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}