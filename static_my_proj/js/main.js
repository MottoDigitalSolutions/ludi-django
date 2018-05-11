
//nosotros filosofias

$(document).ready(function(){
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});


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


   $('.boton').on('click', function(){

    if ($(this).hasClass('active')){
      $(this).css('background-color','#f61');
      $(this).removeClass('active');
    }else{
      $(this).css('background-color','#ccc');
      $(this).addClass('active');
    }

   });

});
