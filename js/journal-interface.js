var Entry = require('./../js/journal.js').wordCountModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry(title, body);
    var output = simpleEntry.wordCount();

    var vowelOutput = simpleEntry.vowels();

    $('#solution').append("<h3>"  + title + "</h3>");
    $('#solution').append("<h4>"  + body + "</h4><hr>");
    $('#solution').append("<li>"  + output + ' words in body' + "</li>");

    $('#solution').append("<li>"  + vowelOutput + ' vowels in body' + "</li>");

  });
});
