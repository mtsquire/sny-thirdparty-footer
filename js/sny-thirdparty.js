// SNY 3rd Party Header/Footer JS

$(document).ready(function(){
	var snyLinks = $('.sny-links'),
		moreLinks = $('.more-links'),
		dropdown = $('.sny-links-dropdown');

	function showSnyMenu() {
		snyLinks.addClass('active');
		dropdown.addClass('open');
		dropdown.slideDown('slow');
	}

	function hideSnyMenu() {
		snyLinks.removeClass('active');
		dropdown.removeClass('open');
		dropdown.slideUp('slow');
	};

	moreLinks.click(function(e){
		e.preventDefault();
		if (dropdown.hasClass('open')) {
			hideSnyMenu();
		} else {
			showSnyMenu();
		};
	});
});