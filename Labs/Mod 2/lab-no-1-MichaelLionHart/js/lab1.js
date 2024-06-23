// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}
// Not sure if it's absolutely necessary, but there was no space between the function name and the opening 
// squiggly bracket '{' on the 'listSkills()' function
function listSkills() {
    // Missing closing bracket ']' in 'skills' array
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}
// No space between the function name and the opening squiggly bracket '{' on the 'getStarted()' function
function getStarted() {
    // Missing semicolon after 'Bruce'
    // Missing '=' operator between 'firstName' and 'Bruce'
    // Missing semicolon after 'Clark College'
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    // Missing $ sign before {lastName}
    // Missing $ sign before {city}
    // Missing $ sign before {gpa}
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;
    // Closing </p> tag below had one single quote and one double - '</p>"
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}
// No space between the function name and the opening squiggly bracket '{' on the 'function()' function
window.onload = function() {
    getStarted();
    listSkills();
}