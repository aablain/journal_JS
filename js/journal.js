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
