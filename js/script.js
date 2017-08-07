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

});	 	