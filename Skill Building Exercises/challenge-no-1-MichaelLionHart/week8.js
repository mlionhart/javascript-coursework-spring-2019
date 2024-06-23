$(document).ready(function () {

    $.ajax({
        url: "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&api-key=Eo5DUhuaw)xWf8TWsajbyg((",
        method: "GET"
    })
        .done(function (data) {
            data = displayQuestions(data);
            $('#questionsContainer').html(data);
        })
        .fail(function () {
            alert('Rut roh! Something went wrong when calling the API');
        });
});

function displayQuestions(data) {
    var output = '';
    var p = '<p>';
    var cp = '</p>';
    for (let i = 0; i < data.items.length; i++) {
        output += '<div>';
        output += p + '<span class="edit">Question: </span>' + data.items[i].title + cp;
        output += p + '<span class="edit">Link: </span>' + data.items[i].owner.link + cp;
        output += p + '<span class="edit">User: </span>' + data.items[i].owner.display_name + cp;
        output += p + '<span class="edit">Answered?: </span>' + data.items[i].is_answered + cp;
        output += p + '<span class="edit">Link to question: </span>' + data.items[i].link + cp;
        output += p + '<span class="edit">Date question was created: </span>' + data.items[i].creation_date + cp;
        output += p + '<span class="edit">Date question was modified: </span>' + data.items[i].last_activity_date + cp;
        output += '<hr>';
        output += '</div>';
    }
    return output;
}