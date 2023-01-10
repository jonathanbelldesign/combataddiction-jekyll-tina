$(document).ready(function() {
	$('#navTrigger').on('click', function() {
		$('#navTarget').slideToggle(150);
		$('body').toggleClass('navActive');
		$(this).find('.icon').toggleClass('icon-menu icon-close');
	});
	$('.contentTrigger').on('click', function(e) {
		e.preventDefault();
		el = $(this).attr('data-target');
		$(this).siblings('.contentTrigger').removeClass('active');//.addClass('inactive');
		$(this).toggleClass('active');//.removeClass('inactive');
		
		$(el).siblings('.contentTarget').removeClass('active');
		$(el).toggleClass('active');
	});
	
	stickyHeader();
	
	$('.slider').slick({
  	dots: true,
  	nextArrow: false,
  	prevArrow: false
	});
	
	responsiveVideo();
	
})
$(window).on('scroll', stickyHeader);

function stickyHeader() {
	if( $(window).scrollTop() > 90 ) {
		$('body').addClass('stickyHeader');
	}
	else {
		$('body').removeClass('stickyHeader');
	}
}

/* C is for Cookies */

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function responsiveVideo() {
  // Find all YouTube videos
  var $allVideos = $("iframe[src^='https://www.youtube.com']"),
  
  // The element that is fluid width
  $fluidEl = $("body");
  
  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {
  
    $(this)
      .data('aspectRatio', this.height / this.width)
  
      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');
  
  });
  
  // When the window is resized
  $(window).resize(function() {
  
    //var newWidth = $fluidEl.width();
  
    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {
  
      var $el = $(this);
      var $fluidEl = $el.parent();
      var newWidth = $fluidEl.width();
      
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));
  
    });
  
  // Kick off one resize to fix all videos on page load
  }).resize();
}