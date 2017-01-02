(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  bodySentence = this.body;
  bodyArray = bodySentence.split(" ");
  finalCount = bodyArray.length;

  return finalCount;

};

Entry.prototype.vowels = function() {
  vowel_count = 0;
  this.body.toLowerCase().split("").forEach(function(letter) {
    if ((/[aeiou]/).test(letter)) {
      vowel_count++;
    }
  });
  return vowel_count;
};

Entry.prototype.consonants = function() {
  consonants_count = 0;
  this.body.toLowerCase().split("").forEach(function(letter) {
    if ((/[aeiou \s]/).test(letter)) {}
    else {
    consonants_count++;
    }
  });
  return consonants_count;
};



exports.wordCountModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').wordCountModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry(title, body);
    var output = simpleEntry.wordCount();
    var vowelOutput = simpleEntry.vowels();
    var conOutput = simpleEntry.consonants();

    $('#solution').append("<h3>"  + title + "</h3>");
    $('#solution').append("<h4>"  + body + "</h4><hr>");
    $('#solution').append("<li>"  + output + ' words in body' + "</li>");
    $('#solution').append("<li>"  + vowelOutput + ' vowels in body' + "</li>");
    $('#solution').append("<li>"  + conOutput + ' consonants in body' + "</li>");

  });
});

},{"./../js/journal.js":1}]},{},[2]);
