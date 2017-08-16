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
 		$tabItem.slideToggle('slow');
 	});


 	$('.t-tab').click(function() {
        var $tabDecore = $(this).find('.t-tab__decore');
        $tabDecore.toggleClass('t-tab__decore--rotate');
        $tabDecore.toggleClass('t-tab__decore--reset');
 		var $tabItem = $(this).find('.t-tab__text');
 		$tabItem.slideToggle('slow');
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
            right: '0' 
        }, 400); 
        $(this).fadeOut('fast'); 
	});

	$('.header-menu-mob__close').click(function() {  
        $('.header-menu-mob__wrapper').animate({  
            right: '-200%' 
        }, 400); 
        $('.header-menu-open').fadeIn('fast'); 
    });   
 	
    $('.filter-mob__title').click(function() {
    	$('.filter-mob-wrapper').slideToggle('slow');
    });  

    //scroll 
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
 
        var target = this.hash,
        $target = $(target);
 
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    }); 

    $('.t-sec1__color').click(function() {
        $('.t-sec1__color').removeClass('t-sec1__color--active');
        $(this).addClass('t-sec1__color--active');
    });
 	
});	 	