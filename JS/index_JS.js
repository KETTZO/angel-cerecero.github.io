$(document).ready(function () {
	$('.nav-menu-item').hover(
	function () {
		// Al hacer hover
		$(this).prev().addClass('hover-anterior');
		$(this).next().addClass('hover-posterior');
	},
	function () {
		// Al dejar de hacer hover
		$(this).css('background-color', '');
		$(this).prev().removeClass('hover-anterior');
		$(this).next().removeClass('hover-posterior');
	}
	);
});
//LAZY LOAD
document.addEventListener("DOMContentLoaded", function() {
	var images = document.querySelectorAll("img");
  
	images.forEach(function(image) {
	  if (image.hasAttribute("data-src")) {
		image.setAttribute("src", image.getAttribute("data-src"));
		image.removeAttribute("data-src");
		image.setAttribute("loading", "lazy");
	  }
	});
  });
