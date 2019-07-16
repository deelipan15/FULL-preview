$(document).ready(function(){
	// change of styles while reaching navbar    
  	var scroll_start = 0;
  	var fromtop = 50;
    function change_style() { 
  		scroll_start = $(this).scrollTop();
    	if(scroll_start > $('.journey').offset().top-fromtop) {
    		$('#header_navigation').addClass('styles_change');
    	} else {
    		$('#header_navigation').removeClass('styles_change');
    	}
   	}
   	$(window).on('load scroll', change_style);


   	// scroll to id
 	$('a').on('click', function(e) {
 		e.preventDefault();
    	var target = $(this.getAttribute('href'));
    	if( target.length !="") {
        	$('html, body').animate({
           		scrollTop: target.offset().top-fromtop
        	}, 500);
    	}
  	});

  	// animation
	var animation_elements = $('.viewport_animation');

  	function check_visible() {
    	var window_height = $(window).height();
    	var window_top_position = $(window).scrollTop();
    	var fromanimatedtop = 300;
    	var window_bottom_position = (window_top_position + window_height);

    	$.each(animation_elements, function() {
      		var element = $(this);
      		var element_height = element.outerHeight();
      		var element_top_position = element.offset().top+fromanimatedtop;
     		var element_bottom_position = (element_top_position + element_height);

      		if ((element_bottom_position >= window_top_position) &&
        		(element_top_position <= window_bottom_position)) {
        		element.addClass('slideanimation');
      		}
    	});
  	}
 	$(window).on('scroll resize', check_visible);

 	// parallax effect
 	$(document).scroll(function() { 
    var scrolling = $(this).scrollTop();

    var parallaxY1 = -(scrolling/18);
    // var parallaxY2 = -(scrolling/12);
    // var parallaxY3 = -(scrolling/3);
    // var parallaxX2 = (scrolling/0.7);
    // $('.parallax1').css({ 'transform' : 'translateY('+parallaxY1+'px)' });
    // $('.parallax2').css({ 'transform' : 'translateY('+parallaxY2+'px) translateX('+parallaxX2+'px)' });
    // $('.parallax3').css({ 'transform' : 'translateY('+parallaxY3+'px)' });

    var parallaxY1 = -(scrolling/18);
    var parallaxY2 = (scrolling/9);
    var parallaxY3 = (scrolling/12);
    var parallaxYimgeven = -(scrolling/10);
    var parallaxYimgodd = (scrolling/10);
    $('.parallax1').css({ 'transform' : 'translateY('+parallaxY1+'px)' });
    $('.parallax2').css({ 'transform' : 'translateY('+parallaxY2+'px)' });
    $('.parallax3').css({ 'transform' : 'translateY('+parallaxY3+'px)' });
    $('.parallaxYimgeven').css({ 'transform' : 'translateY('+parallaxYimgeven+'px)' });
    $('.parallaxYimgodd').css({ 'transform' : 'translateY('+parallaxYimgodd+'px)' });

    var p1 = -(scrolling/21);
    var p2 = -(scrolling/18);
    var p3 = -(scrolling/15);
    var p4 = -(scrolling/12);
    var p5 = -(scrolling/9);
    var p6 = -(scrolling/6);
    var p7 = -(scrolling/3);
    var p8 = -(scrolling);
    $('.p1').css({ 'transform' : 'translateY('+p1+'px)' });
    $('.p2').css({ 'transform' : 'translateY('+p2+'px)' });
    $('.p3').css({ 'transform' : 'translateY('+p3+'px)' });
    $('.p4').css({ 'transform' : 'translateY('+p4+'px)' });
    $('.p5').css({ 'transform' : 'translateY('+p5+'px)' });
    $('.p6').css({ 'transform' : 'translateY('+p6+'px)' });
    $('.p7').css({ 'transform' : 'translateY('+p7+'px)' });
    $('.p8').css({ 'transform' : 'translateY('+p8+'px)' });
  });

  // displaying letter by letter
  function displayingtext(target, message, index, interval) {    
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { displayingtext(target, message, index, interval); }, interval);
    }
  }
  displayingtext("#oregontext", "Oregon,Portland", 0, 200);

});