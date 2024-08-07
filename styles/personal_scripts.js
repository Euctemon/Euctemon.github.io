function openMenu(id1,id2) {
  var elem = document.getElementById(id1);
  var svg_img = document.getElementById(id2);

if (svg_img.src.match("../styles/sidebarOpen.svg")) {
  svg_img.src="../styles/sidebar_close.svg";
  elem.style.left = '0px';
  }
else {
  elem.style.left = '-200%';
  svg_img.src="../styles/sidebar_open.svg";
  }
}





const sections = document.querySelectorAll("section");
window.addEventListener("scroll",navHighlight);

function navHighlight () {
sections.forEach(current => {
var currentID = '#' + current.getAttribute("id");
const currentNAV = document.querySelector(`a[href=${CSS.escape(currentID)}]`);
let scrollY = window.scrollY;

const sectionHeight = current.offsetHeight;
const sectionTop = current.offsetTop-200;

 if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      currentNAV.classList.add("active");
    } else {
      currentNAV.classList.remove("active");
    }

  }
)
}