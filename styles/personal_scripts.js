window.onscroll = function() {
  document.getElementById("blog-nav").style.display = "none";
};

window.onload = function() {
  document.getElementById("blog-nav").style.display = "none";
};

function navOpener() {
  var x = document.getElementById("blog-nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}