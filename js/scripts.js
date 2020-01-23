$(document).ready(function() {
  $("form.form").submit(function() {
    event.preventDefault();
    var strInput = $("input.inputPhrase").val();
    // var inputArray = strInput.split(" ");
    console.log(strInput);
  });
});