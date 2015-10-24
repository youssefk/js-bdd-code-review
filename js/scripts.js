var isValidInput = true;
var bottlesAreLeft = true;
var bottles = function(bottlesAreLeft) {

  var bottlesInput = parseInt(prompt("How many bottles shall we start with? Please enter a positive number. DISCLAIMER: Keep the number LOW as there will be that many numbers of alerts popping up. Watch the specs change as the song is sung!"));
  
  if (bottlesInput >= 1) {

    for (var bottlesLeft = bottlesInput; bottlesLeft >= 1; bottlesLeft -= 1) {
      alert(bottlesLeft + " bottles of beer on the wall, " + bottlesLeft + " bottles of beer. Take one down, pass it around, " + (bottlesLeft - 1) + " bottles of beer on the wall.");
    }
    return false;
    alert("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + bottlesInput + " bottles of beer on the wall.");
    var bottlesAreLeft = false;

  } else { var isValidInput = false;
           alert("Invalid input, please reload the page and try again.");
         
  }

}