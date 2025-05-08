
function showComp() {
  alert("Please input your grades to get your average.");
}

function rating() {
  var math = parseInt(document.getElementById('math').value);
  var science = parseInt(document.getElementById('science').value);
  var english = parseInt(document.getElementById('english').value);


  var average = (math + science + english) / 3;
  var result = parseFloat(average.toFixed(2)); 


  if (result >= 94 && result <= 100) {
    window.alert("Your average is " + result + " - Excellent");
  } else if (result >= 87 && result <= 93.99) {
    window.alert("Your average is " + result + " - Above Satisfactory");
  } else if (result >= 80 && result <= 86.99) {
    window.alert("Your average is " + result + " - Satisfactory");
  } else if (result >= 75 && result <= 79.99) {
    window.alert("Your average is " + result + " - Needs Improvement");
  } else if (result >= 70 && result <= 74.99) {
    window.alert("Your average is " + result + " - Poor");
  } else {
    window.alert("enter valid numbers.");
  }
}
