// dom.js for lab6

function countElements(elementName) {
    let element = document.getElementsByTagName(elementName);
    elementCount = element.length;
    console.log(elementCount)
    return elementCount
}

function displayElementText(elementName) {
    let element  = document.getElementsByTagName(elementName);
    for (let i = 0; i < element.length; i++) {
        alert(element[i].innerHTML);
    }
}

function displayElementAttributes(elementName, elementAttribute) {
    let element  = document.getElementsByTagName(elementName);
    for (let i = 0; i < element.length; i++) {
        alert(element[i].getAttribute(elementAttribute));
    }
}

function displayElementsContentByClassName(className) {
    let element  = document.getElementsByClassName(className);
    for (let i = 0; i < element.length; i++) {
        alert(element[i].innerHTML);
    }
}

function clearMyOutputDiv() {
    document.getElementById('myoutput').innerHTML = '';
}

/* ----------------------  Rewritten Functions below  ------------------------  */


function myOutput_countElements(elementName) {
    let element = document.getElementsByTagName(elementName);
    elementCount = element.length;
    document.getElementById('myoutput').innerHTML = elementCount;
}

function myOutput_displayElementText(elementName) {
    let element  = document.querySelectorAll(elementName);
    for (let i = 0; i < element.length; i++) {
        document.getElementById('myoutput').append(element[i]);
    }
}

function myOutput_displayElementAttributes(elementName, elementAttribute) {
    let element  = document.querySelectorAll(elementName);
    for (let i = 0; i < element.length; i++) {
        document.getElementById('myoutput').append(element[i].getAttribute(elementAttribute));
     }
}

function myOutput_displayElementsContentByClassName(className) {
    let element = document.querySelectorAll('p.' + className);
    for (let i = 0; i < element.length; i++) {
        document.getElementById('myoutput').append(element[i]);
    }
}

/* ----------------------  End of Rewritten Functions  ------------------------  */

function changeStyle(className, styleValue) {
    let element = document.getElementsByClassName(className);
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = styleValue;
    }
}

function show(className) {
    let element = document.getElementsByClassName(className);
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = 'block';
    }
}

function hide(className) {
    let element = document.getElementsByClassName(className);
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = 'none';
    }
}