$(document).ready(function()
{
function toggle_color (color1,color2,cycle_time,wait_time){
    setInterval (function first_color(){
        $("nav").animate({
              backgroundColor: color1
        }, 1000, function(){
               setTimeout (change_color, wait_time);
        });
    }, cycle_time);
                
function change_color (){
       $("nav").animate({
              backgroundColor: color2
        }, 1000, function(){
              setTimeout(function (){}, wait_time);
        });
}
}
            
toggle_color ('#B2DBD7','#FFC0CB',8000,3000);
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
