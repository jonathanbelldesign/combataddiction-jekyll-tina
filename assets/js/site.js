getLang = function() {
  return readCookie('calang');
}

setLang = function(lang, pageurl) {
  if(lang != null) {
    if (pageurl != null && pageurl != window.location.pathname) {
      window.location.pathname = newurl;
    }
    createCookie('calang', lang, 60);
  }
}

$(document).ready(function() {

  $langToggle = $('#lang-toggle');

  $langToggle.on('change', function(e) {
    newlang = $langToggle.val();
    newurl = $langToggle.find('option:selected').attr('data-url');
    setLang(newlang, newurl);
  });

  if(getLang() != $langToggle.val() && getLang() != null) {
    $langToggle.val(getLang()).trigger('change');
  }
  
  var current_section = ''; // tracking for on-page section navigation
  
  $(window).scroll(function() {
    var position = $(this).scrollTop();
    
    $('.page-section').each(function() {
      var target = $(this).offset().top - 10;
      var target_bottom = $(this).offset().top + $(this).height();
      var id = $(this).attr('id');
      
      if (position >= target && position <= target_bottom) {
      
        if (current_section != id) {
          current_section = id;
          $('.page-navigation li').removeClass('active');
          $('.page-navigation [data-id='+id+']').addClass('active');
          console.log(current_section);
        }
      }
    });
  });

  /* Floating Button */

  $b = $('#need-help button');
  $('#need-help').hover(function() {
    $(this).addClass('active');
  },
  function(){
    $(this).removeClass('active');
  })
  /*$b.on('click', function() {
    $('#need-help').toggleClass('active');
    //$(this).fadeOut();
    $('#need-help .message').hover(
      function() {

      },
      function(){
      $('#need-help').delay(3000).queue(function(next){
        $(this).removeClass('active');
        next();
      });
    })
  });*/

  /* Open third party links in new tab */

  $('a').each(function() {
    ahref = $(this).attr('href');
    if(!ahref.match('^/') && !ahref.match('^#') && ahref.indexOf('combataddictionchq.netlify')<0  && ahref.indexOf('combataddictionchq.com')<0) {
      //console.log(ahref);
      $(this).attr('target', '_blank');
    }
  });
  
  $('.page-navigation a').on('click', function(e){
    e.preventDefault();
    var targetEl = $(this).attr('href');
    var targetPos = (targetEl == '#top') ? 0 : $(targetEl).offset().top;
    
    $('html, body').animate({
      scrollTop: targetPos // - $('#navigation').height()
		}, 250, 'linear');
    
  });
  
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
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 750,
		fade: true,
		pauseOnHover: true,
  	dots: true,
  	nextArrow: '<span class="icon-arrow-right slick-next"></span>',
  	prevArrow: '<span class="icon-arrow-left slick-prev"></span>'
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