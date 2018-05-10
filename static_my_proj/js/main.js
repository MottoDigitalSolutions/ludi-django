const Slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

Slider.addEventListener('mousedown', (e) => {
  isDown = true;
  Slider.classList.add('active');
  startX = (e.screenX - Slider.offsetLeft);
  scrollLeft = Slider.scrollLeft;

});

Slider.addEventListener('mouseleave', () => {
  isDown = false;
  Slider.classList.remove('active');
});

Slider.addEventListener('mouseup', () => {
  isDown = false;
  Slider.classList.remove('active');
});

Slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.screenX - Slider.offsetLeft;
  const walk = x - startX;
  
  Slider.scrollLeft = scrollLeft - walk;
});
