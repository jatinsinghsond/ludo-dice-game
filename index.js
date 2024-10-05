function roll() {
  document.getElementById("squareContainer").innerHTML = "Please wait...";

  setTimeout(function () {
    var random = Math.floor(Math.random() * 6) + 1;

    document.getElementById("squareContainer").innerHTML =
      "<img src='media/image" + random + ".png'/>";
  }, 500);
}
