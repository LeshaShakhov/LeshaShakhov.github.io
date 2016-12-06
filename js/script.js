jQuery(document).ready(function(){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//// ---> Слайдер
$(function(){
  if($('.slider').exists()) {

    $('.slider').each(function(){

      var slider = $(this);

      var slideWrap = slider.find('.slide-wrap'),
          nextLink = slider.find('.next-slide'),
          prevLink = slider.find('.prev-slide'),
          slideWidth = slider.find('.slide-item').outerWidth(),
          scrollSlider = slideWrap.position().left - slideWidth;

      /* Клик по ссылке на следующий слайд */
      nextLink.click(function(){
        if(!slideWrap.is(':animated')) {
          slideWrap.animate({left: scrollSlider}, 500, function(){
            slideWrap
              .find('.slide-item:first')
              .appendTo(slideWrap)
              .parent()
              .css({'left': 0});
            });
          }
       });

      /* Клик по ссылке на предыдующий слайд */
      prevLink.click(function(){
      if(!slideWrap.is(':animated')) {
        slideWrap
          .css({'left': scrollSlider})
          .find('.slide-item:last')
          .prependTo(slideWrap)
          .parent()
          .animate({left: 0}, 500);
        }
      });

    });

  }

});

});


$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider_1 .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider_1 .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	
	$(".slider_1 .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".slider_1 .navigation").append("<div class='dot active'></div>");
		}
		else {
			$(".slider_1 .navigation").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".slider_1 .navigation").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$('.slider_1 .navigation .dot').click(function(){
		$(".slider_1 .navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".slider_1 .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
	
	
	$("body .slider_1 .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider_1 .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$(".slider_1 .navigation .active").removeClass("active");	
			$(dots[++i]).addClass("active");
		}
	});


	$("body .slider_1 .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущегоо слайда
			$(".slider_1 .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$(".slider_1 .navigation .active").removeClass("active");	
			$(dots[--i]).addClass("active");
		}
	});

});

