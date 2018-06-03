/* MAP JS */
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

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

    $('.cincuenta').on('click',function(){
      $('#primeroBoton').css('background-color','#bfd000');
      $('#segundoBoton').css('background-color','#ccc');
      $('#terceroBoton').css('background-color','#ccc');
      $('#cuartoBoton').css('background-color','#ccc');
      $('#quintoBoton').css('background-color','#ccc');

      $('#menores40').hide();
      $('#menores30').hide();
      $('#basico1').hide();
      $('#basico2').hide();
      $('#mayores40').show();
    });

    $('.cuarenta').on('click',function(){
      $('#primeroBoton').css('background-color','#ccc');
      $('#segundoBoton').css('background-color','#bfd000');
      $('#terceroBoton').css('background-color','#ccc');
      $('#cuartoBoton').css('background-color','#ccc');
      $('#quintoBoton').css('background-color','#ccc');

      $('#menores30').hide();
      $('#basico1').hide();
      $('#basico2').hide();
      $('#mayores40').hide();
      $('#menores40').show();
    });

    $('.treinte').on('click',function(){
      $('#primeroBoton').css('background-color','#ccc');
      $('#segundoBoton').css('background-color','#ccc');
      $('#terceroBoton').css('background-color','#bfd000');
      $('#cuartoBoton').css('background-color','#ccc');
      $('#quintoBoton').css('background-color','#ccc');

      $('#basico1').hide();
      $('#basico2').hide();
      $('#mayores40').hide();
      $('#menores40').hide();
      $('#menores30').show();
    });

    $('.basicoUno').on('click',function(){
      $('#primeroBoton').css('background-color','#ccc');
      $('#segundoBoton').css('background-color','#ccc');
      $('#terceroBoton').css('background-color','#ccc');
      $('#cuartoBoton').css('background-color','#bfd000');
      $('#quintoBoton').css('background-color','#ccc');

      $('#basico2').hide();
      $('#mayores40').hide();
      $('#menores40').hide();
      $('#menores30').hide();
      $('#basico1').show();
    });

    $('.basicoDos').on('click',function(){
      $('#primeroBoton').css('background-color','#ccc');
      $('#segundoBoton').css('background-color','#ccc');
      $('#terceroBoton').css('background-color','#ccc');
      $('#cuartoBoton').css('background-color','#ccc');
      $('#quintoBoton').css('background-color','#bfd000');

      $('#mayores40').hide();
      $('#menores40').hide();
      $('#menores30').hide();
      $('#basico1').hide();
      $('#basico2').show();
    });

    $('#cali').on('mouseenter', function(){
        $(this).children().css('opacity','1');
        $('.calid').css('display','none');
        $('.calidText').css('display','block');
    });
    $('#cali').on('mouseleave', function(){
        $(this).children().css('opacity','.8');
        $('.calid').css('display','block');
        $('.calidText').css('display','none');
    });

    $('#compe').on('mouseenter', function(){
        $(this).children().css('opacity','1');
        $('.competen').css('display','none');
        $('.competenText').css('display','block');
    });
    $('#compe').on('mouseleave', function(){
        $(this).children().css('opacity','.8');
        $('.competen').css('display','block');
        $('.competenText').css('display','none');
    });

    $('#priv').on('mouseenter', function(){
        $(this).children().css('opacity','1');
        $('.priva').css('display','none');
        $('.privaText').css('display','block');
    });
    $('#priv').on('mouseleave', function(){
        $(this).children().css('opacity','.8');
        $('.priva').css('display','block');
        $('.privaText').css('display','none');
    });


});
