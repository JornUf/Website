let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let main = document.querySelector('main');

let lengthItems = items.length - 1;
let active = 0;

var coll = document.getElementsByClassName("collapsible");
var i;

//collapsible
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

for (i = 0; i < coll.length; i++) {
    coll[i].click();
  }


  //hero stuff
moveright = function(){
  if(document.querySelector(".hero:hover") == null){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  }
  else{
    moveright();
  }
}

let refreshInterval = setInterval(()=> {moveright()}, 10000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {moveright()}, 10000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

//burger
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('change', () => {
        navLinks.classList.toggle('active');
        main.classList.toggle('blurred');
    });
});
