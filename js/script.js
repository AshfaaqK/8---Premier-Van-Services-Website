$(window).scroll(function() {
	$('nav, .nav-link, .navbar-brand, .navbar-nav, .nav-picture, .navbar-toggler').toggleClass('scrolled', $(this).scrollTop() > 50);
});
