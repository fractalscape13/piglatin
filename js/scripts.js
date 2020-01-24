var finalPhrase = [];

function translateToPig(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var letters = word.split("");

  if (vowels.includes(letters[0])) {
    finalPhrase.push(word + "way");
  } else if (vowels.includes(letters[1])) {
    var removedLetter = letters.shift();
    var newWord1 = letters.concat(removedLetter + "ay").join("");
    finalPhrase.push(newWord1);
  } else if (vowels.includes(letters[2])) {
    var removedLetter2 = letters.splice(0, 2);
    finalPhrase.push(letters.join("") + removedLetter2.join("") + "ay");
  }else if (vowels.includes(letters[3])) {
    var removedLetter3 = letters.splice(0, 3);
    var newWord = letters.concat(removedLetter3.join("") + "ay").join("");
    finalPhrase.push(newWord);
  } else {

  }

 };





//pushes input through click function into translateToPig function^
$(document).ready(function() {
  $("form.form").submit(function(event) {
    event.preventDefault();
    var strInput = $("input.inputPhrase").val();
    var inputWords = strInput.split(" ");
    for (var i = 0; i < inputWords.length; i++) {
      translateToPig(inputWords[i]);
    } 
    var output = finalPhrase.join(" ");
    $("#output").text(output);
  });
});