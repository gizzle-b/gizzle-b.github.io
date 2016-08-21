$(function(){
toggle_color ("#B2DBD7","#FFC0CB",4000,2000);
function toggle_color (color1,color2,cycle_time,wait_time){
    setInterval (function first_color(){
        document.nav.style.backgroundColor=color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);
                
function change_color (){
       document.nav.style.backgroundColor=color2;
}
}

});

$(function() {
    $(window).scroll(function() {
		
		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var $navbar = $('nav');
		var $navbarWrapper = $('.navbar-wrapper')

		var pinPoint = $navbarWrapper.offset().top;

		if (distanceScrolled >= pinPoint) {
			$navbar.addClass('pinned');
		} else {
			$navbar.removeClass('pinned')
		}
	});
    
	$('a[href*="#"]').click(function(e) {
		e.preventDefault();
		var $target = $($(this).attr('href'));
		var scrollTop = $target.offset().top;
		$('html, body').animate({'scrollTop': scrollTop}, 500);
	});

});
