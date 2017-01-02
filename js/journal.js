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
