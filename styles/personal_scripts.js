function openMenu(id1,id2) {
  var elem = document.getElementById(id1);
  var svg_img = document.getElementById(id2);

if (svg_img.src.match("../styles/sidebar_open.svg")) {
  svg_img.src="../styles/sidebar_close.svg";
  elem.style.left = '0px';
  }
else {
  elem.style.left = '-200%';
  svg_img.src="../styles/sidebar_open.svg";
  }
}