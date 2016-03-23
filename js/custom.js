
document.createElement( "picture" );


document.documentElement.className += 
(("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');

$( document ).ready(function() {
	$(".skill").click(function() {	
		if ($(this).hasClass("expand")) {
			$(this).removeClass("expand");
		} else {
			$(".skill").removeClass("expand");
			$(this).addClass("expand");
		}
	});
});

