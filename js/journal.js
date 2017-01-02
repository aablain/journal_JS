function Entry() {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(result) {
  var output = [];
  for (var i = 1; i <= result; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.wordCountModule = Entry;
