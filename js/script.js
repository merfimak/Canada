//alert( "Привет" );
$(document).ready(function(){


$(window).scroll(function(){
var s = $(this).scrollTop();

$(".left, .right").css({
    "transform" : "translate(0% , " + s/30 + "%)" //нужно подбирать значение на которое делить
});

});

$(".fin_bottom_form_body").validate({
        errorPlacement: function(error, element) {
            //Custom position: first name
            if (element.attr("name") == "email" ) {
                error.insertBefore(element);
            }
            //Custom position: second name
            else if (element.attr("name") == "name" ) {
               error.insertBefore(element);
            }
        },
             rules:{
                name:{
                  required: true,
                  minlength: 4,
                  maxlength: 16,
                },
                email:{
                  required: true,
                  minlength: 6,
                  maxlength: 16,
                },
             },
             messages:{
               email:{
                 required: "Это поле обязательно для заполнения",
                 minlength: "Логин должен быть минимум 4 символа",
                 maxlength: "Максимальное число символов - 16",
             },
               name:{
               required: "Это поле обязательно для заполнения",
               minlength: "Пароль должен быть минимум 6 символа",
               maxlength: "Пароль должен быть максимум 16 символов",
               },
               
    }
        
          });


	$('.burger').on('click', function (e){
		$('.burger,.menu__nav,.menu__overlay').toggleClass('active');
	});
  $('.menu__overlay').click(function(event){
    $('.burger,.menu__nav,.menu__overlay').toggleClass('active');
  });

$('.flowing_scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top - 90// прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки// offset() - возвращает координаты
        );
    }
    return false;
});

	$('.header__slider').slick({
			dots:true,
			slidesToShow:1,
			autoplay:true,
			speed:1000,
			autoplaySpeed:800,
			easing: 'ease',
			infinite: true,
			prevArrow: "<div class='prev_text'>Back</div><img src='./img/1header/icon/arrow-down.png' class='prev_arrow' alt='1'>",		
			nextArrow: "<div class='next_text'>Next</div><img src='./img/1header/icon/arrow-next.png' class='next_arrow' alt='1'>",	
				});


var $slider = $('.header__slider');// пишем клас слайдера
if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text('0' +currentSlide + '/03')//либо $(sliderCounter).text('0' +currentSlide + '/0' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}



})

