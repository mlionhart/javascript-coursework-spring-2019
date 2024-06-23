// lab12.js

// Initiate function once page is fully loaded
$(document).ready(function(){
	// Initiate ajax request
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
	var strong = "<strong>";
	var cstrong = "</strong>";
	for (var i=0 ; i < data.result.length ; i++){
		output += "<div>";
		output += p + strong + "<u>Created By</u>: " + cstrong + data.result[i].createdby + cp;
		output += p + strong + "<u>Idea</u>: " + cstrong + data.result[i].idea + cp;
		output += p + strong + "<u>IdeaSpace</u>: " + cstrong + data.result[i].ideaspace + cp;
		output += p + strong + "<u>Tags</u>: "+ cstrong ;
		// Iterate through tags array inside of data.result
		for (var j = 0 ; j < data.result[i].tags.length ; j++){
			// add tag array element content to the output
			output += data.result[i].tags[j] + " ";
		}
		output += cp;
		// end tags stuff 
		output += p + strong + "<u>Body</u>: " + cstrong + data.result[i].body + cp;
		output += p + strong + "<u>IdeaID</u>: " + cstrong + data.result[i].ideaid + cp;
		output += p + strong + "<u>URL</u>: " + cstrong + data.result[i].url + cp;
		output += p + strong + "<u>Votes</u>: " + cstrong + data.result[i].votes + cp;
		output += p + strong + "<u>Status</u>: " + cstrong + data.result[i].status + cp;
		// linkedid array
		output += p + strong + "<u>Linked Idea(s)</u>: " + cstrong;
		for (j=0 ; j < data.result[i].linkedideaid.length ; j++){
			output += data.result[i].linkedideaid[j] + " ";

		} 
		output += cp;
		// end linkeedid 
		output += p + strong + "<u>Additonal Long Text</u>: " + cstrong + data.result[i].additionallongtext + cp;
		output += p + strong + "<u>Additonal Text</u>: " + cstrong + data.result[i].additionaltext + cp;
		output += p + strong + "<u>Date Created</u>: " + cstrong + data.result[i].datecreated + cp;
		output += p + strong + "<u>Implementation Manager</u>: " + cstrong + data.result[i].implementationManager + cp;
		output += p + strong + "<u>Implementation Plan</u>: " + cstrong + data.result[i].implementationPlan + cp;
		// comments section
		output += p + strong + "<u>Comment(s): " + cstrong + cp;
		output += "<hr>";
		for (j = 0 ; j < data.result[i].comments.length ; j++){
			output += p + strong + "<u>Comment No.</u>: " + cstrong + (j + 1) + ":" + cp;
			output += p + strong + "<u>Created By</u>: " + cstrong + data.result[i].comments.createdby + cp;
			output += p + strong + "<u>Comment</u>: " + cstrong + data.result[i].comments.comment + cp;
			output += p + strong + "<u>Date Created</u>: " + cstrong + data.result[i].comments.datecreated + cp;
			output += "<hr>";
		}
		// end of div
		output += "</div>";
		}
	return output;
}
