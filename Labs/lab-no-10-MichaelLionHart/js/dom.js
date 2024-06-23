// dom.js for lab10
// dom.js for lab6



function countElements(elementName) {
    let element = $(elementName);
    elementCount = element.length;
    console.log(elementCount)
    return elementCount
}

function displayElementText(elementName) {
    $(elementName).each(function() {
        alert($(this).html());
    });
}

function displayElementAttributes(elementName, elementAttribute) {
    $(elementName).each(function() {
        alert($(this).attr(elementAttribute));
    });
    // for (let i = 0; i < element.length; i++) {
    //     alert(element[i].attr(elementAttribute));
    // }
}

function displayElementsContentByClassName(className) {
    $('.' + className).each(function() {
        alert($(this).html());
    });
    // let element  = $('.' + className);
    // for (let i = 0; i < element.length; i++) {
    //     alert(element[i].html);
    // }
}

function clearMyOutputDiv() {
    $('#myoutput').html('');
}

/* ----------------------  Rewritten Functions below  ------------------------  */


function myOutput_countElements(elementName) {
    let element = $(elementName);
    elementCount = element.length;
    $('#myoutput').html(elementCount);
}

function myOutput_displayElementText(elementName) {
    $(elementName).each(function() {
        $('#myoutput').append(this);
    });
    // let element  = $(elementName);
    // for (let i = 0; i < element.length; i++) {
    //     $('#myoutput').append(element[i]);
    // }
}

function myOutput_displayElementAttributes(elementName, elementAttribute) {
    $(elementName).each(function() {
        $('#myoutput').append($(this).attr(elementAttribute));
    });
    // let element  = $(elementName);
    // for (let i = 0; i < element.length; i++) {
    //     $('#myoutput').append(element[i].attr(elementAttribute));
    //  }
}

function myOutput_displayElementsContentByClassName(className) {
    $('p.' + className).each(function() {
        $('#myoutput').append(this);
    });
    // let element = $('p.' + className);
    // for (let i = 0; i < element.length; i++) {
    //     $('#myoutput').append(element[i]);
    // }
}

/* ----------------------  End of Rewritten Functions  ------------------------  */

function changeStyle(className, styleValue) {
    $('.' + className).each(function() {
        $(this).css('background-color' , styleValue);
    });
    // let element = $('.' + className);
    // for (let i = 0; i < element.length; i++) {
    //     element[i].css('background-color' , styleValue);
    // }
}

function show(className) {
    $('.' + className).each(function() {
        $(this).css('display' , 'block');
    });
    // let element = $('.' + className);
    // for (let i = 0; i < element.length; i++) {
    //     element[i].css('display' , 'block');
    // }
}

function hide(className) {
    $('.' + className).each(function() {
        $(this).css('display' , 'none');
    });
    // let element = $('.' + className);
    // for (let i = 0; i < element.length; i++) {
    //     element[i].css('display', 'none');
    // }
}