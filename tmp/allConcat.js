var Entry = require('./../js/journal.js').wordCountModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry("test");
    var output = simpleEntry.wordCount(body);
    // output.forEach(function(element){
    
    $('#solution').append("<h3>"  + title + "</h3>");
    $('#solution').append("<h4>"  + body + "</h4><hr>");
    $('#solution').append("<li>"  + output + ' words in body' + "</li>");
    // });
  });
});
