var Entry = require('./../js/journal.js').wordCountModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry("test");
    var output = simpleEntry.wordCount(result);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
