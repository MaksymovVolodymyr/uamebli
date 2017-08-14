 $(document).ready(function(){	
 	$('.toggle-grid__item1').click(function() {
 		$('.toggle-grid__big-box').removeClass('toggle-grid--active-box');
 		$('.product-box').removeClass('product-box--toggle-grid');
 		$('.toggle-grid__little-box').addClass('toggle-grid--active-box');
 	});

 	$('.toggle-grid__item2').click(function() {
 		$('.toggle-grid__little-box').removeClass('toggle-grid--active-box');
 		$('.product-box').addClass('product-box--toggle-grid');
 		$('.toggle-grid__big-box').addClass('toggle-grid--active-box');
 	});

 	$('.cat-filter__decore').click(function() {
 		$(this).toggleClass('cat-filter__decore--rotate');
 		$(this).toggleClass('cat-filter__decore--reset');
 		var $tab = $(this).parents('.cat-filter__box');
 		var $tabItem = $tab.find('.cat-filter__item');
 		$tabItem.toggle('slow');
 	});

 	$('.t-tab').click(function() {
 		var $tabItem = $(this).find('.t-tab__text');
 		$tabItem.toggle('slow');
 	});

 	$('.t-main-slider').slick({
 		asNavFor: '.t-main-subslider',
 		slidesToShow: 1,
 		slidesToScroll: 1
 	});

 	$('.t-main-subslider').slick({
 		asNavFor: '.t-main-slider',
 		slidesToShow: 3,
 		slidesToScroll: 1,
 		focusOnSelect: true
 	});

 	$('.t-anotherprod').slick({
 		slidesToShow: 3,
 		slidesToScroll: 1,
 	})

 	$('.header-menu-open').click(function() {
		$('.header-menu-mob__wrapper').animate({  
            right: '-20px' 
        }, 400); 
        $(this).fadeOut('fast'); 
	});

	$('.header-menu-mob__close').click(function() {  
        $('.header-menu-mob__wrapper').animate({  
            right: '-200%' 
        }, 400); 
        $('.header-menu-open').fadeIn('fast'); 
    });   
 	
 	
});	 	