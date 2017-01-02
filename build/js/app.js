(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry() {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var output = [];
  var counter = 0;
  bodyArray = body.split(" ");
  finalCount = bodyArray.length

  return finalCount;

};

exports.wordCountModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
