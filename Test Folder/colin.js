// lab12.js

// comment goes here
$(document).ready(function(){
    // comment goes here
    $.ajax({
        url: "http://ideajam.net/ideajam/p/ij.nsf/jsonGetWhatsHot",
        method: "GET"
    })
    .done(function(data){
        data = displayResults(data);
        $('#ideas_container').html(data);
    })
    .fail(function(){
        alert('Rut roh! Something went wrong when calling the API');
    });
});

function displayResults(data){
    var output = '';
    var p = "<p>"; // paragraph tag
    var cp = "</p>"; // closing paragraph tag
    for (var i=0 ; i < data.result.length ; i++){
        output += "<div>";
        output += p + "Created By: " + data.result[i].createdby + cp;
        output += p + "Idea: " + data.result[i].idea + cp;
        output += p + "IdeaSpace: " + data.result[i].ideaspace + cp;
        output += p + "Tags: ";
        // comment goes here
        for (var j = 0 ; j < data.result[i].tags.length ; j++){
            // comment goes here
            output += data.result[i].tags[j] + " ";
        }
        output += cp;
        // end tags stuff 
        output += p + "Body: " + data.result[i].body + cp;
        output += p + "IdeaID: " + data.result[i].ideadid + cp;
        output += p + "URL: " + data.result[i].url + cp;
        output += p + "Votes: " + data.result[i].votes + cp;
        output += p + "Status: " + data.result[i].status + cp;
        // linkedid array
        output += p + "Linked Idea(s): ";
        for (j=0 ; j < data.result[i].linkedideaid.length ; j++){
            output += data.result[i].linkedideaid + " ";

        } // end linkeedid 
        output += p + "Additonal Long Text: " + data.result[i].additionallongtext + cp;
        output += p + "Additonal Text " + data.result[i].additionaltext + cp;
        output += p + "Date Created: " + data.result[i].datecreated + cp;
        output += p + "Implementation Manager: " + data.result[i].implementationmanager + cp;
        output += p + "Implementation Plan: " + data.result[i].implementationplan + cp;
        // comments
        output += p + "Comment(s): " + cp;
        output += "<hr>";
        for (j = 0 ; j < data.result[i].comments.length ; j++){
            output += p + "Comment No. " + (j + 1) + ":" + cp;
            output += p + "Created By: " + data.result[i].createdby + cp;
            output += p + "Comment: " + data.result[i].comment + cp;
            output += p + "Date Created: " + data.result[i].datecreated + cp;
            output += "<hr>";
        }
        // comments
        output += "</div>";
        }
    return output;
}