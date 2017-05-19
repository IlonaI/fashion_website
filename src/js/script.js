$(document).ready(function() {

	// Isotope active js code

	$(".products-filter ul li").on('click', function(e) {

		e.preventDefault();
		
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	var $grid = $('.grid').isotope({
  		itemSelector: '.grid-item',
  		percentPosition: true,
 		masonry: {
    		// use outer width of grid-sizer for columnWidth
    		columnWidth: '.grid-item'
  		}
	})

});



