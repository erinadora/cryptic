var userInput = function(input) {
  var lowerInput = input.toLowerCase(); //gets rid of any capital letters
  var remove = /[,.!?;'":><%$&*@#1234567890 ]/g;
  return lowerInput.replace("");
}

var length = function(str) { // will return the value of our input
  return str.length;
}

var rows = function(str) { // will
  return Math.floor(Math.sqrt(str.length));
}

var cols = function (str) {
  return Math.ceil(Math.sqrt(str.length));
}

var crypt = function(str) {
  var str = userInput(str)
  var output = "";
  var x = cols(str);
  for (var i = 0; i < x ; i++) {
    for (var j = 0; j <str.length; j += x) {
      output += str.charAt(j + i);
    }
  }
  return boxes(output);
}

var boxes = function(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i = i + 5) {
    newStr += str.slice(i, i + 5) + " ";
  }
  return newStr.slice(0, newStr.length - 1)
}
$(document).ready(function() {
  $('form#cryptoform').keyup(function() {
    var sentence = $('textarea#sentence').val();
    var encryptedSentence = crypt(sentence);

    $('#textDisplay').text(encryptedSentence);

  });
});
