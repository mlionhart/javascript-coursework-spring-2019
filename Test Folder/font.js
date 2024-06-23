function changeAlignment(x) {
    element = document.getElementById('special').style;
    if (x == 'left') {
        element.textAlign = 'left';
    }
    else if (x == 'center') {
        element.textAlign = 'center';
    }
    else if (x == 'right') {
        element.textAlign = 'right';
    }
    else {
        element.textAlign = 'justify';
    }
}

function changeColor(x) {
    element = document.body.style;
    if (x == 'blue') {
        element.backgroundColor = 'dodgerblue';
    }
    else if (x == 'red') {
        element.backgroundColor = 'red';
    }
    else if (x == 'green') {
        element.backgroundColor = 'green';
    }
    else {
        element.backgroundColor = 'orange';
    }
}