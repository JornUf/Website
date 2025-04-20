let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let main = document.querySelector('main');

let lengthItems = items.length - 1;
let active = 0;

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
