var testButton = document.getElementById("myButton");

testButton.addEventListener("mouseover", function () {
      var pikachu = testButton.classList;
      pikachu.add("colorRed");
    });


testButton.addEventListener("mouseleave", function () {
  var list = testButton.classList;
  list.remove("colorRed");
    });

testButton.addEventListener("mousedown", function () {
      alert("hello");
    });